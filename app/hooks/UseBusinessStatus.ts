"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

type TimeSlot = { open: string; close: string };
type DaySchedule = TimeSlot | TimeSlot[];
type Schedule = { is24h?: boolean } & { [key: string]: DaySchedule | boolean | undefined };

export type BusinessStatus = "24H" | "OPEN" | "CLOSING_SOON" | "OPENS_SOON" | "CLOSED";

const TIMEZONE = "America/Campo_Grande";

const toMinutes = (time: string): number => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const evaluateSlot = (
  slot: TimeSlot,
  currentMinutes: number,
): "OPEN" | "CLOSING_SOON" | "CLOSED" => {
  const openMin = toMinutes(slot.open);
  const closeMin = toMinutes(slot.close);
  const crossesMidnight = closeMin <= openMin;

  const isOpen = crossesMidnight
    ? currentMinutes >= openMin || currentMinutes < closeMin
    : currentMinutes >= openMin && currentMinutes < closeMin;

  if (!isOpen) return "CLOSED";

  const minutesUntilClose = crossesMidnight
    ? currentMinutes >= openMin
      ? 24 * 60 - currentMinutes + closeMin
      : closeMin - currentMinutes
    : closeMin - currentMinutes;

  return minutesUntilClose < 60 ? "CLOSING_SOON" : "OPEN";
};

const computeStatus = (schedule: Schedule): BusinessStatus => {
  if (schedule.is24h) return "24H";

  const now = dayjs().tz(TIMEZONE);
  const dayOfWeek = now.day();
  const currentMinutes = now.hour() * 60 + now.minute();

  const todaySchedule = schedule[String(dayOfWeek)] as DaySchedule | undefined;

  if (todaySchedule) {
    const slots = Array.isArray(todaySchedule) ? todaySchedule : [todaySchedule];
    for (const slot of slots) {
      const result = evaluateSlot(slot, currentMinutes);
      if (result !== "CLOSED") return result;
    }
  }

  const yesterday = (dayOfWeek + 6) % 7;
  const yesterdaySchedule = schedule[String(yesterday)] as DaySchedule | undefined;

  if (yesterdaySchedule) {
    const slots = Array.isArray(yesterdaySchedule) ? yesterdaySchedule : [yesterdaySchedule];
    for (const slot of slots) {
      const closeMin = toMinutes(slot.close);
      const openMin = toMinutes(slot.open);
      const crossesMidnight = closeMin <= openMin;
      if (crossesMidnight && currentMinutes < closeMin) {
        const minutesUntilClose = closeMin - currentMinutes;
        return minutesUntilClose < 60 ? "CLOSING_SOON" : "OPEN";
      }
    }
  }

  if (todaySchedule) {
    const slots = Array.isArray(todaySchedule) ? todaySchedule : [todaySchedule];
    for (const slot of slots) {
      const openMin = toMinutes(slot.open);
      const minutesUntilOpen = (openMin - currentMinutes + 1440) % 1440;
      if (minutesUntilOpen > 0 && minutesUntilOpen <= 60) return "OPENS_SOON";
    }
  }

  return "CLOSED";
};

const useBusinessStatus = (schedule: Schedule): BusinessStatus | null => {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    setStatus(computeStatus(schedule));
    const interval = setInterval(() => setStatus(computeStatus(schedule)), 60000);
    return () => clearInterval(interval);
  }, [schedule]);

  return status;
};

export default useBusinessStatus;

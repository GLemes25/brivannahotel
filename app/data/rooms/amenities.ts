// src/data/amenities.ts
import { Refrigerator, Tv, Wifi, Wind } from "lucide-react";

export const amenityMap = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  ac: { icon: Wind, label: "Ar-condicionado" },
  fridge: { icon: Refrigerator, label: "Frigobar" },
  tv: { icon: Tv, label: "Tv" },
} as const;

export type AmenityKey = keyof typeof amenityMap;
// "wifi" | "ac" | "coffee"
export type Amenity = (typeof amenityMap)[AmenityKey];

// src/data/amenities.ts
import { Coffee, Wifi, Wind } from "lucide-react";

export const amenityMap = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  ac: { icon: Wind, label: "Ar-condicionado" },
  coffee: { icon: Coffee, label: "Café" },
} as const;

export type AmenityKey = keyof typeof amenityMap;
// "wifi" | "ac" | "coffee"
export type Amenity = (typeof amenityMap)[AmenityKey];

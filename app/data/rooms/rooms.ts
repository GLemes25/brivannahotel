// src/data/rooms.ts
import { AmenityKey } from "./amenities";

export type Room = {
  name: string;
  description: string;
  image: string;
  capacity: string;
  priceRange: string;
  featured?: boolean;
  amenities: AmenityKey[];
};

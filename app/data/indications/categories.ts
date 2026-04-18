import {
  Beef,
  Dumbbell,
  Landmark,
  LucideIcon,
  Pill,
  Pizza,
  Plane,
  ShoppingCart,
  UtensilsCrossed,
  WashingMachine,
  Wine,
} from "lucide-react"

type Category = {
  slug: string
  label: string
  icon: LucideIcon
}

export const CATEGORIES: Category[] = [
  { slug: "laundries", label: "Lavanderias", icon: WashingMachine },
  { slug: "burger-joints", label: "Hamburguerias", icon: Beef },
  { slug: "restaurants", label: "Restaurantes", icon: UtensilsCrossed },
  { slug: "pizzerias", label: "Pizzarias", icon: Pizza },
  { slug: "tourist-spots", label: "Pontos Turísticos", icon: Landmark },
  { slug: "supermarkets", label: "Supermercados", icon: ShoppingCart },
  { slug: "pharmacies", label: "Farmácias", icon: Pill },
  { slug: "airport", label: "Aeroporto", icon: Plane },
  { slug: "gyms", label: "Academias", icon: Dumbbell },
  { slug: "bars", label: "Bares", icon: Wine },
]

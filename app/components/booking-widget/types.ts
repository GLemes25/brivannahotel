export type BookingDateRange = {
  from: Date | undefined
  to: Date | undefined
}

export type BookingRoom = {
  id: number
  adults: number
  children: number
  childrenAges: number[]
}

export type BookingState = {
  dateRange: BookingDateRange
  rooms: BookingRoom[]
  discountCode: string
}

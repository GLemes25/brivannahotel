"use client"

import type { ReactNode } from "react"

type CounterButtonProps = {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

const CounterButton = ({ onClick, children, disabled }: CounterButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="size-7 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
  >
    {children}
  </button>
)

export default CounterButton

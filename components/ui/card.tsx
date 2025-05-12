"use client"

import React, { ReactNode } from "react"
import clsx from "clsx"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("rounded-lg border bg-white p-6 shadow-sm", className)}>
      {children}
    </div>
  )
}

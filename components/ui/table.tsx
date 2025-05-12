"use client"

import React, { ReactNode } from "react"
import clsx from "clsx"

interface TableProps {
  children: ReactNode
  className?: string
}

export function Table({ children, className }: TableProps) {
  return (
    <table className={clsx("w-full caption-bottom text-sm border-collapse", className)}>
      {children}
    </table>
  )
}

export function TableHeader({ children, className }: TableProps) {
  return (
    <thead className={clsx("bg-gray-50", className)}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className }: TableProps) {
  return (
    <tbody className={clsx("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  )
}

interface TableRowProps {
  children: ReactNode
  className?: string
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={clsx("border-b border-gray-200 hover:bg-gray-100", className)}>
      {children}
    </tr>
  )
}

interface TableHeadProps {
  children: ReactNode
  className?: string
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <th
      className={clsx(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0",
        className
      )}
    >
      {children}
    </th>
  )
}

interface TableCellProps {
  children: ReactNode
  className?: string
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td className={clsx("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}>
      {children}
    </td>
  )
}

import type React from "react"

export const preferredRegion = "auto"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}


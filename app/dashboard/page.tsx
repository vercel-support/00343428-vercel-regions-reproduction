"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [region, setRegion] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => setRegion(data.region))
  }, [])

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>This page should be served from the nearest region</p>
      <p>Current region: {region || "Loading..."}</p>
      <Link href="/">Go to Home</Link>
    </div>
  )
}


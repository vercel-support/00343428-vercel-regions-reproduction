"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [region, setRegion] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => setRegion(data.region))
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <p>This page should be served from syd1</p>
      <p>Current region: {region || "Loading..."}</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  )
}


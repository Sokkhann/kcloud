import { ParkingMeter } from 'lucide-react';
import React from 'react'

interface PageProps {
  params : {
    slug: string;
  }
}

export default async function page({ params }: PageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  console.log("Slug: ", params)
  return (
    <div>
      <h1>Hello, this is the h1age detail of partners</h1>
      {slug}
    </div>
  )
}

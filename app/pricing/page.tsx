import PricingPage from '@/components/page/pricing/PricingPage'
import type { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://portal.gcxcloud.cc";

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: "Cloud Pricing | GCX KCloud – Transparent & Scalable Cloud Solutions",
  description:
    "Explore transparent and flexible pricing for GCX KCloud services. Compare costs for Virtual Machines, Kubernetes, Block Storage, Backup, Load Balancer, and other cloud resources. Choose scalable plans that fit your business needs.",

  keywords: [
    "GCX KCloud Pricing",
    "Cloud Pricing Cambodia",
    "Virtual Machine Pricing",
    "Kubernetes Pricing",
    "Block Storage Pricing",
    "Backup Pricing",
    "Load Balancer Pricing",
    "Cloud Resource Pricing",
    "Enterprise Cloud Solutions",
    "Scalable Cloud Plans",
    "Flexible Cloud Pricing",
    "Cambodia Cloud Services",
  ],

  alternates: {
    canonical: `${domain}/pricing`,
  },

  openGraph: {
    title: "GCX KCloud Cloud Pricing | Transparent & Scalable Plans",
    description:
      "Compare pricing for GCX KCloud services, including Virtual Machines, Kubernetes, Block Storage, Backup, and Load Balancer. Transparent and flexible plans designed to scale with your business.",
    url: `${domain}/pricing`,
    siteName: "GCX KCloud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pricing-bg.png", // main pricing page image
        width: 1200,
        height: 630,
        alt: "GCX KCloud Pricing Overview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GCX KCloud Cloud Pricing",
    description:
      "Explore transparent and scalable cloud pricing for Virtual Machines, Kubernetes, Block Storage, Backup, and Load Balancer. Choose plans that grow with your business.",
    images: ["/pricing-bg.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function page() {
  return (
    <div className='bg-white'>
      <PricingPage />
    </div>
  )
}
import AboutPage from '@/components/page/AboutPage'
import type { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://portal.gcxcloud.cc";

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: "About Us | GCX KCloud – Cloud Infrastructure in Phnom Penh",
  description:
    "Discover GCX KCloud, a Cambodian cloud service provider powered by Tier 3 carrier-neutral infrastructure in Phnom Penh. Learn about our mission, vision, and commitment to secure, scalable, and reliable cloud solutions.",

  keywords: [
    "GCX KCloud",
    "GCX Cambodia",
    "Cloud Services Cambodia",
    "Cloud Infrastructure Phnom Penh",
    "Tier 3 Data Center Cambodia",
    "Carrier Neutral Data Center",
    "Enterprise Cloud Solutions",
    "Digital Transformation Cambodia",
    "Secure Cloud Hosting",
  ],

  alternates: {
    canonical: `${domain}/about-us`,
  },

  openGraph: {
    title: "About GCX KCloud | Secure Cloud Infrastructure in Phnom Penh",
    description:
      "GCX KCloud delivers secure, scalable, and enterprise-grade cloud solutions powered by Cambodia’s Tier 3 carrier-neutral data center infrastructure.",
    url: `${domain}/about-us`,
    siteName: "GCX KCloud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about-us-bg.png",
        width: 1200,
        height: 630,
        alt: "GCX KCloud – About Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About GCX KCloud",
    description:
      "Learn how GCX KCloud supports Cambodia’s digital growth with secure and scalable cloud infrastructure.",
    images: ["/about-us-bg.png"],
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
    <div>
      <AboutPage/>
    </div>
  ) 
}

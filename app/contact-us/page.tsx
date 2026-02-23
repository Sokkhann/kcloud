import ContactSalePage from '@/components/page/ContactSalePage'
import { Metadata } from 'next';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://portal.gcxcloud.cc";

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: "Contact Us | GCX KCloud – Cloud Services in Phnom Penh",
  description:
    "Reach out to GCX KCloud for sales inquiries, technical support, or general questions. Get expert assistance for secure, scalable, and reliable cloud and internet services in Cambodia.",

  keywords: [
    "GCX KCloud",
    "Contact Us",
    "Cloud Services Cambodia",
    "Customer Support",
    "Technical Support",
    "Sales Inquiry Cambodia",
    "Enterprise Cloud Services",
    "Phnom Penh Cloud Solutions",
  ],

  alternates: {
    canonical: `${domain}/contact-us`,
  },

  openGraph: {
    title: "Contact GCX KCloud | Cloud Services in Phnom Penh",
    description:
      "Get in touch with GCX KCloud for expert support on cloud solutions and internet services. Our team provides guidance, sales assistance, and technical help across Cambodia.",
    url: `${domain}/contact-us`,
    siteName: "GCX KCloud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/contact-us-bg.png",
        width: 1200,
        height: 630,
        alt: "GCX KCloud – Contact Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact GCX KCloud",
    description:
      "Reach out to GCX KCloud for sales, support, or general inquiries. We provide reliable and secure cloud solutions in Cambodia.",
    images: ["/contact-us-bg.png"],
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
      <ContactSalePage/>
    </div>
  )
}

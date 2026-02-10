import ContactSalePage from '@/components/page/ContactSalePage'
import { Metadata } from 'next';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Contact Us | GCX K-Cloud",
  description: "Get in touch with GCX K-Cloud. Reach out for sales inquiries, technical support, or general questions about our cloud and internet services in Cambodia.",
  keywords: ["GCX K-Cloud", "Contact Us", "Cloud Services Cambodia", "Customer Support", "Sales Inquiry"],

  openGraph: {
    title: "Contact Us | GCX K-Cloud",
    description: "Get in touch with GCX K-Cloud. Reach out for sales inquiries, technical support, or general questions about our cloud and internet services in Cambodia.",
    url: `${domain}/contact-us`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`,
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Contact Us",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | GCX K-Cloud",
    description: "Get in touch with GCX K-Cloud. Reach out for sales inquiries, technical support, or general questions about our cloud and internet services in Cambodia.",
    images: [`${domain}/about-us.png`],
  },
};

export default function page() {
  return (
    <div>
      <ContactSalePage/>
    </div>
  )
}

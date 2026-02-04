import ContactSalePage from '@/components/page/ContactSalePage'
import { Metadata } from 'next';

const contactMetadata = {
  title: "Contact Kcloud | Get in Touch",
  description: "Reach out to KCloud for sales, support, or inquiries. We provide reliable cloud products in Cambodia.",
  keywords: [
    "Kcloud",
    "Kcloud Cambodia",
    "Contact",
    "Cloud Products Cambodia",
    "Cloud Solutions Cambodia",
    "Support",
    "Sales",
  ],
  image: "/images/contact_us.jpg",
};

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, image } = contactMetadata;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact-us`,
      siteName: "Kcloud",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/contact-us`,
    },
  };
}

export default function page() {
  return (
    <div>
      <ContactSalePage/>
    </div>
  )
}

import type { Metadata } from "next";
import { Inter, Suwannaphum } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-en",
  subsets: ["latin"],
});

const suwannaphum = Suwannaphum({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-kh",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d793e", // ✅ put it here instead
};

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://portal.gcxcloud.cc";

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: {
    default: "GCX KCloud",
    template: "%s | GCX KCloud",
  },

  description:
    "GCX KCloud delivers enterprise-grade cloud and connectivity solutions in Cambodia. Explore secure, scalable, and high-performance cloud infrastructure for modern businesses.",

  keywords: [
    "GCX KCloud",
    "Cloud Services Cambodia",
    "Cloud Solutions",
    "Enterprise Cloud Infrastructure",
    "Tier 3 Data Center Cambodia",
    "Carrier Neutral Cloud",
    "Scalable Cloud Solutions",
  ],

  alternates: {
    canonical: domain,
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

  openGraph: {
    type: "website",
    url: domain,
    siteName: "GCX KCloud",
    locale: "en_US",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "GCX KCloud Cloud Connectivity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GCX KCloud",
    description:
      "Secure, scalable, and enterprise-grade cloud solutions in Cambodia. Powered by GCX Tier 3 carrier-neutral data center.",
    images: ["/hero-bg.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${suwannaphum.variable} antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-grow mt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

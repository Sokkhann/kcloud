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

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: {
    default: "GCX K-Cloud",
    template: "%s | GCX K-Cloud",
  },
  description:
    "Enterprise-grade cloud and connectivity solutions in Cambodia.",

  openGraph: {
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Cloud Connectivity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-bg.png"],
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
        className={`${inter.variable} ${suwannaphum.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* banner section */}

        {/* navbar section */}
        <header className="">
          <Navbar />
        </header>

        <section className="flex-grow bg-gray-50 mt-20">
          {children}
        </section>

        {/* footer section */}
        <Footer />
      </body>
    </html>
  );
}

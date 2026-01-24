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

export const metadata: Metadata = {
  title: "Global Cloud Exchange",
  description: "GCX Global Cloud Exchange in Cambodia number",
  icons: {
    icon: [
      {
        url: "/gcx-logo.png",
        type: "image/png",
        sizes: ""
      },
    ],
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

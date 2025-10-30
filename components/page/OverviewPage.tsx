"use client";

import HeroComponent from "../HeroComponent";
import { ProductTab } from "../tab/ProductTab";
import SolutionCard from "../card/SolutionCard";
import GetStartedCard from "../card/GetStartedCard";
import HoverExpandCards from "../card/HoverExpandCard";
import SwitchCard from "../card/SwitchCarousel";
import CustomerCarousel from "../card/CustomerCarousel";
import ScrollReveal from "../animations/ScrolReveal";

export default function OverviewPage() {
  return (
    <div className="">
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Smartest and Secure Choice for Connectivity"
        description="Global Cloud Exchange Company Limited (GCX), a Cambodia-registered company, is one of the country’s first “Carrier Neutral” Tier 3 Data Center built to meet the ever-growing needs of institutional and high-level clients in Cambodia’s emerging economy."
      />

      {/* Product Section */}
      <section className=" bg-gray-100">
        {/* products */}
        <ScrollReveal>
          <section
            id="products"
            className="mb-24 max-w-7xl mx-auto px-4 py-32 text-center"
          >
            {/* title and description */}
            <div className="my-12 px-4 sm:px-6 lg:px-0">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
                See Our Products & Services
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-full sm:max-w-2xl mx-auto">
                Bringing your business to the next level with our innovative
                solutions designed to enhance performance, efficiency, and
                long-term growth.
              </p>
            </div>

            {/* Product Tabs section */}
            <ProductTab />
          </section>
        </ScrollReveal>

        {/* Solution Section */}
        <section id="solutions" className="px-4 py-32 bg-white">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto mb-24">
              {/* title and description */}
              <div className="my-12 text-center">
                <p className="text-5xl font-bold text-gray-700">
                  Solution for Modern Agribusiness Systems
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                  Enabling smarter operations across all functions of an
                  integrated agribusiness, from cultivation and processing to
                  supply chain and sales optimizing performance through data,
                  technology, and innovation.
                </p>
              </div>

              {/* Solutions section */}
              <SolutionCard />
            </div>
          </ScrollReveal>
        </section>

        {/* The reason why we use cloud GCX */}
        <section id="why-choose-gcx" className="px-4 py-32">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto mb-24">
              {/* title and description */}
              <div className="my-12 text-center">
                <p className="text-5xl font-bold text-gray-700">
                  Why GCX Cloud?
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                  Enabling smarter operations across all functions of an
                  integrated agribusiness, from cultivation and processing to
                  supply chain and sales optimizing performance through data,
                  technology, and innovation.
                </p>
              </div>

              {/* Solutions section */}
              <HoverExpandCards />
            </div>
          </ScrollReveal>
        </section>

        {/* What makes us Different Section */}
        <section id="what-make-us-different" className="px-4 py-16 bg-white">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto mb-24">
              {/* title and description */}
              <div className="my-12 text-center">
                <p className="text-5xl font-bold text-gray-700">
                  What makas us different
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                  Enabling smarter operations across all functions of an
                  integrated agribusiness — from production and processing to
                  distribution and analytics — driving efficiency and growth at
                  every stage.
                </p>
              </div>

              {/* Solutions section */}
              <SwitchCard />
            </div>
          </ScrollReveal>
        </section>

        {/* Customer Testimonials Section */}
        <div className="px-4 py-16 my-32">
          <ScrollReveal>
            <div>
              <div className="max-w-7xl mx-auto mb-24">
                {/* title and description */}
                <div className="my-12 text-center justify-center">
                  <p className="text-5xl font-bold text-gray-700">
                    Customer Testimonials
                  </p>
                  <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Real stories. Real results. Our customers share how GCX
                    helped them simplify operations and grwo faster. Discover
                    why businesses around the world choose GCX every day.
                  </p>
                </div>
              </div>

              {/* Customer section */}
              <CustomerCarousel />
            </div>
          </ScrollReveal>
        </div>

        <section className="max-w-7xl mx-auto mb-32">
          <ScrollReveal>
            <GetStartedCard />
          </ScrollReveal>
        </section>
      </section>
    </div>
  );
}

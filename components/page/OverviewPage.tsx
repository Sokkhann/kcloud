"use client";

import HeroComponent from "../HeroComponent";
import { ProductTab } from "../tab/ProductTab";
import GetStartedCard from "../card/GetStartedCard";
import HoverExpandCards from "../card/HoverExpandCard";
import SwitchCard from "../card/SwitchCarousel";
import CustomerCarousel from "../card/CustomerCarousel";
import ScrollReveal from "../animations/ScrolReveal";

export default function OverviewPage() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Smartest and Secure Choice for Connectivity"
        description="Global Cloud Exchange Company Limited (GCX), a Cambodia-registered company, is one of the country’s first “Carrier Neutral” Tier 3 Data Center built to meet the ever-growing needs of institutional and high-level clients in Cambodia’s emerging economy."
      />

      <div className="mt-10">
        {/* Product Section */}
        <section className=" bg-gray-100">
          {/* products */}
          <section
            id="products"
            className="text-center lg:py-32 md:py-32 py-16"
          >
            <ScrollReveal>
              <div className="max-w-7xl mx-auto">
                {/* title and description */}
                <div className="text-center mx-4 mb-4">
                  <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
                    See Our Products & Services
                  </p>
                  <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
                    Bringing your business to the next level with our innovative
                    solutions designed to enhance performance, efficiency, and
                    long-term growth.
                  </p>
                </div>

                {/* Product Tabs section */}
                <ProductTab />
              </div>
            </ScrollReveal>
          </section>

          {/* What makes us Different Section */}
          <section
            id="what-make-us-different"
            className=" bg-white lg:py-32 md:py-32 py-16"
          >
            <ScrollReveal>
              <div className="max-w-7xl mx-auto">
                {/* title and description */}
                <div className="text-center mx-4 mb-12">
                  <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
                    What makes us different
                  </p>
                  <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    Enabling smarter operations across all functions of an
                    integrated agribusiness — from production and processing to
                    distribution and analytics — driving efficiency and growth
                    at every stage.
                  </p>
                </div>

                {/* Solutions section */}
                <SwitchCard />
              </div>
            </ScrollReveal>
          </section>

          {/* The reason why we use cloud GCX */}
          <section id="why-choose-gcx" className="lg:py-32 md:py-32 py-16">
            <ScrollReveal>
              <div className="max-w-7xl mx-auto">
                {/* title and description */}
                <div className="text-center mx-4 mb-12">
                  <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Why GCX Cloud?
                  </p>
                  <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
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

          {/* Customer Testimonials Section */}
          <section id="why-choose-gcx" className="lg:py-16 md:py-16 py-16 bg-white">
            <ScrollReveal>
              <div className="">
                {/* title and description */}
                <div className="max-w-7xl mx-auto lg:mb-24">
                  {/* title and description */}
                  <div className="my-12 text-center justify-center lg:mx-0 mx-4 mb-12">
                    <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                      Customer Testimonials
                    </p>
                    <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                      Real stories. Real results. Our customers share how GCX
                      helped them simplify operations and grow faster. Discover
                      why businesses around the world choose GCX every day.
                    </p>
                  </div>
                </div>

                {/* Customer section */}
                <ScrollReveal>
                  <CustomerCarousel />
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </section>

          <section className="max-w-7xl mx-auto my-32">
            <ScrollReveal>
              <div className=" lg:px-8 md:px-8 px-4">
                <GetStartedCard />
              </div>
            </ScrollReveal>
          </section>
        </section>
      </div>
    </div>
  );
}

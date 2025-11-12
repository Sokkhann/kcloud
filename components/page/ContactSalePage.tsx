import React from "react";
import ContactUsCard from "../card/ContactUsCard";
import HeroComponent from "../HeroComponent";
import GetStartedCard from "../card/GetStartedCard";
import MapComponent from "../MapComponent";
import ScrollReveal from "../animations/ScrolReveal";

export default function ContactSalePage() {
  return (
    <div className="w-screen bg-gray-200">
      {/* Hero Section About page */}
      <HeroComponent
        height="h-[500px]"
        image="/hero-bg.png"
        title="Contact Us"
        description="Our experts will get back to you shortly with the right solution for your needs. We’re here to make sure you get the best support possible!"
      />

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto mt-10 lg:mt-0 md:mt-0">
        <div className="py-4 lg:py-18 md:py-18 px-4 lg:px-8 md:px-8">
          <div className="block lg:hidden md:hidden text-center mt-10">
            <p className="text-2xl font-bold text-gcxprimary block lg:hidden md:hidden">
              Contact Us
            </p>
            <p className="text-gray-600 mb-6">
              Fill out the form and our experts will reach out to you shortly.
            </p>
          </div>

          <ScrollReveal>
            <ContactUsCard />
          </ScrollReveal>
        </div>
      </div>

      <section className="max-w-7xl mx-auto lg:pb-18 md:pb-18 lg:pt-0 md:pt-0 pb-16 pt-16">
        <ScrollReveal>
          <div className=" lg:px-8 md:px-8 px-4">
            <GetStartedCard />
          </div>
        </ScrollReveal>
      </section>

      <div>
        <MapComponent />
      </div>
    </div>
  );
}

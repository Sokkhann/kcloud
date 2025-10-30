import React from "react";
import ContactUsCard from "../card/ContactUsCard";
import HeroComponent from "../HeroComponent";
import GetStartedCard from "../card/GetStartedCard";
import MapComponent from "../MapComponent";

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
      <div className="p-30">
        <ContactUsCard />

        <div className="pt-30">
          <GetStartedCard/>
        </div>
      </div>

      <div>
        <MapComponent/>
      </div>
    </div>
  );
}

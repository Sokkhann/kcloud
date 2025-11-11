import React from "react";

// components/GetStartedCard.tsx

export default function GetStartedCard() {
  return (
    <div
      className="relative bg-[url('/get-started-bg.png')] bg-cover bg-center rounded-2xl text-white 
             p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center
             min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] 
             shadow-lg w-full max-w-7xl mx-auto"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-4">
          Get Started with GCX Cloud
        </h2>

        <p className="mb-6 max-w-2xl mx-auto text-base">
          Join us today to explore more product details, unlock hidden features,
          and play along with GCX to see what it can do for you!
        </p>

        <button
          className="bg-white text-gcxprimary font-semibold 
                 text-base 
                 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 
                 rounded-full transition-all duration-300 
                 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

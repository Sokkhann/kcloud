import React from 'react'

// components/GetStartedCard.tsx

export default function GetStartedCard() {
  return (
    <div
      className="relative bg-[url('/get-started-bg.png')] bg-cover bg-center rounded-2xl text-white p-10 flex flex-col items-center justify-center min-h-[400px] shadow-lg"
    >
      <div className="bg-black/40 absolute inset-0 rounded-2xl text-center"></div>

      <div className="relative z-10 text-center">
        <h2 className="xl:text-3xl text-2xl font-bold mb-4">Get Started with GCX Cloud</h2>
        <p className="text-sm md:text-base mb-6 max-w-2xl">
          Join us today to explore more product details, unlock hidden features,
          and play along with GCX to see what it can do for you!
        </p>
        <button
          className="bg-white xl:text-base text-sm text-green-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

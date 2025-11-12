// InfoCard.jsx
import React from "react";

export default function AboutUsCard() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 gap-4 overflow-hidden transition-transform transform cursor-pointer px-4 lg:px-8 md:px-8">
      {/* Left content */}
      <div className="lg:flex-1 flex flex-col justify-center ">
        <h2 className="lg:text-2xl md:text-2xl text-lg font-bold text-gray-700 mb-4 lg:text-start text-center">
          Your Solution for Co-Location
        </h2>
        <span className="text-justify lg:text-start">
          <p className="text-gray-600 leading-relaxed mb-2">
            GCX, a Cambodian company, is the nation’s first “Carrier Neutral”
            Tier 3 Data Center. We meet the strictest international standards
            (ANSI TIA-942-A) to deliver reliable and secure data center
            solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-2">
            Founded by telecom and IT professionals, GCX understands the
            challenges businesses face in finding high-quality data center
            services. We cater to a wide range of clients, including
            international and domestic enterprises, content providers, and
            telecom carriers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-2">
            GCX offers more than just secure data storage. We’re committed to
            continuous growth, with plans for a secondary site to meet the
            expanding needs of Cambodia and the Mekong Sub Region.
          </p>
        </span>
      </div>

      {/* Right image */}
      <div
        className="lg:flex-1 relative h-64 md:h-80 lg:h-auto bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(/about-us.png)` }}
      />
    </div>
  );
}

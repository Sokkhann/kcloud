// InfoCard.jsx
import React from "react";

export default function AboutUsCard() {
  return (
    <div className="flex flex-col gap-12 md:flex-row overflow-hidden transition-transform transform cursor-pointer">
      {/* Left content */}
      <div className="flex-1 py-6 flex flex-col justify-center text-start">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">
          Your Solution for Co-Location
        </h2>
        <span>
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
        className="flex-1 relative h-80 md:h-auto bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(/about-us.png)` }}
      />
    </div>
  );
}

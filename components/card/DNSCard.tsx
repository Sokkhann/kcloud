import React from "react";
import WaveBackground from "../WaveBackground";

interface DNSCardProps {
  titleL: string;
  descL: string;
  titleR: string;
  descR: string[];
}

export default function DNSCard({
  titleL,
  descL,
  titleR,
  descR,
}: DNSCardProps) {
  return (
    <div className="flex-col shadow-md overflow-hidden cursor-pointer flex items-centetabr justify-center rounded-r-2xl rounded-bl-2xl">
      {/* Main content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-between flex-[1.2] lg:p-14 p-7 bg-green-900/10">
          {/* Top content */}
          <div>
            <h2 className="lg:text-2xl text-lg font-bold text-gcxprimary mb-3">{titleL}</h2>
            <p className="text-gray-600 leading-relaxed">{descL}</p>
          </div>

          {/* Bottom content */}
          <div className="bg-white rounded-xl p-4 mt-6 flex items-center justify-between lg:h-24 h-18">
            <p className="font-semibold text-gcxprimary w-1/2">
              Try Load Balancers now
            </p>
            <button className="bg-gcxprimary text-white px-4 lg:font-semibold md:font-semibold font-medium py-2 rounded-full hover:bg-gcxprimary transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <WaveBackground width="flex-[1]" height="h-">
          <div className="relative flex flex-col justify-start lg:p-14 p-7 ">
            {/* Water Wave Background */}
            <div className="absolute inset-0 opacity-30 wave-bg"></div>

            <div className="relative z-10">
              <h3 className="lg:text-2xl text-lg font-bold text-white mb-4">{titleR}</h3>

              <div className="space-y-2">
                {descR?.map((line, index) => {
                  const isNumberLine = line.trim().startsWith("+");
                  return (
                    <p
                      key={index}
                      className={`${
                        isNumberLine
                          ? "text-white font-bold lg:text-2xl text-lg"
                          : "text-white"
                      }`}
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </WaveBackground>
      </div>
    </div>
  );
}

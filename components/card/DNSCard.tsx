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
        <div className="flex flex-col justify-between flex-[1.2] p-14 bg-green-900/10">
          {/* Top content */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-3">{titleL}</h2>
            <p className="text-gray-600 leading-relaxed">{descL}</p>
          </div>

          {/* Bottom content */}
          <div className="bg-white rounded-xl p-4 mt-6 flex items-center justify-between h-24">
            <p className="font-semibold text-green-800">
              Try Load Balancers now
            </p>
            <button className="bg-green-700 text-white px-4 font-semibold py-2 rounded-full hover:bg-green-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <WaveBackground width="flex-[1]" height="h-">
          <div className="relative flex flex-col justify-start rounded-r-2xl p-14 rounded-2xl">
            {/* Water Wave Background */}
            <div className="absolute inset-0 opacity-30 wave-bg"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">{titleR}</h3>

              <div className="space-y-2">
                {descR?.map((line, index) => {
                  const isNumberLine = line.trim().startsWith("+");
                  return (
                    <p
                      key={index}
                      className={`${
                        isNumberLine
                          ? "text-white font-bold text-xl"
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

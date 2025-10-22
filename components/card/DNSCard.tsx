"use client";

interface DNSCardProps {
  titleL: string;
  descL: string;
  titleR: string;
  descR?: string[];
}

export default function DNSCard({
  titleL,
  titleR,
  descL,
  descR,
}: DNSCardProps) {
  return (
    <div className="max-w-7xl mx-auto mt-24 flex items-center justify-center">
      <div className="max-w-5xl rounded-2xl shadow-md overflow-hidden cursor-pointer bg-white flex items-center justify-center">
        {/* Main content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex flex-col justify-between flex-[1.2] p-12">
            {/* Top content */}
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">
                {titleL}
              </h2>
              <p className="text-gray-600 leading-relaxed">{descL}</p>
            </div>

            {/* Bottom content */}
            <div className="bg-green-900/10 rounded-xl p-4 mt-6 flex items-center justify-between h-24">
              <p className="font-semibold text-green-800">
                Try Load Balancers now
              </p>
              <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-[1] flex flex-col justify-between bg-green-900/10 p-12">
            <h3 className="text-2xl font-bold text-green-800 mb-4">{titleR}</h3>
            <div className="space-y-4">
              <div>
                {descR?.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold text-green-800">
                      +10,000
                    </h4>
                    <p className="text-gray-600">
                      Our support team is always available to assist you
                      whenever needed.
                    </p>
                  </div>
                ))}

                <h4 className="text-xl font-bold text-green-800">+10,000</h4>
                <p className="text-gray-600">
                  Our support team is always available to assist you whenever
                  needed.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-800">+10,000</h4>
                <p className="text-gray-600">
                  We focus on delivering products and services that exceed
                  industry standards.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-800">+250</h4>
                <p className="text-gray-600">
                  Transparency and clarity in every step of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

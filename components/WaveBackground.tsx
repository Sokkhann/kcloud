import React from "react";

interface WaveBackgroundProps {
  children?: React.ReactNode;
  topColor?: string;
  mainColor?: string;
  bottomColor?: string;
  height?: string;
  width?: string;
  justify?: string;
}

export default function WaveBackground({
  children,
  topColor = "bg-green-600",
  mainColor = "bg-green-700",
  bottomColor = "bg-green-800",
  height = "h-fit",
  width = "h-[50%]",
  justify = "justify-start"
}: WaveBackgroundProps) {
  return (
    <div className={`relative ${width} ${mainColor} ${height} overflow-hidden rounded-r-2xl`}>
      {/* Wave top */}
      <div className={`absolute top-0 w-full h-40 ${topColor} rounded-b-[50%]`} />

      {/* Content */}
      <div className={`relative z-10 flex items-center ${justify} h-full text-white`}>
        {children}
      </div>

      {/* Wave bottom */}
      <div className={`absolute bottom-0 w-full h-40 ${bottomColor} rounded-t-[50%]`} />
    </div>
  );
}

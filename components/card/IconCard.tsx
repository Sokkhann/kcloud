import React, { useEffect, useState } from "react";
import { IconCardProps } from "@/data/productDetail";
import { useMediaQuery } from "react-responsive";

export default function IconCard({
  icon: Icon,
  title,
  desc,
  align,
}: IconCardProps) {
  const [mounted, setMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default size for server (to avoid mismatch)
  let iconSize = 48;
  if (mounted) {
    if (isMd) iconSize = 56;
    if (isLg) iconSize = 64;
  }

  return (
    <div
      className={`${align} flex flex-col bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 h-full gap-4`}
    >
      <Icon className="text-gcxprimary" size={iconSize} />
      <h3 className="lg:text-2xl md:text-2xl text-lg font-semibold mb-2 text-gray-700">
        {title}
      </h3>
      <p className="text-gray-600 text-base">{desc}</p>
    </div>
  );
}

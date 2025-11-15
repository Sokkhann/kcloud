import { IconCardProps } from "@/type/dataTypes";
import React, { useEffect, useState } from "react";
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
  let iconSize = 32;
  if (mounted) {
    if (isMd) iconSize = 32;
    if (isLg) iconSize = 32;
  }

  return (
    <div
      className={`${align} flex flex-col bg-white rounded-xl shadow-sm border hover:shadow-md transition p-6 duration-300 h-full lg:gap-4 gap-2`}
    >
      <Icon className="text-gcxprimary" size={iconSize} />
      <h3 className="text-lg font-bold text-gray-700">
        {title}
      </h3>
      <p className="text-gray-600 text-base">{desc}</p>
    </div>
  );
}

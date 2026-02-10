import React, { ReactNode } from 'react';

interface UseCaseCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
}

export default function SimpleCard({ title, desc, icon }: UseCaseCardProps) {
  // We clone the icon to apply background-specific styling: large size and low opacity
  const backgroundIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement, {
      // We cast as any to bypass the strict ReactElement attribute check
      size: 180,
      strokeWidth: 1,
      className: "text-gray-100 group-hover:text-gcxPrimary/20 transition-all duration-700 ease-in-out transform"
    } as any)
    : null;

  return (
    <div className="group relative bg-white w-full rounded-2xl hover:shadow-lg hover:shadow-gcxPrimary/60 transition-all duration-500 p-8 flex flex-col justify-between h-full overflow-hidden">

      {/* Background Icon Decoration */}
      <div className="absolute -bottom-4 -right-2 pointer-events-none select-none z-0">
        {backgroundIcon}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Small Top Icon for context */}
        <div className='flex items-center gap-4'>
          <div className="text-gcxPrimary mb-6 bg-gcxPrimary/5 w-fit p-3 rounded-xl group-hover:bg-gcxPrimary group-hover:text-white transition-colors duration-300">
            {icon}
          </div>

          <h3 className="text-xl font-bold text-gray-700 group-hover:text-gcxPrimary mb-4 tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-gray-500 leading-relaxed text-sm lg:text-base flex-grow font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}
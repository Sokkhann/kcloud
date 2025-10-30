"use client";

interface InfoCardProps {
  image: string;
  title: string;
  description: string;
}

export default function FeaturedCard({
  image,
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Image Section with overlay */}
      <div className="relative h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}

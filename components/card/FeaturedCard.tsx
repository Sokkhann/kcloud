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
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden transition-shadow duration-300">
      {/* Image Section with dark overlay */}
      <div className="h-64 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-fit">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mt-auto text-lg">{description}</p>
      </div>
    </div>
  );
}

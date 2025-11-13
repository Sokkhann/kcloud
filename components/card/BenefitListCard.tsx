import { LucideIcon } from "lucide-react";

type InfoItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

interface InfoListProps {
  items: InfoItem[];
}

export default function BenefitListCard({ items }: InfoListProps) {
  return (
    <div className="w-full h-full  rounded-xl  bg-white shadow-sm border hover:shadow-md transition">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-3 p-6 rounded-xl "
        >
          <div className="p-3 rounded-full bg-gray-100 flex justify-center items-center">
            <item.icon size={32}/>
          </div>

          <h4 className="font-semibold lg:text-2xl md:text-2xl text-lg text-gray-800">
            {item.title}
          </h4>

          <p className="text-base text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

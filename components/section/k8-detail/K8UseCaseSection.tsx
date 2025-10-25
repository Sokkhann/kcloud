import { k8UseCaseCard } from "@/data/productDetail";
import SimpleCard from "@/components/card/SimpleCard";

export default function K8UseCaseSection() {
  const cards = k8UseCaseCard;

  return (
    <div className=" max-w-7xl mx-auto pt-12">
      <div className="">
        <div className="text-center my-16">
          <p className="text-4xl font-bold text-gray-700">Use Cases</p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Kubernetes (K8s) is an open-source system for automating the
            deployment, scaling, and management of containerized applications.
            Its primary use cases revolve around managing complex, distributed,
            and high-scale workloads.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 py-8 mx-12">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <SimpleCard title={card.title} desc={card.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}

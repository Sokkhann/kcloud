import { ChevronUp, ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
  index: number;
}

export default function FAQDropdown({ question, answer, index }: FAQ) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      <div key={index} className="">
        {/* Question Row */}
        <button
          onClick={() => toggle(index)}
          className="w-full grid grid-cols-[1fr_40px] text-left"
        >
          <span className="text-lg font-semibold text-gray-700 ">{question}</span>

          {openIndex === index ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </button>

        {/* Answer Dropdown */}
        <div
          className={`transition-all overflow-hidden pr-4 ${
            openIndex === index ? "h-fit mt-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-600 text-justify">{answer}</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-5 px-6 text-left text-lg font-medium text-blue-800 hover:bg-gray-50/50 transition-colors"
      >
        <span>{question}</span>
        <FaChevronDown className={`transform transition-transform duration-300 text-yellow-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-gray-700">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
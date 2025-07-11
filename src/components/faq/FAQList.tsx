"use client";

import FAQItem from "./FAQItem";

interface FAQData {
  [key: string]: Array<{
    q: string;
    a: string;
  }>;
}

interface FAQListProps {
  inView: boolean;
  activeCategory: string;
  faqData: FAQData;
}

export default function FAQList({ inView, activeCategory, faqData }: FAQListProps) {
  return (
    <section className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {faqData[activeCategory]?.map((faq, index) => (
        <FAQItem key={index} question={faq.q} answer={faq.a} />
      ))}
    </section>
  );
} 
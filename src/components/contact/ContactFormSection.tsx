"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface ContactFormSectionProps {
  inView: boolean;
}

export default function ContactFormSection({ inView }: ContactFormSectionProps) {
  const [sent, setSent] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Mesaj Gönderin</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input 
          type="text" 
          placeholder="Adınız Soyadınız" 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg transition-shadow" 
          required 
        />
        <input 
          type="email" 
          placeholder="E-posta Adresiniz" 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg transition-shadow" 
          required 
        />
        <textarea 
          placeholder="Mesajınız..." 
          rows={5} 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg transition-shadow" 
          required 
        />
        <button 
          type="submit" 
          className="bg-yellow-400 text-black rounded-full px-8 py-3 font-bold text-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg w-full mt-2"
        >
          Gönder
        </button>
        {sent && (
          <div className="flex items-center justify-center gap-2 text-green-700 font-semibold mt-2 animate-fade-in text-base bg-green-100 p-3 rounded-lg">
            <FaCheckCircle size={20} /> Mesajınız başarıyla iletildi!
          </div>
        )}
      </form>
    </div>
  );
} 
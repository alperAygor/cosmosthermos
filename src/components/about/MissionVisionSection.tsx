"use client";

import { FaHandsHelping, FaRecycle } from "react-icons/fa";

interface MissionVisionSectionProps {
  inView: boolean;
}

export default function MissionVisionSection({ inView }: MissionVisionSectionProps) {
  return (
    <section className={`max-w-5xl mx-auto px-4 grid sm:grid-cols-2 gap-8 animate-fade-in-up transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-yellow-100 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-2">
          <FaHandsHelping className="text-3xl text-blue-700" />
          <h2 className="text-2xl font-bold text-blue-700">Misyonumuz</h2>
        </div>
        <p className="text-gray-700 text-lg">Kullanıcılarımıza en kaliteli, sağlıklı ve uzun ömürlü termosları sunarak, içecek keyfini her ortamda sürdürülebilir kılmak.</p>
      </div>
      <div className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-yellow-100 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-2">
          <FaRecycle className="text-3xl text-green-600" />
          <h2 className="text-2xl font-bold text-blue-700">Vizyonumuz</h2>
        </div>
        <p className="text-gray-700 text-lg">Termos denince akla ilk gelen, yenilikçi ve çevre dostu marka olmak.</p>
      </div>
    </section>
  );
} 
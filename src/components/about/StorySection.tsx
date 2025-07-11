"use client";

interface StorySectionProps {
  inView: boolean;
}

export default function StorySection({ inView }: StorySectionProps) {
  return (
    <section className={`max-w-5xl mx-auto px-4 flex flex-col gap-6 items-center md:items-center animate-fade-in-up transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="flex-1 flex flex-col gap-4 items-center text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-1">Marka Yolculuğumuz</h2>
        <p className="text-gray-700 text-lg">Cosmos Termos, günlük hayatın temposunda içecek keyfini en üst seviyeye taşımak için doğdu. Yüksek yalıtım teknolojisi, çevre dostu yaklaşımı ve modern tasarımıyla, sadece bir termos değil, bir yaşam tarzı sunuyoruz.</p>
        <ul className="list-disc list-inside text-gray-600 text-base pl-2">
          <li>2021'de İstanbul'da kuruldu</li>
          <li>10.000+ mutlu müşteri</li>
          <li>Türkiye'nin dört bir yanına hızlı teslimat</li>
        </ul>
      </div>
    </section>
  );
} 
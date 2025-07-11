"use client";

interface HeaderSectionProps {
  inView: boolean;
}

export default function HeaderSection({ inView }: HeaderSectionProps) {
  return (
    <section className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 drop-shadow mb-3">Bizimle İletişime Geçin</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sorularınız, önerileriniz veya işbirliği talepleriniz için buradayız. Size yardımcı olmaktan mutluluk duyarız!</p>
    </section>
  );
} 
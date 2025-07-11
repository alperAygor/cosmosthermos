"use client";

interface ProductsHeaderSectionProps {
  inView: boolean;
}

export default function ProductsHeaderSection({ inView }: ProductsHeaderSectionProps) {
  return (
    <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h1 className="text-4xl font-extrabold tracking-tight text-yellow-500 mb-4 text-center">Termos Modellerimiz</h1>
      <p className="text-lg text-blue-900 text-center mb-10 max-w-2xl mx-auto">Cosmos Termos ailesinin en yeni ve en çok tercih edilen modellerini keşfedin. Premium kalite, modern tasarım ve üstün yalıtım bir arada!</p>
    </div>
  );
} 
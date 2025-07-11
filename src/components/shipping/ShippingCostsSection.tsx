"use client";

interface ShippingCostsSectionProps {
  inView: boolean;
}

const shippingOptions = [
  {
    price: "₺0",
    title: "Ücretsiz Kargo",
    description: "150 TL ve üzeri alışverişlerde",
    color: "text-green-500",
    features: [
      "• Tüm Türkiye'ye",
      "• Standart teslimat",
      "• Adres teslimi"
    ]
  },
  {
    price: "₺29",
    title: "Standart Kargo",
    description: "150 TL altı alışverişlerde",
    color: "text-blue-500",
    features: [
      "• 3-5 iş günü",
      "• Güvenli paketleme",
      "• Takip numarası"
    ]
  },
  {
    price: "₺49",
    title: "Hızlı Kargo",
    description: "Acil teslimat için",
    color: "text-yellow-500",
    features: [
      "• 1-2 iş günü",
      "• Öncelikli işlem",
      "• SMS bildirimi"
    ]
  }
];

export default function ShippingCostsSection({ inView }: ShippingCostsSectionProps) {
  return (
    <section className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Kargo Ücretleri</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {shippingOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
            <div className={`text-6xl font-bold ${option.color} mb-4`}>{option.price}</div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">{option.title}</h3>
            <p className="text-gray-600">{option.description}</p>
            <ul className="mt-4 text-sm text-gray-500 space-y-1">
              {option.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 
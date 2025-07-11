"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  FAQHeaderSection, 
  CategoriesSection, 
  FAQList, 
  FAQContactSection 
} from "@/components/faq";

// Scroll animasyonu için hook
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

const faqData = {
  "Sipariş & Teslimat": [
    {
      q: "Kargo ve teslimat süresi nedir?",
      a: "Siparişleriniz 1-2 iş günü içinde kargoya verilir ve genellikle 2-4 iş günü içinde Türkiye'nin her yerine teslim edilir.",
    },
    {
      q: "Kargomu nasıl takip edebilirim?",
      a: "Siparişiniz kargoya verildiğinde, size takip numarasını içeren bir e-posta ve SMS gönderilecektir. Bu numara ile kargonuzun durumunu takip edebilirsiniz.",
    },
    {
      q: "Kapıda ödeme seçeneğiniz var mı?",
      a: "Şu anda yalnızca web sitemiz üzerinden kredi kartı ve banka kartı ile ödeme kabul etmekteyiz. Kapıda ödeme seçeneğimiz bulunmamaktadır.",
    },
  ],
  "Ürün & Kullanım": [
    {
      q: "Cosmos Termos kaç saat sıcak/soğuk tutar?",
      a: "Cosmos Termos, modeline göre değişiklik göstermekle birlikte, çift katmanlı vakum yalıtım teknolojisi sayesinde içeceğinizi ortalama 12 saate kadar sıcak, 24 saate kadar soğuk tutar.",
    },
    {
      q: "Termoslarınız BPA içeriyor mu?",
      a: "Hayır, tüm Cosmos Termos ürünleri gıda ile temasa uygun, yüksek kaliteli paslanmaz çelikten üretilmiştir ve BPA gibi zararlı kimyasallar içermez. Sağlığınız bizim için en önemli önceliktir.",
    },
    {
      q: "Termosumu nasıl temizlemeliyim?",
      a: "Ürünün yalıtım özelliğini korumak için ılık su ve yumuşak bir fırça ile elde yıkamanız önerilir. Bulaşık makinesi kullanımı, yüksek sıcaklık ve deterjanlar nedeniyle ürünün dış yüzeyine ve vakum yalıtımına zarar verebilir.",
    },
  ],
  "İade & Garanti": [
    {
      q: "İade ve değişim koşulları nelerdir?",
      a: "Kullanılmamış ürünleri, teslim aldıktan sonra 14 gün içinde orijinal ambalajıyla birlikte iade edebilir veya değişim talebinde bulunabilirsiniz. Detaylı bilgi için 'İade Politikamız' sayfasını ziyaret edebilirsiniz.",
    },
    {
      q: "Ürünlerinizin garantisi var mı?",
      a: "Evet, tüm Cosmos Termos ürünleri üretim hatalarına karşı 2 yıl boyunca garantimiz altındadır. Garanti, kullanıcı hatasından kaynaklanan (düşme, çarpma vb.) hasarları kapsamamaktadır.",
    },
  ],
};

export default function SSSPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Sipariş & Teslimat");

  const [headerRef, headerInView] = useInView();
  const [categoriesRef, categoriesInView] = useInView();
  const [faqListRef, faqListInView] = useInView();
  const [contactRef, contactInView] = useInView();
  
  return (
    <main className="flex flex-col items-center gap-16 py-16 px-4 bg-gray-50">
      
      {/* BAŞLIK VE ARAMA */}
      <div ref={headerRef}>
        <FAQHeaderSection inView={headerInView} />
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-12">
        {/* KATEGORİLER */}
        <div ref={categoriesRef}>
          <CategoriesSection 
            inView={categoriesInView} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>

        {/* SSS LİSTESİ */}
        <div ref={faqListRef}>
          <FAQList 
            inView={faqListInView} 
            activeCategory={activeCategory} 
            faqData={faqData} 
          />
        </div>

        {/* İLETİŞİME GEÇ */}
        <div ref={contactRef}>
          <FAQContactSection inView={contactInView} />
        </div>
      </div>
    </main>
  );
} 
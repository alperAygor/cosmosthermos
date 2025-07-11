"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  ProductsHeaderSection,
  FilterSection,
  ProductsGrid,
  BackgroundPatterns
} from "@/components/products";

// Scroll animasyonu için hook
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function Urunler() {
  const [headerRef, headerInView] = useInView(0.2);
  const [filterRef, filterInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <main className="relative max-w-6xl mx-auto py-20 px-4">
      <BackgroundPatterns />
      <div ref={headerRef}>
        <ProductsHeaderSection inView={headerInView} />
      </div>
      <div ref={filterRef}>
        <FilterSection inView={filterInView} />
      </div>
      <div ref={gridRef}>
        <ProductsGrid inView={gridInView} />
      </div>
    </main>
  );
} 
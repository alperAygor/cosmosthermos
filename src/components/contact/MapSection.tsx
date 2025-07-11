"use client";

interface MapSectionProps {
  inView: boolean;
}

export default function MapSection({ inView }: MapSectionProps) {
  return (
    <div className="h-[500px] w-full bg-gray-200 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.82823525412!2d28.87205167396685!3d41.00549586359928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2s%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2s!4v1678886400000!5m2!1str!2s" 
        width="100%" 
        height="100%" 
        style={{ border:0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Cosmos Termos Konumu"
      ></iframe>
    </div>
  );
} 
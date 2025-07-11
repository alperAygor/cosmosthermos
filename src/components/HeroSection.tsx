import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  bgGradient?: string;
  textColor?: string;
  subtitleColor?: string;
}

export default function HeroSection({
  title,
  subtitle,
  icon: Icon,
  bgGradient = "from-blue-600 via-blue-700 to-blue-800",
  textColor = "text-white",
  subtitleColor = "text-blue-100"
}: HeroSectionProps) {
  return (
    <div className={`relative bg-gradient-to-r ${bgGradient} ${textColor} py-20 overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Icon className="text-2xl" />
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className={`text-xl md:text-2xl ${subtitleColor} max-w-3xl mx-auto leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 
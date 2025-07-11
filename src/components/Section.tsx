import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconColor?: string;
  iconBgColor?: string;
  children: React.ReactNode;
  className?: string;
  number?: number;
}

export default function Section({
  id,
  title,
  icon: Icon,
  iconColor = "text-blue-600",
  iconBgColor = "bg-blue-100",
  children,
  className = "",
  number
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        {Icon && (
          <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
            <Icon className={`${iconColor} text-xl`} />
          </div>
        )}
        <h2 className="text-3xl font-bold text-gray-800">
          {number && `${number}. `}{title}
        </h2>
      </div>
      {children}
    </section>
  );
} 
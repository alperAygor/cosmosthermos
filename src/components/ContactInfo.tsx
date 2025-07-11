import React from 'react';

interface ContactItem {
  type: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}

interface ContactInfoProps {
  items: ContactItem[];
  title?: string;
  className?: string;
}

export default function ContactInfo({
  items,
  title,
  className = ""
}: ContactInfoProps) {
  return (
    <div className={`bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 border border-pink-100 ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <item.icon className={item.iconColor} />
            </div>
            <p className="font-semibold text-gray-800">{item.type}</p>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 
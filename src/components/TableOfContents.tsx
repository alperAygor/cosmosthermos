import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import Card from './Card';

interface TableOfContentsItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  title?: string;
  titleIcon?: React.ComponentType<{ className?: string }>;
}

export default function TableOfContents({
  items,
  title = "İçindekiler",
  titleIcon: TitleIcon = FaShieldAlt
}: TableOfContentsProps) {
  return (
    <Card className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <TitleIcon className="text-blue-600" />
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <item.icon className="text-blue-600 text-lg" />
            </div>
            <span className="font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
              {index + 1}. {item.title}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
} 
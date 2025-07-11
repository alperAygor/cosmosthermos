import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

export default function ContentSection({
  children,
  maxWidth = "max-w-5xl",
  className = ""
}: ContentSectionProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`${maxWidth} mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
} 
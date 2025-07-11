import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  border?: boolean;
}

export default function Card({
  children,
  className = "",
  shadow = "xl",
  padding = "lg",
  rounded = "2xl",
  border = true
}: CardProps) {
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl"
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12"
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl"
  };

  return (
    <div className={`
      bg-white 
      ${shadowClasses[shadow]} 
      ${paddingClasses[padding]} 
      ${roundedClasses[rounded]}
      ${border ? 'border border-gray-100' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
} 
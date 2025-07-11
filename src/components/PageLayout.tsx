import React from 'react';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';

interface PageLayoutProps {
  heroTitle: string;
  heroSubtitle?: string;
  heroIcon?: React.ComponentType<{ className?: string }>;
  heroBgGradient?: string;
  children: React.ReactNode;
  bgGradient?: string;
  maxWidth?: string;
}

export default function PageLayout({
  heroTitle,
  heroSubtitle,
  heroIcon,
  heroBgGradient,
  children,
  bgGradient = "from-gray-50 to-blue-50",
  maxWidth = "max-w-5xl"
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        icon={heroIcon}
        bgGradient={heroBgGradient}
      />
      <ContentSection maxWidth={maxWidth}>
        {children}
      </ContentSection>
    </div>
  );
} 
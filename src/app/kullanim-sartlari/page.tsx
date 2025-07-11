import React from 'react';
import { FaGavel, FaShieldAlt, FaCopyright, FaExclamationTriangle, FaUserShield, FaEdit, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { PageLayout, Card, Section, TableOfContents, ContactInfo } from '@/components';

// Types
interface SectionData {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  content: string | string[];
  highlight?: boolean;
  link?: { text: string; href: string };
}

interface ContactItem {
  type: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}

// Data
const SECTIONS_DATA: SectionData[] = [
  {
    id: 'genel-hukumler',
    title: 'Genel Hükümler',
    icon: FaGavel,
    color: 'blue',
    content: [
      'Bu web sitesi Cosmos tarafından işletilmektedir. Sitemizi kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.',
      'Bu şartlar, sitemizin kullanımı ile ilgili tüm hak ve yükümlülükleri düzenler.',
      'Sitemizi kullanmaya devam etmeniz, bu şartlardaki değişiklikleri de kabul ettiğiniz anlamına gelir.'
    ]
  },
  {
    id: 'hizmet-kullanimi',
    title: 'Hizmet Kullanımı',
    icon: FaShieldAlt,
    color: 'green',
    content: [
      'Sitemizde sunulan hizmetler yalnızca kişisel ve ticari olmayan amaçlar için kullanılabilir.',
      'Aşağıdaki faaliyetler kesinlikle yasaktır:',
      'Site içeriğini kopyalama, değiştirme veya dağıtma',
      'Sisteme zarar verecek yazılımlar yükleme',
      'Diğer kullanıcıların gizliliğini ihlal etme',
      'Yasadışı içerik paylaşma',
      'Sistemi aşırı yükleme veya bozma',
      'Spam veya zararlı içerik gönderme'
    ]
  },
  {
    id: 'fikri-mulkiyet',
    title: 'Fikri Mülkiyet Hakları',
    icon: FaCopyright,
    color: 'purple',
    content: [
      'Sitemizdeki tüm içerik, tasarım, logo, marka ve yazılım Cosmos\'un fikri mülkiyeti altındadır.',
      'Bu içeriklerin herhangi bir şekilde kullanımı için yazılı izin gereklidir.',
      'Kullanıcılar tarafından sitemize gönderilen içerikler, gönderen kişinin sorumluluğundadır.'
    ]
  },
  {
    id: 'sorumluluk-sinirlari',
    title: 'Sorumluluk Sınırları',
    icon: FaExclamationTriangle,
    color: 'orange',
    content: [
      'Cosmos, sitemizin kullanımından doğabilecek herhangi bir zarardan sorumlu değildir.',
      'Sitemiz "olduğu gibi" sunulmaktadır ve herhangi bir garanti verilmemektedir.',
      'Kullanıcılar, sitemizi kullanırken kendi sorumluluklarını üstlenirler.'
    ],
    highlight: true
  },
  {
    id: 'gizlilik',
    title: 'Gizlilik',
    icon: FaUserShield,
    color: 'teal',
    content: 'Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için KVKK Aydınlatma Metni\'ni inceleyebilirsiniz.',
    link: { text: 'KVKK Aydınlatma Metni', href: '/kvkk' }
  },
  {
    id: 'degisiklikler',
    title: 'Değişiklikler',
    icon: FaEdit,
    color: 'indigo',
    content: [
      'Bu kullanım şartları, önceden haber verilmeksizin değiştirilebilir.',
      'Değişiklikler sitemizde yayınlandığı tarihten itibaren geçerli olur.'
    ]
  },
  {
    id: 'iletisim',
    title: 'İletişim',
    icon: FaPhone,
    color: 'pink',
    content: 'Bu kullanım şartları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:'
  },
  {
    id: 'yururluk',
    title: 'Yürürlük',
    icon: FaCalendarAlt,
    color: 'yellow',
    content: 'Bu kullanım şartları 1 Ocak 2024 tarihinden itibaren yürürlüğe girmiştir.',
    highlight: true
  }
];

// SVG Icon Components
const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const CONTACT_INFO: ContactItem[] = [
  {
    type: 'Telefon',
    value: '+90 (212) 555 0123',
    icon: FaPhone,
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    type: 'E-posta',
    value: 'info@cosmos.com',
    icon: EmailIcon,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    type: 'Adres',
    value: 'İstanbul, Türkiye',
    icon: LocationIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  }
];

// Utility functions
const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-400', iconBg: 'bg-blue-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-400', iconBg: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-400', iconBg: 'bg-purple-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-400', iconBg: 'bg-orange-100' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-400', iconBg: 'bg-teal-100' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-400', iconBg: 'bg-indigo-100' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-400', iconBg: 'bg-pink-100' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-400', iconBg: 'bg-yellow-100' }
  };
  return colorMap[color] || colorMap.blue;
};

// Components
const SectionContent = ({ section }: { section: SectionData }) => {
  const colors = getColorClasses(section.color);
  
  const renderContent = () => {
    if (Array.isArray(section.content)) {
      if (section.id === 'hizmet-kullanimi') {
        return (
          <>
            <p className="text-gray-700 mb-6 leading-relaxed">{section.content[0]}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{section.content[1]}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {section.content.slice(2).map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </>
        );
      }
      
      return (
        <>
          {section.content.map((paragraph, index) => (
            <div key={index} className={`${colors.bg} rounded-xl p-6 ${index < section.content.length - 1 ? 'mb-6' : ''}`}>
              <p className="text-gray-700 leading-relaxed">{paragraph}</p>
            </div>
          ))}
        </>
      );
    }
    
    return (
      <div className={`${colors.bg} rounded-xl p-6 ${section.highlight ? `border-l-4 ${colors.border}` : ''}`}>
        <p className="text-gray-700 leading-relaxed">
          {section.content}
          {section.link && (
            <a href={section.link.href} className="text-blue-600 hover:text-blue-800 underline font-semibold mx-1">
              {section.link.text}
            </a>
          )}
        </p>
      </div>
    );
  };

  return (
    <Section
      id={section.id}
      title={section.title}
      icon={section.icon}
      iconColor={colors.text}
      iconBgColor={colors.iconBg}
      number={SECTIONS_DATA.findIndex(s => s.id === section.id) + 1}
    >
      {renderContent()}
    </Section>
  );
};

// Main Component
export default function KullanimSartlari() {
  const tableOfContentsItems = SECTIONS_DATA.map(section => ({
    id: section.id,
    title: section.title,
    icon: section.icon
  }));

  return (
    <PageLayout
      heroTitle="Kullanım Şartları"
      heroSubtitle="Cosmos web sitemizi kullanarak aşağıdaki şartları kabul etmiş sayılırsınız"
      heroIcon={FaGavel}
    >
      <TableOfContents items={tableOfContentsItems} />
      
      <Card>
        <div className="space-y-12">
          {SECTIONS_DATA.map((section) => (
            <SectionContent key={section.id} section={section} />
          ))}
          
          {/* Contact section special handling */}
          <Section
            id="iletisim"
            title="İletişim"
            icon={FaPhone}
            iconColor="text-pink-600"
            iconBgColor="bg-pink-100"
            number={7}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Bu kullanım şartları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <ContactInfo items={CONTACT_INFO} />
          </Section>
        </div>
      </Card>
    </PageLayout>
  );
} 
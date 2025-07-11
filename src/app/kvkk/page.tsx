"use client";

import React from 'react';
import { FaShieldAlt, FaUserShield, FaDatabase, FaEye, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { PageLayout, Card, Section, ContactInfo } from '@/components';

// Types
interface DataCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  items: string[];
}

interface Right {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  bgColor: string;
}

// Data
const DATA_CATEGORIES: DataCategory[] = [
  {
    title: 'Kimlik Bilgileri',
    icon: FaDatabase,
    iconColor: 'text-blue-700',
    items: ['Ad, soyad', 'T.C. kimlik numarası', 'Doğum tarihi ve yeri', 'Cinsiyet bilgisi']
  },
  {
    title: 'İletişim Bilgileri',
    icon: FaEnvelope,
    iconColor: 'text-yellow-600',
    items: ['E-posta adresi', 'Telefon numarası', 'Adres bilgileri', 'Fatura adresi']
  },
  {
    title: 'Müşteri İşlem Bilgileri',
    icon: FaEye,
    iconColor: 'text-green-600',
    items: ['Sipariş geçmişi', 'Satın alma bilgileri', 'Ödeme bilgileri', 'İade/değişim bilgileri']
  },
  {
    title: 'İşlem Güvenliği',
    icon: FaUserShield,
    iconColor: 'text-purple-600',
    items: ['IP adresi', 'Çerez bilgileri', 'Tarayıcı bilgileri', 'Site kullanım verileri']
  }
];

const RIGHTS: Right[] = [
  {
    title: 'Bilgi Alma Hakkı',
    description: 'Verilerinizin işlenip işlenmediğini öğrenme',
    icon: FaEye,
    iconColor: 'text-blue-700',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Düzeltme Hakkı',
    description: 'Yanlış işlenen verilerin düzeltilmesini isteme',
    icon: FaUserShield,
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    title: 'Silme Hakkı',
    description: 'Verilerinizin silinmesini isteme',
    icon: FaLock,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'İşlemeyi Sınırlama',
    description: 'Veri işleme faaliyetlerinin sınırlandırılmasını isteme',
    icon: FaShieldAlt,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Veri Taşınabilirliği',
    description: 'Verilerinizin başka bir sisteme aktarılmasını isteme',
    icon: FaDatabase,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'İtiraz Hakkı',
    description: 'Veri işleme faaliyetlerine itiraz etme',
    icon: FaShieldAlt,
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
];

const CONTACT_INFO = [
  {
    type: 'E-posta',
    value: 'kvkk@cosmostermos.com',
    icon: FaEnvelope,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    type: 'Telefon',
    value: '0850 123 45 67',
    icon: FaPhone,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    type: 'Veri Koruma Sorumlusu',
    value: 'Veri Koruma Sorumlusu',
    icon: FaUserShield,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

// Components
const DataCategoryCard = ({ category }: { category: DataCategory }) => (
  <Card shadow="lg" padding="md" rounded="xl">
    <div className="flex items-center gap-3 mb-4">
      <category.icon className={`text-2xl ${category.iconColor}`} />
      <h3 className="text-xl font-bold text-blue-700">{category.title}</h3>
    </div>
    <ul className="space-y-2 text-gray-700 text-sm">
      {category.items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </Card>
);

const RightCard = ({ right }: { right: Right }) => (
  <Card shadow="lg" padding="md" rounded="xl" className="text-center">
    <div className={`w-12 h-12 ${right.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
      <right.icon className={`text-xl ${right.iconColor}`} />
    </div>
    <h3 className="font-bold text-blue-700 mb-2">{right.title}</h3>
    <p className="text-gray-600 text-sm">{right.description}</p>
  </Card>
);

// Main Component
export default function KVKK() {
  return (
    <PageLayout
      heroTitle="KVKK Aydınlatma Metni"
      heroSubtitle="Kişisel verilerinizin güvenliği bizim için çok önemli. Bu metin, verilerinizin nasıl işlendiğini ve haklarınızı açıklamaktadır."
      heroIcon={FaShieldAlt}
      heroBgGradient="from-blue-600 via-blue-700 to-blue-800"
    >
      <div className="space-y-12">
        {/* Veri Sorumlusu */}
        <Section
          id="veri-sorumlusu"
          title="Veri Sorumlusu"
          icon={FaUserShield}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">Şirket Bilgileri</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Şirket Adı:</strong> Cosmos Termos Ltd. Şti.</p>
                  <p><strong>Adres:</strong> Merkez Mahallesi, Teknoloji Caddesi No:123, 34000 İstanbul</p>
                  <p><strong>Telefon:</strong> 0850 123 45 67</p>
                  <p><strong>E-posta:</strong> kvkk@cosmostermos.com</p>
                  <p><strong>Web Sitesi:</strong> www.cosmostermos.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">İletişim</h3>
                <ContactInfo items={CONTACT_INFO} />
              </div>
            </div>
          </Card>
        </Section>

        {/* İşlenen Veriler */}
        <Section
          id="islenen-veriler"
          title="İşlenen Kişisel Veriler"
          icon={FaDatabase}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {DATA_CATEGORIES.map((category, index) => (
              <DataCategoryCard key={index} category={category} />
            ))}
          </div>
        </Section>

        {/* Veri İşleme Amaçları */}
        <Section
          id="veri-isleme-amaclari"
          title="Veri İşleme Amaçları"
          icon={FaShieldAlt}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Ana Amaçlar</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Ürün ve hizmet satışı</li>
                <li>• Müşteri ilişkileri yönetimi</li>
                <li>• Sipariş işleme ve teslimat</li>
                <li>• Ödeme işlemleri</li>
                <li>• Müşteri desteği</li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">İkincil Amaçlar</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Pazarlama ve reklam</li>
                <li>• Analiz ve istatistik</li>
                <li>• Kalite iyileştirme</li>
                <li>• Yasal yükümlülükler</li>
                <li>• Güvenlik ve dolandırıcılık önleme</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Veri Sahibi Hakları */}
        <Section
          id="veri-sahibi-haklari"
          title="Veri Sahibi Olarak Haklarınız"
          icon={FaUserShield}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {RIGHTS.map((right, index) => (
              <RightCard key={index} right={right} />
            ))}
          </div>
        </Section>

        {/* Güvenlik Önlemleri */}
        <Section
          id="guvenlik-onlemleri"
          title="Güvenlik Önlemleri"
          icon={FaLock}
          iconColor="text-red-600"
          iconBgColor="bg-red-100"
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">Teknik Önlemler</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• SSL/TLS şifreleme</li>
                  <li>• Güvenli sunucu altyapısı</li>
                  <li>• Düzenli güvenlik güncellemeleri</li>
                  <li>• Veri yedekleme sistemleri</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">İdari Önlemler</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Personel eğitimleri</li>
                  <li>• Erişim kontrolü</li>
                  <li>• Veri işleme politikaları</li>
                  <li>• Düzenli denetimler</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        {/* İletişim */}
        <Section
          id="iletisim"
          title="İletişim"
          icon={FaEnvelope}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        >
          <p className="text-gray-700 mb-6 leading-relaxed">
            KVKK ile ilgili sorularınız için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
          </p>
          <ContactInfo items={CONTACT_INFO} />
        </Section>
      </div>
    </PageLayout>
  );
} 
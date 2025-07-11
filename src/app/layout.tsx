"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes, FaQuestionCircle, FaCertificate, FaShippingFast, FaShieldAlt, FaFileContract, FaBook, FaInfoCircle, FaChevronDown } from 'react-icons/fa';

// Yardım menüsü linkleri
const helpLinks = [
  { href: "/sss", icon: FaQuestionCircle, text: "Sıkça Sorulan Sorular" },
  { href: "/kargo-teslimat", icon: FaShippingFast, text: "Kargo ve Teslimat" },
  { href: "/garanti-politikasi", icon: FaShieldAlt, text: "Garanti Politikası" },
  { href: "/kvkk", icon: FaFileContract, text: "KVKK Aydınlatma Metni" },
  { href: "/kullanim-sartlari", icon: FaBook, text: "Kullanım Şartları" },
  { href: "/satis-sozlesmesi", icon: FaFileContract, text: "Satış Sözleşmesi" },
  { href: "/sertifikalar", icon: FaCertificate, text: "Sertifikalarımız" },
  { href: "/hakkimizda", icon: FaInfoCircle, text: "Hakkımızda" },
];

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`relative text-lg font-medium transition-colors ${isActive ? 'text-yellow-400 font-bold' : 'text-white hover:text-yellow-300'}`}>
      {children}
      {isActive && (
        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400 transition-all duration-300"></div>
      )}
    </Link>
  );
}

function HelpDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const pathname = usePathname();
    const isHelpPage = helpLinks.some(link => link.href === pathname);

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => setIsOpen(false), 150);
        setTimeoutId(id);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center gap-2 relative text-lg font-medium transition-colors ${isHelpPage ? 'text-yellow-400 font-bold' : 'text-white hover:text-yellow-300'}`}>
                Yardım
                <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={14} />
                 {isHelpPage && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400 transition-all duration-300"></div>
                )}
            </button>
            {isOpen && (
                <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black border border-gray-700 rounded-xl shadow-2xl z-50 transition-all duration-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="p-4">
                        {helpLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                                <link.icon className="text-yellow-400" />
                                <span className="text-white font-medium">{link.text}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold">
             <Image src="/logo-modern.svg" alt="Cosmos Logo" width={120} height={32} className="text-white" priority/>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Anasayfa</NavLink>
            <NavLink href="/urunler">Ürünler</NavLink>
            <HelpDropdown />
          </div>

          {/* Ikonlar */}
          <div className="hidden md:flex items-center gap-6 text-white">
            <button className="hover:text-yellow-300 transition-colors"><FaSearch size={20} /></button>
            {/* <Link href="/cart" className="relative hover:text-yellow-300 transition-colors">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col items-center gap-6 py-8">
            <NavLink href="/">Anasayfa</NavLink>
            <NavLink href="/urunler">Ürünler</NavLink>
            <NavLink href="/hakkimizda">Hakkımızda</NavLink>
            <NavLink href="/sss">SSS</NavLink>
            <div className="flex items-center gap-8 text-white mt-4">
              <button className="hover:text-yellow-300 transition-colors"><FaSearch size={22} /></button>
              {/* <Link href="/cart" className="relative hover:text-yellow-300 transition-colors">
                  <FaShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</span>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-800">
        <Header />
        <main className="pt-0">{children}</main>
        
        {/* FOOTER ALANI */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {/* Logo and Social */}
                <div className="col-span-2 md:col-span-4 lg:col-span-1">
                     <Link href="/" className="inline-block mb-4">
                        <Image src="/logo-modern.svg" alt="Cosmos Logo" width={140} height={40} priority />
                    </Link>
                    <p className="text-gray-400 text-sm mb-4">Sıcak ve soğuk içecek keyfini her an, her yerde yaşayın.</p>
                </div>

                {/* Kurumsal */}
                <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-4">Kurumsal</h3>
                    <ul className="space-y-3">
                        <li><Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</Link></li>
                        <li><Link href="/sertifikalar" className="text-gray-300 hover:text-white transition-colors">Sertifikalar</Link></li>
                        <li><Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">İletişim</Link></li>
                    </ul>
                </div>

                {/* Yardım */}
                <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-4">Yardım</h3>
                    <ul className="space-y-3">
                        <li><Link href="/sss" className="text-gray-300 hover:text-white transition-colors">SSS</Link></li>
                        <li><Link href="/kargo-teslimat" className="text-gray-300 hover:text-white transition-colors">Kargo ve Teslimat</Link></li>
                        <li><Link href="/garanti-politikasi" className="text-gray-300 hover:text-white transition-colors">Garanti Politikası</Link></li>
                    </ul>
                </div>

                {/* Sözleşmeler */}
                <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-4">Yasal</h3>
                    <ul className="space-y-3">
                        <li><Link href="/kvkk" className="text-gray-300 hover:text-white transition-colors">KVKK</Link></li>
                        <li><Link href="/kullanim-sartlari" className="text-gray-300 hover:text-white transition-colors">Kullanım Şartları</Link></li>
                        <li><Link href="/satis-sozlesmesi" className="text-gray-300 hover:text-white transition-colors">Satış Sözleşmesi</Link></li>
                    </ul>
                </div>
                
                 {/* E-Bülten */}
                <div className="col-span-2 md:col-span-4 lg:col-span-1">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-4">Haberdar Olun</h3>
                    <p className="text-gray-400 text-sm mb-3">Yeni ürünler ve indirimlerden ilk siz haberdar olun.</p>
                    <form className="flex">
                        <input type="email" placeholder="E-posta adresiniz" className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <button type="submit" className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-colors">Abone Ol</button>
                    </form>
                </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Cosmos Termos. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useIntl } from 'react-intl';
import HeaderLanguageSwitcher from './HeaderLanguageSwitcher';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const intl = useIntl();

const navLinks = [
  { href: "/", id: "header.home" },
  { href: "/#about", id: "header.about" },
  { href: "/#services", id: "header.service" },
  { href: "/#feedback", id: "header.blog" },
  { href: "/#contact", id: "header.contact" },
];


  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black border-b border-gray-200 h-[137px] z-50 ">
      <nav className="container mx-auto flex justify-between items-center h-full">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 pl-[63px]">
          <Image 
            src="/almisar-alaswad-logo.svg" 
            alt="MyLogo" 
            width={124} 
            height={129}
            priority
            className="w-[124px] h-[129px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-[52.75px] pr-[35.25px]">
          <div className="flex items-center gap-[21.75px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-xs hover:text-[#CF3D31] transition-colors ${
                    isActive ? 'text-[#CF3D31] font-medium' : 'text-[#4D4D4D] font-normal'
                  }`}
                  style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}
                >
                  {intl.formatMessage({ id: link.id })}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/get-a-quote"
            className="text-white text-xs font-medium bg-[#CF3D31] rounded-[4.5px] px-4 py-2 hover:bg-opacity-90 transition-all flex-shrink-0"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {intl.formatMessage({ id: "header.getQuote" })}
          </Link>

          {/* Desktop Language Switcher */}
          <HeaderLanguageSwitcher />
        </div>

        {/* Mobile Hamburger + Translate */}
        <div className="flex items-center gap-4 lg:hidden pr-[35.25px]">
          {/* Translate always visible */}
          <HeaderLanguageSwitcher />

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden flex flex-col items-center space-y-4 p-6 z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-lg hover:text-[#CF3D31] transition-colors ${
                  isActive ? 'text-[#CF3D31] font-medium' : 'text-[#4D4D4D] font-normal'
                }`}
                style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {intl.formatMessage({ id: link.id })}
              </Link>
            );
          })}

          <Link
            href="/get-a-quote"
            className="w-full text-center text-white text-lg font-medium bg-[#CF3D31] rounded-[4.5px] px-4 py-3 hover:bg-opacity-90 transition-all"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {intl.formatMessage({ id: "header.getQuote" })}
          </Link>

          {/* Note: Mobile language switcher is removed from menu */}
        </div>
      )}
    </header>
  );
};

export default Header;

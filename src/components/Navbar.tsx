import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations, useTranslatedPath } from '../i18n/utils';
import { ui } from '../i18n/ui';

interface NavbarProps {
  lang: keyof typeof ui;
  isTransparent?: boolean;
}

export default function Navbar({ lang, isTransparent = false }: NavbarProps) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (!currentPath) return false;
    const translated = translatePath(path);
    // Home logic
    if (translated === '/' || translated === '/en/') {
      return currentPath === translated || currentPath === translated.replace(/\/$/, '');
    }
    // Nested path logic
    return currentPath === translated || currentPath.startsWith(translated + '/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isTransparent ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href={translatePath('/')} className="flex items-center">
          <img src="/logo.webp" alt="VibalTours" className="h-20 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href={translatePath('/')} className={
            isActive('/') ? 'font-bold text-brand-500 transition-colors' : `font-medium transition-colors hover:text-brand-500 ${isScrolled || !isTransparent ? 'text-slate-600' : 'text-slate-100'}`
          }>
            {t('nav.home')}
          </a>
          <a href={translatePath('/tours')} className={
            isActive('/tours') ? 'font-bold text-brand-500 transition-colors' : `font-medium transition-colors hover:text-brand-500 ${isScrolled || !isTransparent ? 'text-slate-600' : 'text-slate-100'}`
          }>
            {t('nav.tours')}
          </a>
          
          {/* Packages Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 transition-colors hover:text-brand-500 ${
              isActive('/packages') ? 'font-bold text-brand-500' : `font-medium ${isScrolled || !isTransparent ? 'text-slate-600' : 'text-slate-100'}`
            }`}>
              {t('nav.packages')}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2 w-48 flex flex-col">
                <a href={translatePath('/packages/tarapoto')} className={`px-4 py-2 transition-colors text-sm hover:bg-brand-50 hover:text-brand-600 ${isActive('/packages/tarapoto') ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 font-medium'}`}>
                  {t('nav.packages.tarapoto')}
                </a>
                <a href={translatePath('/packages/cajamarca')} className={`px-4 py-2 transition-colors text-sm hover:bg-brand-50 hover:text-brand-600 ${isActive('/packages/cajamarca') ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 font-medium'}`}>
                  {t('nav.packages.cajamarca')}
                </a>
                <a href={translatePath('/packages/chancay')} className={`px-4 py-2 transition-colors text-sm hover:bg-brand-50 hover:text-brand-600 ${isActive('/packages/chancay') ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 font-medium'}`}>
                  {t('nav.packages.chancay')}
                </a>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 transition-colors hover:text-brand-500 ${
              isActive('/services') ? 'font-bold text-brand-500' : `font-medium ${isScrolled || !isTransparent ? 'text-slate-600' : 'text-slate-100'}`
            }`}>
              {t('nav.services')}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2 w-64 flex flex-col">
                <a href={translatePath('/services/personalized')} className={`px-4 py-2 transition-colors text-sm hover:bg-brand-50 hover:text-brand-600 ${isActive('/services/personalized') ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 font-medium'}`}>
                  {t('nav.services.personalized')}
                </a>
                <a href={translatePath('/services/groups')} className={`px-4 py-2 transition-colors text-sm hover:bg-brand-50 hover:text-brand-600 ${isActive('/services/groups') ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600 font-medium'}`}>
                  {t('nav.services.groups')}
                </a>
              </div>
            </div>
          </div>

          <a href={translatePath('/about')} className={
            isActive('/about') ? 'font-bold text-brand-500 transition-colors' : `font-medium transition-colors hover:text-brand-500 ${isScrolled || !isTransparent ? 'text-slate-600' : 'text-slate-100'}`
          }>
            {t('nav.about')}
          </a>
          <a href={translatePath('/contact')} className={
            isActive('/contact') ? 'font-bold text-brand-500 transition-colors' : `font-medium transition-colors hover:text-brand-500 ${isScrolled || !isTransparent ? 'text-slate-600' : 'text-slate-100'}`
          }>
            {t('nav.contact')}
          </a>
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/" className={`text-sm font-medium hover:text-brand-500 ${lang === 'es' ? 'text-brand-500 underline' : (isScrolled || !isTransparent ? 'text-slate-500' : 'text-slate-200')}`}>ES</a>
          <span className={isScrolled || !isTransparent ? 'text-slate-300' : 'text-slate-400'}>|</span>
          <a href="/en" className={`text-sm font-medium hover:text-brand-500 ${lang === 'en' ? 'text-brand-500 underline' : (isScrolled || !isTransparent ? 'text-slate-500' : 'text-slate-200')}`}>EN</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${isScrolled || !isTransparent ? 'text-slate-900' : 'text-brand-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg px-4 py-4 flex flex-col gap-4">
          <a href={translatePath('/')} className="text-slate-700 font-medium">{t('nav.home')}</a>
          <a href={translatePath('/tours')} className="text-slate-700 font-medium">{t('nav.tours')}</a>
          
          <div className="flex flex-col gap-2">
            <span className="text-slate-900 font-bold">{t('nav.packages')}</span>
            <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100">
              <a href={translatePath('/packages/tarapoto')} className={`hover:text-brand-600 transition-colors ${isActive('/packages/tarapoto') ? 'text-brand-600 font-bold' : 'text-slate-600 font-medium'}`}>
                {t('nav.packages.tarapoto')}
              </a>
              <a href={translatePath('/packages/cajamarca')} className={`hover:text-brand-600 transition-colors ${isActive('/packages/cajamarca') ? 'text-brand-600 font-bold' : 'text-slate-600 font-medium'}`}>
                {t('nav.packages.cajamarca')}
              </a>
              <a href={translatePath('/packages/chancay')} className={`hover:text-brand-600 transition-colors ${isActive('/packages/chancay') ? 'text-brand-600 font-bold' : 'text-slate-600 font-medium'}`}>
                {t('nav.packages.chancay')}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-slate-900 font-bold">{t('nav.services')}</span>
            <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100">
              <a href={translatePath('/services/personalized')} className={`hover:text-brand-600 transition-colors ${isActive('/services/personalized') ? 'text-brand-600 font-bold' : 'text-slate-600 font-medium'}`}>
                {t('nav.services.personalized')}
              </a>
              <a href={translatePath('/services/groups')} className={`hover:text-brand-600 transition-colors ${isActive('/services/groups') ? 'text-brand-600 font-bold' : 'text-slate-600 font-medium'}`}>
                {t('nav.services.groups')}
              </a>
            </div>
          </div>

          <a href={translatePath('/about')} className="text-slate-700 font-medium">{t('nav.about')}</a>
          <a href={translatePath('/contact')} className="text-slate-700 font-medium">{t('nav.contact')}</a>
          <div className="flex gap-4 pt-4 border-t border-slate-100">
            <a href="/" className={`text-sm font-medium ${lang === 'es' ? 'text-brand-600 font-bold' : 'text-slate-500'}`}>ES</a>
            <a href="/en" className={`text-sm font-medium ${lang === 'en' ? 'text-brand-600 font-bold' : 'text-slate-500'}`}>EN</a>
          </div>
        </div>
      )}
    </header>
  );
}

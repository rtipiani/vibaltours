import React from 'react';
import { useTranslations, useTranslatedPath } from '../i18n/utils';
import { ui } from '../i18n/ui';
import { FaFacebookF, FaInstagram, FaTiktok, FaTripadvisor, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  lang: keyof typeof ui;
}

export default function Footer({ lang }: FooterProps) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-24 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href={translatePath('/')} className="inline-block mb-6">
              <img src="/logo.webp" alt="VibalTours" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              {lang === 'es' 
                ? 'VibalTours es una agencia con sede principal en la Ciudad de Cajamarca y su sucursal en La Libertad, brindando experiencias inolvidables con más de 15 años en el mercado turístico.'
                : 'VibalTours is an agency based in Cajamarca with a branch in La Libertad, providing unforgettable experiences with over 15 years in the tourism market.'}
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-transparent">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-transparent">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#000000] hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-transparent">
                <FaTiktok className="w-4 h-4" />
              </a>
              <a href="#" aria-label="TripAdvisor" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#34E0A1] hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-transparent">
                <FaTripadvisor className="w-5 h-5" />
              </a>
              <a href="https://wa.me/51958139576" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-transparent">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Vibal Tours</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href={translatePath('/')} className="text-slate-400 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href={translatePath('/tours')} className="text-slate-400 hover:text-white transition-colors">{t('nav.tours')}</a></li>
              <li><a href={translatePath('/about')} className="text-slate-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href={translatePath('/contact')} className="text-slate-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">{lang === 'es' ? 'Destinos' : 'Destinations'}</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href={translatePath('/packages/tarapoto')} className="text-slate-400 hover:text-white transition-colors">Tarapoto</a></li>
              <li><a href={translatePath('/packages/cajamarca')} className="text-slate-400 hover:text-white transition-colors">Cajamarca</a></li>
              <li><a href={translatePath('/packages/chancay')} className="text-slate-400 hover:text-white transition-colors">Chancay</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">{t('nav.contact')}</h4>
            <ul className="flex flex-col gap-5 text-sm text-slate-400">
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">{lang === 'es' ? 'Cajamarca (Principal)' : 'Cajamarca (HQ)'}</span>
                <span>Jr. 2 de Mayo #569 Int. 1</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">{lang === 'es' ? 'La Libertad (Sucursal)' : 'La Libertad (Branch)'}</span>
                <span>Av. Antonio Raymondi #216, San Pedro de Lloc</span>
              </li>
              <li className="flex flex-col mt-1">
                <a href="tel:+51958139576" className="hover:text-white transition-colors">T: +51 958 139 576</a>
                <a href="tel:+51949795898" className="hover:text-white transition-colors">T: +51 949 795 898</a>
                <a href="mailto:reservas@vibaltours.com" className="hover:text-white transition-colors mt-1">E: reservas@vibaltours.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Vibal Tours. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <a href={translatePath('/privacy')} className="hover:text-white transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy Policy'}</a>
            <span className="w-1 h-1 rounded-full bg-slate-700 hidden sm:inline-block"></span>
            <a href={translatePath('/terms')} className="hover:text-white transition-colors">{lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}</a>
            <span className="w-1 h-1 rounded-full bg-slate-700 hidden sm:inline-block"></span>
            <a href={translatePath('/esnna')} className="hover:text-white transition-colors font-medium">Ley ESNNA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

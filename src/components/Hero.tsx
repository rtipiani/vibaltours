import React from 'react';
import { useTranslations, useTranslatedPath } from '../i18n/utils';
import { ui } from '../i18n/ui';

interface HeroProps {
  lang: keyof typeof ui;
}

export default function Hero({ lang }: HeroProps) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 z-10"></div>
        {/* We use a placeholder image from Unsplash for the beautiful jungle vibe */}
        <img 
          src="https://images.unsplash.com/photo-1518182170546-076616fd4625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Jungle background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-300 backdrop-blur-sm border border-brand-500/30 text-sm font-semibold tracking-wide mb-6 animate-fade-in-up">
          🌿 Vibal Tours
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-light animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {t('hero.subtitle')}
        </p>
        <a 
          href={translatePath('/tours')}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-brand-600 font-display rounded-xl hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 animate-fade-in-up hover:-translate-y-1"
          style={{ animationDelay: '300ms' }}
        >
          {t('hero.cta')}
          <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

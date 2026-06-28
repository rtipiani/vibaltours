import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations, useTranslatedPath } from '../i18n/utils';
import { ui } from '../i18n/ui';

interface HeroSliderProps {
  lang: keyof typeof ui;
}

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop', // Cajamarca Plaza
    titleEs: 'Descubre el Perú y el Mundo con VibalTours',
    titleEn: 'Discover Peru and the World with VibalTours',
    subtitleEs: 'Experiencias grupales inolvidables a nivel nacional e internacional. Más de 15 años de confianza.',
    subtitleEn: 'Unforgettable group experiences nationally and internationally. Over 15 years of trust.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1547481183-7c30f46d9d06?q=80&w=2000&auto=format&fit=crop', // Nature / Jungle
    titleEs: 'Aventuras en la Naturaleza',
    titleEn: 'Adventures in Nature',
    subtitleEs: 'Conecta con los paisajes más impresionantes y vive el turismo vivencial.',
    subtitleEn: 'Connect with the most impressive landscapes and experience experiential tourism.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop', // Group trip
    titleEs: 'Viajes Grupales Inolvidables',
    titleEn: 'Unforgettable Group Trips',
    subtitleEs: 'Organizamos tu viaje soñado con amigos, familia o promociones escolares.',
    subtitleEn: 'We organize your dream trip with friends, family, or school groups.',
  }
];

export default function HeroSlider({ lang }: HeroSliderProps) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 group">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80 z-10"></div>
          <img 
            src={slides[current].image} 
            alt="Vibal Tours" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-300 backdrop-blur-sm border border-accent-500/30 text-xs font-semibold tracking-wide mb-4">
              🌿 VibalTours
            </span>
            <h1 className="text-3xl font-display font-bold text-white mb-4 leading-tight">
              {lang === 'es' ? slides[current].titleEs : slides[current].titleEn}
            </h1>
            <p className="text-base text-slate-200 mb-8 max-w-2xl font-light">
              {lang === 'es' ? slides[current].subtitleEs : slides[current].subtitleEn}
            </p>
            <a 
              href={translatePath('/tours')}
              className="group/btn relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-200 bg-brand-600 font-display rounded-xl hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1"
            >
              {t('hero.cta')}
              <ChevronRight className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-brand-400 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

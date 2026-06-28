import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Clock, MapPin, ChevronRight } from 'lucide-react';
import { useTranslations, useTranslatedPath } from '../i18n/utils';
import { ui } from '../i18n/ui';

interface PackagesGridProps {
  lang: keyof typeof ui;
  destination?: string;
}

const packages = [
  {
    id: 'tarapoto',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop',
    titleEs: 'Tarapoto: Ciudad de las Palmeras',
    titleEn: 'Tarapoto: City of Palms',
    durationEs: '5 Días / 4 Noches',
    durationEn: '5 Days / 4 Nights',
    location: 'Tarapoto, Perú',
    descriptionEs: 'Descubre la magia de la selva peruana, cataratas impresionantes y naturaleza exuberante en este paquete completo.',
    descriptionEn: 'Discover the magic of the Peruvian jungle, impressive waterfalls, and lush nature in this complete package.',
    slug: '/packages/tarapoto'
  },
  {
    id: 'cajamarca',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop',
    titleEs: 'Cajamarca: Historia y Tradición',
    titleEn: 'Cajamarca: History and Tradition',
    durationEs: '3 DÍAS / 2 NOCHES',
    durationEn: '3 DAYS / 2 NIGHTS',
    location: 'Cajamarca, Perú',
    descriptionEs: 'Explora la riqueza histórica de Cajamarca, sus baños del Inca, ventanillas de Otuzco y su hermosa campiña.',
    descriptionEn: 'Explore the historical richness of Cajamarca, its Inca baths, Otuzco windows, and its beautiful countryside.',
    slug: '/packages/cajamarca'
  },
  {
    id: 'chancay',
    image: 'https://images.unsplash.com/photo-1549557676-47b2c0f20954?q=80&w=800&auto=format&fit=crop',
    titleEs: 'Chancay, Pisco e Ica (Terrestre)',
    titleEn: 'Chancay, Pisco and Ica (Overland)',
    durationEs: '4 DÍAS / 3 NOCHES',
    durationEn: '4 DAYS / 3 NIGHTS',
    location: 'Chancay - Pisco - Ica',
    descriptionEs: 'Un increíble recorrido terrestre por la costa peruana descubriendo maravillas desde el norte chico hasta las dunas del sur.',
    descriptionEn: 'An incredible overland tour along the Peruvian coast discovering wonders from the north coast to the southern dunes.',
    slug: '/packages/chancay'
  }
];

export default function PackagesGrid({ lang, destination }: PackagesGridProps) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const filteredPackages = destination ? packages.filter(p => p.id === destination) : packages;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            {lang === 'es' ? 'Explora Más' : 'Explore More'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            {lang === 'es' ? 'Nuestros Paquetes' : 'Our Packages'}
          </h2>
          <p className="text-lg text-slate-600">
            {lang === 'es' 
              ? 'Vive experiencias de varios días con todo organizado para tu comodidad y disfrute absoluto.' 
              : 'Experience multi-day adventures with everything organized for your absolute comfort and enjoyment.'}
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPackages.map((pkg) => (
            <motion.div 
              key={pkg.id} 
              variants={item}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={pkg.image} 
                  alt={lang === 'es' ? pkg.titleEs : pkg.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-brand-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lang === 'es' ? pkg.durationEs : pkg.durationEn}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-3">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  {pkg.location}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {lang === 'es' ? pkg.titleEs : pkg.titleEn}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {lang === 'es' ? pkg.descriptionEs : pkg.descriptionEn}
                </p>
                
                <a 
                  href={translatePath(pkg.slug)}
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-brand-50 text-brand-700 font-bold py-3 px-6 rounded-xl transition-all duration-200 group-hover:bg-brand-600 group-hover:text-white"
                >
                  {lang === 'es' ? 'Ver Detalles' : 'View Details'}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

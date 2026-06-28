import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../i18n/utils';
import { ui } from '../i18n/ui';

interface ToursGridProps {
  lang: keyof typeof ui;
}

const tours = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1547481183-7c30f46d9d06?auto=format&fit=crop&w=800&q=80',
    titleEs: 'Aventura en Oxapampa',
    titleEn: 'Oxapampa Adventure',
    descEs: 'Descubre las cataratas, la colonia austro-alemana y la belleza natural.',
    descEn: 'Discover waterfalls, the Austro-German colony and natural beauty.',
    price: 'S/ 150',
    duration: '2 Días'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1629864294829-8a8838bb3936?auto=format&fit=crop&w=800&q=80',
    titleEs: 'Ruta del Café en Chanchamayo',
    titleEn: 'Chanchamayo Coffee Route',
    descEs: 'Conoce el proceso del mejor café del mundo y disfruta de la selva.',
    descEn: 'Learn the process of the best coffee in the world and enjoy the jungle.',
    price: 'S/ 120',
    duration: '1 Día'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1533088231264-98425ee190a6?auto=format&fit=crop&w=800&q=80',
    titleEs: 'Expedición Pozuzo',
    titleEn: 'Pozuzo Expedition',
    descEs: 'Un viaje cultural y de naturaleza a la única colonia austro-alemana.',
    descEn: 'A cultural and nature trip to the only Austro-German colony.',
    price: 'S/ 200',
    duration: '3 Días'
  }
];

export default function ToursGrid({ lang }: ToursGridProps) {
  const t = useTranslations(lang);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            {t('tours.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('tours.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={tour.image} 
                  alt={lang === 'es' ? tour.titleEs : tour.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-700 shadow-sm">
                  {tour.duration}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                    {lang === 'es' ? tour.titleEs : tour.titleEn}
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {lang === 'es' ? tour.descEs : tour.descEn}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-brand-600">{tour.price}</span>
                  <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-brand-600 transition-colors shadow-sm hover:shadow-md">
                    {t('tours.book')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

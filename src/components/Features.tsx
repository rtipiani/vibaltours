import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, Users, Star } from 'lucide-react';
import { ui } from '../i18n/ui';

interface FeaturesProps {
  lang: keyof typeof ui;
}

const featuresEs = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "+15 Años de Experiencia",
    description: "Trayectoria comprobada creando viajes seguros e inolvidables."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Viajes Personalizados",
    description: "Itinerarios diseñados a medida para cada pasajero y grupo."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Especialistas en Grupos",
    description: "Organización experta de viajes para promociones y familias."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Agencia Formal",
    description: "Inscritos en DIRCETUR, garantizando seguridad y confianza."
  }
];

const featuresEn = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "15+ Years Experience",
    description: "Proven track record creating safe and unforgettable trips."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Personalized Trips",
    description: "Tailor-made itineraries designed for each passenger and group."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Group Specialists",
    description: "Expert trip organization for school groups and families."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Formal Agency",
    description: "Registered with DIRCETUR, ensuring safety and trust."
  }
];

export default function Features({ lang }: FeaturesProps) {
  const features = lang === 'es' ? featuresEs : featuresEn;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      {/* Decorative Blob */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            {lang === 'es' ? '¿Por qué viajar con VibalTours?' : 'Why travel with VibalTours?'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            {lang === 'es' 
              ? 'Nuestra dedicación a la excelencia y los detalles nos convierte en tu mejor opción para descubrir nuevos destinos.'
              : 'Our dedication to excellence and details makes us your best choice for discovering new destinations.'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

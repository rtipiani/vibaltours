import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Users, Baby, User } from 'lucide-react';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface ItineraryProps {
  days: ItineraryDay[];
  lang?: 'es' | 'en';
}

export default function Itinerary({ days, lang = 'es' }: ItineraryProps) {
  const [expandedDay, setExpandedDay] = useState<number>(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleConsult = (e: React.MouseEvent) => {
    e.preventDefault();
    const isEs = lang === 'es';
    
    let text = isEs 
      ? 'Hola, quisiera consultar sobre este paquete turístico. '
      : 'Hello, I would like to consult about this tour package. ';
      
    if (firstName || lastName) {
      text += (isEs ? `Nombre: ${firstName} ${lastName}. ` : `Name: ${firstName} ${lastName}. `);
    }
      
    if (startDate) text += (isEs ? `Fecha inicio: ${startDate}. ` : `Start date: ${startDate}. `);
    if (endDate) text += (isEs ? `Fecha fin: ${endDate}. ` : `End date: ${endDate}. `);
    text += (isEs ? `Adultos: ${adults}. ` : `Adults: ${adults}. `);
    if (children > 0) text += (isEs ? `Niños: ${children}.` : `Children: ${children}.`);
    
    const url = `https://wa.me/51958139576?text=${encodeURIComponent(text.trim())}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
          {lang === 'es' ? 'Itinerario del Viaje' : 'Trip Itinerary'}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {lang === 'es' 
            ? 'Descubre día a día todo lo que hemos preparado para ti en esta aventura inolvidable.' 
            : 'Discover day by day everything we have prepared for you in this unforgettable adventure.'}
        </p>
      </div>
      
      <div className="space-y-4">
        {days.map((item) => (
          <div 
            key={item.day}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              expandedDay === item.day 
                ? 'border-brand-500 bg-white shadow-lg shadow-brand-500/10' 
                : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => setExpandedDay(expandedDay === item.day ? 0 : item.day)}
              className="w-full px-6 py-5 flex items-center justify-between focus:outline-none cursor-pointer"
            >
              <div className="flex items-center gap-6 text-left">
                <div className={`flex items-center justify-center min-w-[3rem] w-12 h-12 rounded-full font-bold text-lg transition-colors duration-300 ${
                  expandedDay === item.day 
                    ? 'bg-brand-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 shadow-sm border border-slate-200'
                }`}>
                  {item.day}
                </div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${
                  expandedDay === item.day ? 'text-brand-700' : 'text-slate-700'
                }`}>
                  {item.title}
                </h3>
              </div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                expandedDay === item.day ? 'bg-brand-50' : 'bg-transparent'
              }`}>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    expandedDay === item.day ? 'transform rotate-180 text-brand-600' : 'text-slate-400'
                  }`} 
                />
              </div>
            </button>
            
            <AnimatePresence>
              {expandedDay === item.day && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-8 pt-2 pl-[90px] text-slate-600 leading-relaxed text-lg">
                    {item.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
            {lang === 'es' ? 'Prepara tu viaje' : 'Plan your trip'}
          </h3>
          <p className="text-slate-600">
            {lang === 'es' ? 'Selecciona tus fechas y pasajeros para recibir una atención más rápida.' : 'Select your dates and passengers for a faster service.'}
          </p>
        </div>
        
        <form className="flex flex-col gap-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-brand-500" />
                {lang === 'es' ? 'Nombres' : 'First Name'}
              </label>
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={lang === 'es' ? 'Ej. Juan' : 'e.g. John'}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-brand-500" />
                {lang === 'es' ? 'Apellidos' : 'Last Name'}
              </label>
              <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={lang === 'es' ? 'Ej. Pérez' : 'e.g. Doe'}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-500" />
              {lang === 'es' ? 'Fecha de inicio' : 'Start date'}
            </label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-500" />
              {lang === 'es' ? 'Fecha de fin' : 'End date'}
            </label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-500" />
              {lang === 'es' ? 'Adultos' : 'Adults'}
            </label>
            <input 
              type="number" 
              min="1"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Baby className="w-4 h-4 text-brand-500" />
              {lang === 'es' ? 'Niños' : 'Children'}
            </label>
            <input 
              type="number" 
              min="0"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700" 
            />
          </div>
          </div>
        </form>

        <div className="text-center border-t border-slate-100 pt-8">
          <button 
            onClick={handleConsult}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {lang === 'es' ? 'Consultar sobre este paquete' : 'Consult about this package'}
          </button>
        </div>
      </div>
    </div>
  );
}

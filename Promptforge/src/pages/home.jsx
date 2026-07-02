import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Separador sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <Features />
      
      <section className="py-20 bg-slate-950/50">
        <Testimonials />
      </section>

      <Pricing />

      {/* Footer Final Premium */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black tracking-tighter text-white mb-6">PROMFORGE</h2>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              La plataforma definitiva para la adquisición de métodos y prompts de IA. Elevamos la productividad digital al siguiente nivel.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="/market" className="hover:text-purple-400 transition">Marketplace</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Métodos Pro</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Comunidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-purple-400 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2024 PromForge Official Platform
          </p>
          <div className="flex gap-6 text-slate-500 italic text-[10px]">
            <span>Build with React & Tailwind 4</span>
            <span>Host on Vercel</span>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default Home;
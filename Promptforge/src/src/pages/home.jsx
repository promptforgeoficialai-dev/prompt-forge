import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Shield, Rocket, ChevronRight, Brain } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative px-6 py-24 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-black uppercase tracking-widest mb-10"
          >
            <Sparkles size={14} /> El futuro de la IA está aquí
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[100px] font-black leading-[0.85] tracking-tighter mb-10"
          >
            FORJA TU <br />
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
              PODER DIGITAL
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-12"
          >
            Marketplace de prompts premium y métodos de IA. Domina herramientas como GPT-4, Midjourney y Claude con ingenieria de alto nivel.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            <Link to="/market" className="px-10 py-5 bg-purple-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-purple-500/40">
              EXPLORAR MARKET <Zap size={20} />
            </Link>
            <Link to="/login" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all">
              EMPEZAR GRATIS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Brain className="text-purple-400" />}
            title="Ingeniería Elite"
            desc="Prompts probados y optimizados para obtener resultados consistentes en cualquier modelo."
          />
          <FeatureCard 
            icon={<Shield className="text-cyan-400" />}
            title="Acceso Verificado"
            desc="Todo nuestro contenido es revisado por expertos para asegurar que el método funcione al 100%."
          />
          <FeatureCard 
            icon={<Rocket className="text-pink-400" />}
            title="Escalabilidad"
            desc="Métodos diseñados para negocios que buscan automatizar procesos con Inteligencia Artificial."
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group">
    <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default Home;
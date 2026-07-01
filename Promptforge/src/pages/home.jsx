import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// IMPORTACIÓN COMPLETA DE ICONOS PARA EVITAR ERRORES
import { 
  Sparkles, Zap, Shield, Rocket, Brain, Terminal, 
  Layout, Instagram, Twitter, Linkedin, MessageCircle, 
  Globe, ChevronRight, Crown, Star 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={14} /> La nueva era del trabajo digital
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8"
          >
            FORJA TU <br />
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent italic">
              PODER DIGITAL
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-lg text-slate-400 font-medium leading-relaxed mb-10 px-4"
          >
            Marketplace elite de prompts y métodos de IA. Domina GPT-4, Midjourney y automatizaciones avanzadas con estrategias verificadas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-6"
          >
            <Link to="/market" className="px-8 py-4 bg-purple-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/20 active:scale-95 uppercase text-xs tracking-widest">
              EXPLORAR MARKET <Zap size={18} />
            </Link>
            <Link to="/login" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all active:scale-95 uppercase text-xs tracking-widest">
              ACCESO VIP
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN DE MÉTODOS (6 ITEMS) */}
      <section className="py-20 px-6 border-y border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight flex items-center justify-center gap-3 italic">
              <Crown className="text-amber-400" /> NUESTROS MÉTODOS
            </h2>
            <p className="text-slate-500 text-xs mt-2 font-bold tracking-[0.2em] uppercase">Forjando la élite del mañana</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<Brain />} title="Ingeniería Elite" desc="Prompts maestros para ChatGPT y Claude 3.5 con enfoque empresarial." />
            <FeatureCard icon={<Shield />} title="Acceso Verificado" desc="Métodos probados por expertos para garantizar funcionalidad al 100%." />
            <FeatureCard icon={<Rocket />} title="Escalabilidad IA" desc="Automatiza tu flujo de trabajo y escala tu negocio usando agentes autónomos." />
            <FeatureCard icon={<Terminal />} title="Dev-AI Logic" desc="Acelera tu desarrollo de software con asistentes de IA optimizados." />
            <FeatureCard icon={<Layout />} title="Visual Synthesis" desc="Domina el arte visual con Midjourney y Stable Diffusion pro." />
            <FeatureCard icon={<Globe />} title="Global Business" desc="Estrategias de monetización digital para el mercado internacional." />
          </div>
        </div>
      </section>

      {/* FOOTER CON REDES SOCIALES */}
      <footer className="py-20 px-6 bg-[#010413] border-t border-white/5 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="text-2xl font-black tracking-tighter mb-4">PROMFORGE</div>
            <p className="text-slate-500 text-[10px] max-w-xs font-bold uppercase tracking-[0.2em] leading-loose">
              Elevando el estándar de la productividad humana.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram />} link="https://instagram.com" />
              <SocialIcon icon={<Twitter />} link="https://twitter.com" />
              <SocialIcon icon={<MessageCircle />} link="https://discord.com" />
              <SocialIcon icon={<Linkedin />} link="https://linkedin.com" />
            </div>
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2024 PromForge Official Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-purple-400">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{desc}</p>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-300">
    {icon}
  </a>
);

export default Home;
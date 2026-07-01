import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Shield, Rocket, Brain, Terminal, Layout, ChevronRight, Crown } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full animate-glow" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
        >
          <Sparkles size={14} /> La nueva era del trabajo digital
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] mb-8"
        >
          FORJA TU <br />
          <span className="bg-gradient-to-r from-white via-slate-400 to-slate-800 bg-clip-text text-transparent italic">
            PODER DIGITAL
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 font-medium"
        >
          Accede a la forja de prompts más avanzada. Domina GPT-4 y Midjourney con métodos verificados por expertos.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/market" className="px-10 py-4 bg-white text-black rounded-2xl font-black hover:bg-purple-600 hover:text-white transition-all shadow-xl shadow-white/5 uppercase text-xs tracking-widest">
            Explorar Market
          </Link>
          <Link to="/login" className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
            Acceso VIP
          </Link>
        </motion.div>
      </section>

      {/* METHODS GRID */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <h2 className="text-3xl font-black tracking-tighter flex items-center gap-3">
              <Crown className="text-amber-400" /> NUESTROS MÉTODOS
            </h2>
            <div className="h-[1px] flex-1 bg-white/10 hidden md:block mx-8" />
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Elite forged 2024</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MethodCard icon={<Brain />} title="Ingeniería Elite" desc="Prompts maestros para ChatGPT-4 y Claude 3.5 con resultados reales." />
            <MethodCard icon={<Shield />} title="Acceso Verificado" desc="Cada método es probado rigurosamente para garantizar su éxito." />
            <MethodCard icon={<Rocket />} title="Escalabilidad IA" desc="Automatiza tu flujo de trabajo y escala tu negocio x10." />
            <MethodCard icon={<Terminal />} title="Dev-AI Logic" desc="Acelera tu desarrollo de software con asistentes IA configurados." />
            <MethodCard icon={<Layout />} title="Visual Synthesis" desc="Domina Midjourney v6 para crear arte visual cinematográfico." />
            <MethodCard icon={<Zap />} title="Fast Automation" desc="Conecta herramientas masivas con flujos de trabajo autónomos." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 text-center md:text-left border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-black tracking-tighter mb-4">PROMFORGE</div>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Elevando la productividad humana.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <SocialBtn icon={<FaInstagram />} />
              <SocialBtn icon={<FaXTwitter />} />
              <SocialBtn icon={<FaDiscord />} />
              <SocialBtn icon={<FaLinkedinIn />} />
            </div>
            <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.4em]">© 2024 PromForge Official</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const MethodCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/40 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-[#020617] flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed font-medium">{desc}</p>
  </div>
);

const SocialBtn = ({ icon }) => (
  <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 transition-all">
    {icon}
  </button>
);

export default Home;
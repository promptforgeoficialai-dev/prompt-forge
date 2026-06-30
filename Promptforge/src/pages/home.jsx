import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Zap, Shield, Rocket, Brain, 
  Terminal, Layout, Instagram, Twitter, 
  Linkedin, MessageCircle, Globe, ChevronRight 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* HERO SECTION - Ajustado para que no se rompa el texto */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
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
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter mb-8"
          >
            FORJA TU <br />
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent">
              PODER DIGITAL
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-lg text-slate-400 font-medium leading-relaxed mb-10 px-4"
          >
            Accede a la forja de prompts más avanzada. Domina GPT-4, Midjourney y procesos de automatización con métodos verificados por expertos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-6"
          >
            <Link to="/market" className="px-8 py-4 bg-purple-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/20">
              EXPLORAR MARKET <Zap size={18} />
            </Link>
            <Link to="/login" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all">
              ACCESO VIP
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION - Ahora con 6 trabajos/servicios */}
      <section className="py-20 px-6 border-y border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight">NUESTROS MÉTODOS</h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">Herramientas de alto nivel para forjadores digitales.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Brain className="text-purple-400" />}
              title="Ingeniería Elite"
              desc="Prompts optimizados para ChatGPT y Claude que garantizan resultados empresariales."
            />
            <FeatureCard 
              icon={<Shield className="text-cyan-400" />}
              title="Acceso Verificado"
              desc="Contenido curado. Cada método es probado rigurosamente antes de publicarse."
            />
            <FeatureCard 
              icon={<Rocket className="text-pink-400" />}
              title="Escalabilidad"
              desc="Aprende a usar agentes de IA para escalar tu producción de contenido x10."
            />
            <FeatureCard 
              icon={<Terminal className="text-blue-400" />}
              title="Dev-AI Logic"
              desc="Acelera tu flujo de programación con asistentes de IA configurados para expertos."
            />
            <FeatureCard 
              icon={<Layout className="text-emerald-400" />}
              title="Visual Synthesis"
              desc="Domina Midjourney y Stable Diffusion para crear activos visuales cinematográficos."
            />
            <FeatureCard 
              icon={<Globe className="text-amber-400" />}
              title="Global Automations"
              desc="Conecta herramientas como Zapier y Make con modelos de lenguaje avanzados."
            />
          </div>
        </div>
      </section>

      {/* FOOTER CON REDES SOCIALES */}
      <footer className="py-20 px-6 bg-slate-950/50 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <div className="text-xl font-black tracking-tighter mb-4">PROMFORGE</div>
            <p className="text-slate-500 text-xs max-w-xs leading-loose font-medium uppercase tracking-widest">
              Elevando el estándar de la productividad humana.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} link="https://instagram.com" />
              <SocialIcon icon={<Twitter size={20} />} link="https://twitter.com" />
              <SocialIcon icon={<Linkedin size={20} />} link="https://linkedin.com" />
              <SocialIcon icon={<MessageCircle size={20} />} link="https://discord.com" />
            </div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              © 2024 PromForge Official Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componentes pequeños para mantener el código limpio
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed font-medium">{desc}</p>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-300 shadow-xl"
  >
    {icon}
  </a>
);

export default Home;
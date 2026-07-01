import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Importamos todos los iconos que usamos abajo para evitar errores de compilación
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Rocket, 
  Brain, 
  Terminal, 
  Layout, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MessageCircle, 
  Globe, 
  ChevronRight 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20 min-h-screen selection:bg-purple-500/30">
      
      {/* --- SECCIÓN HERO (PRINCIPAL) --- */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          {/* Badge superior animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={14} /> La nueva era del trabajo digital
          </motion.div>
          
          {/* Título Principal con Gradiente */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-8"
          >
            FORJA TU <br />
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent">
              PODER DIGITAL
            </span>
          </motion.h1>

          {/* Descripción corta */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-lg text-slate-400 font-medium leading-relaxed mb-10 px-4"
          >
            Accede a la forja de prompts más avanzada. Domina GPT-4, Midjourney y procesos de automatización con métodos verificados por expertos para escalar tu negocio.
          </motion.p>

          {/* Botones de Acción (CTA) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-6"
          >
            <Link to="/market" className="px-8 py-4 bg-purple-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/20 active:scale-95">
              EXPLORAR MARKET <Zap size={18} />
            </Link>
            <Link to="/login" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all active:scale-95">
              ACCESO VIP
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN DE MÉTODOS (6 TRABAJOS) --- */}
      <section id="metodos" className="py-20 px-6 border-y border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-white uppercase italic">Nuestros Métodos</h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">Herramientas de alto nivel para forjadores digitales avanzados.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Brain className="text-purple-400" />}
              title="Ingeniería Elite"
              desc="Prompts optimizados para ChatGPT-4 y Claude 3.5 que garantizan resultados empresariales inmediatos."
            />
            <FeatureCard 
              icon={<Shield className="text-cyan-400" />}
              title="Acceso Verificado"
              desc="Contenido curado. Cada método es probado rigurosamente antes de publicarse en nuestro market."
            />
            <FeatureCard 
              icon={<Rocket className="text-pink-400" />}
              title="Escalabilidad IA"
              desc="Aprende a usar agentes de IA autónomos para escalar tu producción de contenido y ventas x10."
            />
            <FeatureCard 
              icon={<Terminal className="text-blue-400" />}
              title="Dev-AI Logic"
              desc="Acelera tu flujo de programación y desarrollo web con asistentes de IA configurados para expertos."
            />
            <FeatureCard 
              icon={<Layout className="text-emerald-400" />}
              title="Visual Synthesis"
              desc="Domina Midjourney v6 y Stable Diffusion para crear activos visuales de grado cinematográfico."
            />
            <FeatureCard 
              icon={<Globe className="text-amber-400" />}
              title="Global Automations"
              desc="Conecta herramientas como Zapier, Make y Python con modelos de lenguaje de última generación."
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER (REDES SOCIALES Y LEGAL) --- */}
      <footer className="py-20 px-6 bg-[#010413] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Logo y Eslogan */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter mb-4 text-white">PROMFORGE</div>
            <p className="text-slate-500 text-xs max-w-xs leading-loose font-bold uppercase tracking-[0.2em]">
              Elevando el estándar de la productividad humana mediante la forja digital.
            </p>
          </div>

          {/* Redes Sociales y Copyright */}
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} link="https://instagram.com/tu_usuario" />
              <SocialIcon icon={<Twitter size={20} />} link="https://twitter.com/tu_usuario" />
              <SocialIcon icon={<Linkedin size={20} />} link="https://linkedin.com/in/tu_usuario" />
              <SocialIcon icon={<MessageCircle size={20} />} link="https://discord.gg/tu_servidor" />
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-slate-600">
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                © 2024 PromForge Official Platform
              </p>
              <p className="text-[9px] font-medium opacity-50 uppercase tracking-widest">
                Desarrollado para la élite digital
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- COMPONENTE: TARJETA DE MÉTODO (REUTILIZABLE) ---
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-500 group cursor-default">
    <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-inner">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{title}</h3>
    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{desc}</p>
  </div>
);

// --- COMPONENTE: ICONO SOCIAL (REUTILIZABLE) ---
const SocialIcon = ({ icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 shadow-xl active:scale-90"
  >
    {icon}
  </a>
);

export default Home;
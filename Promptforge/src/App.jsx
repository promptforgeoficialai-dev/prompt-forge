import React, { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, Cpu, Globe, Instagram, Twitter, 
  Linkedin, MessageCircle, ChevronRight, CheckCircle2, 
  Star, Lock, Mail, User, ArrowLeft, Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTE: FONDO ANIMADO PROFESIONAL ---
const MovingBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-900/20 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        x: [0, -80, 0],
        y: [0, -100, 0] 
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[120px]"
    />
  </div>
);

const App = () => {
  const [view, setView] = useState('home'); // 'home' o 'login'

  // Precios/Productos
  const products = [
    { title: "IA Starter Pack", price: "29.99", features: ["5 Prompts Maestros", "Guía Setup", "Comunidad"], premium: false },
    { title: "Master en Flujos IA", price: "79.99", features: ["Workflows Pro", "Agentes IA", "Soporte VIP"], premium: true },
    { title: "Elite Digital Biz", price: "149.99", features: ["Consultoría", "Escalado Pro", "Updates de por vida"], premium: false }
  ];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500/30">
      <MovingBackground />

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-2xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setView('home')}
          >
            AI_METHOD_PRO
          </motion.div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#metodos" className="hover:text-purple-400 transition">Métodos</a>
            <a href="#precios" className="hover:text-purple-400 transition">Precios</a>
          </div>

          <div className="flex items-center gap-4">
            {view === 'home' ? (
              <button 
                onClick={() => setView('login')}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full border border-white/10 transition-all text-sm font-bold"
              >
                <Lock size={14} /> Mi Cuenta
              </button>
            ) : (
              <button 
                onClick={() => setView('home')}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-bold"
              >
                <ArrowLeft size={14} /> Volver
              </button>
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-32"
          >
            {/* HERO */}
            <section className="px-6 pb-20 text-center">
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest"
              >
                La Revolución Digital está aquí
              </motion.span>
              <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
                CREA EL <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                  FUTURO CON IA
                </span>
              </h1>
              <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Métodos de trabajo optimizados para facturar más utilizando inteligencia artificial avanzada.
              </p>
              <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-full font-black flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-white transition-all duration-300">
                  OBTENER MÉTODOS <ChevronRight size={20} />
                </button>
              </div>
            </section>

            {/* SECCIÓN PRECIOS */}
            <section id="precios" className="py-24 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {products.map((p, i) => (
                  <PriceCard key={i} {...p} />
                ))}
              </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 border-t border-white/5 bg-black/20 backdrop-blur-lg">
              <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-bold opacity-50 italic">AI_METHOD_PRO</div>
                <div className="flex gap-6">
                  <SocialIcon icon={<Instagram />} />
                  <SocialIcon icon={<Twitter />} />
                  <SocialIcon icon={<MessageCircle />} />
                </div>
                <p className="text-slate-500 text-sm">© 2024 Premium AI Methods.</p>
              </div>
            </footer>
          </motion.main>
        ) : (
          /* --- PANTALLA DE LOGIN --- */
          <motion.div 
            key="login"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pt-40 pb-20 px-6 flex justify-center items-center"
          >
            <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="text-center mb-10">
                <div className="inline-flex p-4 bg-purple-500/20 rounded-2xl mb-4 text-purple-400">
                  <Lock size={32} />
                </div>
                <h2 className="text-3xl font-bold">Bienvenido</h2>
                <p className="text-slate-400 mt-2">Ingresa a tu panel premium</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="email" 
                    placeholder="Tu correo"
                    className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="password" 
                    placeholder="Contraseña"
                    className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold hover:opacity-90 transition shadow-lg shadow-purple-500/20">
                  Iniciar Sesión
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm">
                  ¿No tienes cuenta? <span className="text-purple-400 font-bold cursor-pointer hover:underline">Regístrate</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Componentes Pequeños para Limpieza
const PriceCard = ({ title, price, features, premium }) => (
  <div className={`p-8 rounded-[2rem] border transition-all duration-500 ${premium ? 'bg-white text-black scale-105 border-transparent shadow-[0_0_40px_rgba(168,85,247,0.4)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
    {premium && <div className="text-[10px] font-black uppercase tracking-widest mb-4 bg-purple-600 text-white px-3 py-1 rounded-full inline-block">Recomendado</div>}
    <h3 className="text-xl font-bold">{title}</h3>
    <div className="my-6">
      <span className="text-4xl font-black">${price}</span>
      <span className={premium ? 'text-black/50' : 'text-slate-500'}>/único</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-sm font-medium italic">
          <CheckCircle2 size={16} className={premium ? 'text-purple-600' : 'text-cyan-400'} /> {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-2xl font-bold transition-all ${premium ? 'bg-black text-white hover:bg-slate-800' : 'bg-white text-black hover:bg-purple-500 hover:text-white'}`}>
      Adquirir Ahora
    </button>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 hover:text-purple-500 transition-all">
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default App;
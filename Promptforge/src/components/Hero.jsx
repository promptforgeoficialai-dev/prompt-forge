import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  ChevronRight, 
  Users, 
  Sparkles, 
  CheckCircle, 
  Headset, 
  Rocket 
} from "lucide-react";

// --- Sub-componente para el fondo dinámico ---
const BackgroundBrushes = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-slate-950" />
    {/* Gradientes animados (estilo Stripe) */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-600/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -80, 0],
        y: [0, -100, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[120px]"
    />
    {/* Efecto de ruido para textura premium */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
  </div>
);

const Hero = () => {
  // Variantes de animación para Stagger Children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const stats = [
    { label: "Usuarios Activos", value: "+5,000", icon: <Users size={16} /> },
    { label: "Métodos de IA", value: "+300", icon: <Rocket size={16} /> },
    { label: "Satisfacción", value: "98%", icon: <CheckCircle size={16} /> },
    { label: "Soporte Global", value: "24/7", icon: <Headset size={16} /> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden px-6">
      <BackgroundBrushes />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} className="animate-pulse" /> 
            Transformando el futuro con IA
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-8"
          >
            FORJA TU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-slate-500">
              PODER DIGITAL
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-medium"
          >
            Domina los métodos de trabajo más avanzados. Optimizamos tu productividad integrando IA de élite en tu flujo diario.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button className="px-8 py-4 bg-white text-black rounded-2xl font-black text-sm transition-all hover:bg-purple-500 hover:text-white shadow-xl shadow-white/5 flex items-center justify-center gap-2 group">
              EXPLORAR MARKETPLACE
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm transition-all hover:bg-white/10 backdrop-blur-md">
              COMENZAR AHORA
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/5 pt-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-purple-400">
                  {stat.icon}
                  <span className="text-xl font-black text-white">{stat.value}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* COLUMNA DERECHA: VISUAL FUTURISTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* El "Core" de IA hecho con CSS y Motion */}
          <div className="relative w-full max-w-[500px] aspect-square">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[3rem] border border-white/5 bg-gradient-to-tr from-purple-500/10 to-transparent backdrop-blur-3xl"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
            />
            
            {/* Visual de "Chips" y líneas */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.05, 1] 
                    }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white/20"
                  >
                    <Zap size={24} />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Glow central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/30 rounded-full blur-[80px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
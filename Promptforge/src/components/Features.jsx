import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  ShoppingBag, 
  ShieldCheck, 
  RefreshCw, 
  Users 
} from 'lucide-react';

const features = [
  {
    title: "Prompts Premium",
    description: "Accede a una librería curada de prompts de ingeniería avanzada, optimizados para obtener resultados de grado profesional.",
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    title: "Automatización IA",
    description: "Integra flujos de trabajo autónomos que ejecutan tareas complejas sin intervención humana, potenciando tu productividad x10.",
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    title: "Marketplace Global",
    description: "Compra y vende métodos de trabajo digitales en un ecosistema seguro diseñado para la economía de la inteligencia artificial.",
    icon: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Seguridad de Élite",
    description: "Protección de datos de extremo a extremo y cifrado de prompts para asegurar que tu propiedad intelectual esté siempre a salvo.",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-transparent"
  },
  {
    title: "Updates Constantes",
    description: "Nuestros algoritmos y métodos se actualizan semanalmente para mantenerse sincronizados con las últimas versiones de GPT y Midjourney.",
    icon: <RefreshCw className="w-6 h-6 text-pink-400" />,
    gradient: "from-pink-500/20 to-transparent"
  },
  {
    title: "Comunidad VIP",
    description: "Únete a un círculo exclusivo de forjadores digitales donde compartimos estrategias, soporte 24/7 y networking de alto nivel.",
    icon: <Users className="w-6 h-6 text-amber-400" />,
    gradient: "from-amber-500/20 to-transparent"
  }
];

const FeatureCard = ({ title, description, icon, gradient, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-2xl"
    >
      {/* Efecto de resplandor de fondo en hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
      
      {/* Contenido de la tarjeta */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Borde luminoso inferior (estilo Apple) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden px-6">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6"
          >
            Potencia tu flujo de trabajo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              con tecnología de vanguardia
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg font-medium"
          >
            PromptForge no es solo una herramienta, es tu arsenal completo para dominar la era de la inteligencia artificial.
          </motion.p>
        </div>

        {/* Cuadrícula de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: "Forge Free",
    price: "0",
    description: "Ideal para dar tus primeros pasos en el mundo de la IA.",
    features: [
      "Acceso limitado a la forja",
      "5 Prompts gratuitos/mes",
      "Acceso a la comunidad",
      "Actualizaciones básicas"
    ],
    buttonText: "Comenzar Gratis",
    featured: false,
    icon: <Zap className="w-6 h-6 text-slate-400" />
  },
  {
    name: "Forge Pro",
    price: "29",
    description: "Potencia tu flujo de trabajo con herramientas ilimitadas.",
    features: [
      "Acceso completo a la librería",
      "Marketplace exclusivo",
      "Descargas ilimitadas",
      "Actualizaciones semanales",
      "Soporte prioritario 24/7"
    ],
    buttonText: "Hazte Pro",
    featured: true,
    icon: <Sparkles className="w-6 h-6 text-purple-400" />
  },
  {
    name: "Forge Elite",
    price: "79",
    description: "Para profesionales que buscan dominar el mercado.",
    features: [
      "Todo lo incluido en Pro",
      "Mentorías 1 a 1",
      "IA exclusiva personalizada",
      "Acceso anticipado beta",
      "Recursos privados VIP"
    ],
    buttonText: "Entrar a Elite",
    featured: false,
    icon: <Crown className="w-6 h-6 text-amber-400" />
  }
];

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 ${
        plan.featured 
          ? "bg-slate-900/60 border-purple-500/50 shadow-[0_0_40px_8px_rgba(168,85,247,0.15)]" 
          : "bg-slate-900/40 border-white/10 hover:border-white/20"
      } backdrop-blur-xl`}
    >
      {/* Badge Popular para el Plan Pro */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
          Más Popular
        </div>
      )}

      {/* Icono y Nombre */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          {plan.icon}
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
      </div>

      {/* Precio */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black text-white tracking-tighter">${plan.price}</span>
          <span className="text-slate-400 font-medium text-sm">/mes</span>
        </div>
        <p className="text-slate-400 text-sm mt-4 leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Características */}
      <ul className="flex-1 space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
            <div className={`p-1 rounded-full ${plan.featured ? "bg-purple-500/20 text-purple-400" : "bg-white/10 text-slate-400"}`}>
              <Check size={12} strokeWidth={4} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Botón CTA */}
      <button
        className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 active:scale-95 ${
          plan.featured
            ? "bg-white text-black hover:bg-purple-500 hover:text-white shadow-xl shadow-white/5"
            : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
        }`}
      >
        {plan.buttonText}
      </button>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden px-6">
      {/* Luces de fondo (Glows) */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Membresías
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
          >
            Elige tu nivel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              de acceso
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg font-medium"
          >
            Desde principiantes hasta Prompt Engineers profesionales. Escala tu productividad con el plan que mejor se adapte a ti.
          </motion.p>
        </div>

        {/* Grid de Precios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Nota al pie */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-16"
        >
          Pagos seguros cifrados con tecnología Stripe & PayPal
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Adrián Beltrán",
    role: "Senior AI Engineer",
    company: "NeuralTech",
    image: "https://i.pravatar.cc/150?u=adrian",
    content: "PromptForge ha transformado radicalmente nuestro flujo de trabajo. La precisión de los métodos de IA disponibles nos ha permitido reducir el tiempo de desarrollo en un 60%.",
  },
  {
    id: 2,
    name: "Elena Rossi",
    role: "Digital Strategist",
    company: "SkyHigh Media",
    image: "https://i.pravatar.cc/150?u=elena",
    content: "Encontrar prompts que realmente funcionen en producción era una pesadilla hasta que descubrimos este marketplace. La curación de contenido es simplemente excepcional.",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Creative Director",
    company: "Studio V",
    image: "https://i.pravatar.cc/150?u=marcus",
    content: "La sección premium de PromptForge es una mina de oro. He logrado generar activos visuales para mis clientes que antes creía imposibles de automatizar.",
  },
  {
    id: 4,
    name: "Sara Villalobos",
    role: "Founder",
    company: "Solvve AI",
    image: "https://i.pravatar.cc/150?u=sara",
    content: "Como fundadora, valoro la seguridad y la escalabilidad. Esta plataforma ofrece ambas, junto con una comunidad VIP que siempre está un paso adelante en tendencias.",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Fullstack Developer",
    company: "Freelance",
    image: "https://i.pravatar.cc/150?u=david",
    content: "Los flujos de trabajo de automatización con IA integrados son brutales. He pasado de gestionar 2 proyectos a 8 simultáneamente gracias a sus métodos.",
  },
  {
    id: 6,
    name: "Isabella Knight",
    role: "Head of Growth",
    company: "NexGen",
    image: "https://i.pravatar.cc/150?u=isabella",
    content: "La mejor inversión del año para nuestro equipo de marketing. Los resultados en la generación de contenido masivo han superado todos nuestros KPIs previos.",
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative group p-8 rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-purple-500 via-blue-500 to-transparent pointer-events-none" />
      
      {/* Quote Icon Background */}
      <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12 rotate-12 group-hover:text-purple-500/10 transition-colors" />

      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-slate-300 leading-relaxed italic mb-8">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity" />
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="relative w-12 h-12 rounded-full border border-white/10 object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-white tracking-tight">{testimonial.name}</h4>
            <p className="text-xs text-slate-500 font-medium">
              {testimonial.role} <span className="text-purple-400">@ {testimonial.company}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden px-6">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Social Proof
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
          >
            Confianza forjada por <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              los mejores del sector
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg font-medium"
          >
            Únete a miles de profesionales que ya están escalando sus negocios digitales con PromptForge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
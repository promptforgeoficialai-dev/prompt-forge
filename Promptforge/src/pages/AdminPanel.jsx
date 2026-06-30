import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Send, 
  Image as ImageIcon, 
  Type, 
  Tag, 
  DollarSign, 
  AlertCircle,
  Crown
} from 'lucide-react';

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'ChatGPT',
    price: 0,
    isPremium: false,
    image: '' // Aquí puedes poner un link de imagen de internet por ahora
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Guardamos el prompt en la colección "prompts" de Firestore
      await addDoc(collection(db, "prompts"), {
        ...formData,
        price: Number(formData.price),
        createdAt: serverTimestamp(),
        views: 0,
        likes: 0
      });

      alert("¡MÉTODO FORJADO CON ÉXITO! Ya aparece en el Marketplace.");
      
      // Limpiar el formulario
      setFormData({
        title: '',
        description: '',
        category: 'ChatGPT',
        price: 0,
        isPremium: false,
        image: ''
      });
    } catch (error) {
      console.error("Error al subir el producto:", error);
      alert("Error al forjar: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4 italic">PANEL DE CONTROL</h1>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">Forjador de Métodos Digitales</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* TÍTULO */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                <Type size={14} /> Nombre del Método / Prompt
              </label>
              <input 
                type="text" 
                required
                placeholder="Ej: Master Prompt para E-commerce"
                className="w-full bg-slate-950 border border-white/10 p-5 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm font-bold"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            {/* DESCRIPCIÓN */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                <AlertCircle size={14} /> Descripción del Producto
              </label>
              <textarea 
                required
                placeholder="Explica qué aprenderán o qué obtendrán con este método..."
                className="w-full bg-slate-950 border border-white/10 p-5 rounded-2xl h-40 outline-none focus:border-purple-500 transition-all text-sm font-medium leading-relaxed"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* CATEGORÍA */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                  <Tag size={14} /> Categoría
                </label>
                <select 
                  className="w-full bg-slate-950 border border-white/10 p-5 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm font-bold appearance-none cursor-pointer"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>ChatGPT</option>
                  <option>Midjourney</option>
                  <option>Claude</option>
                  <option>Automatización</option>
                  <option>Business</option>
                </select>
              </div>

              {/* PRECIO */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                  <DollarSign size={14} /> Precio ($ USD)
                </label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-slate-950 border border-white/10 p-5 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm font-bold"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
            </div>

            {/* TOGGLE PREMIUM */}
            <div 
              onClick={() => setFormData({...formData, isPremium: !formData.isPremium})}
              className={`p-6 rounded-[2rem] border transition-all cursor-pointer flex items-center justify-between ${
                formData.isPremium 
                ? 'bg-amber-400/10 border-amber-400 text-amber-400 shadow-lg shadow-amber-400/5' 
                : 'bg-white/5 border-white/10 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${formData.isPremium ? 'bg-amber-400 text-black' : 'bg-white/5'}`}>
                  <Crown size={20} />
                </div>
                <div>
                  <p className="text-sm font-black italic uppercase">Contenido Premium</p>
                  <p className="text-[10px] font-medium opacity-70">Solo usuarios con suscripción activa podrán verlo.</p>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-all ${formData.isPremium ? 'bg-amber-400' : 'bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${formData.isPremium ? 'right-1' : 'left-1'}`} />
              </div>
            </div>

            {/* BOTÓN DE ACCIÓN */}
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-6 rounded-3xl font-black text-sm tracking-[0.3em] flex items-center justify-center gap-4 transition-all ${
                loading 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-purple-500 hover:text-white shadow-2xl hover:shadow-purple-500/20'
              }`}
            >
              {loading ? 'FORJANDO...' : (
                <> PUBLICAR EN MARKET <Send size={18} /> </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPanel;
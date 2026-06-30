import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Star, Clock, Zap, Crown, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER PERFIL */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 rounded-[3rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 backdrop-blur-md">
          <div className="relative">
            <img src={user.photo} alt="avatar" className="w-32 h-32 rounded-[2rem] border-4 border-purple-500/50 object-cover shadow-2xl" />
            {user.isPremium && (
              <div className="absolute -top-3 -right-3 bg-amber-400 text-black p-2 rounded-xl shadow-lg">
                <Crown size={20} />
              </div>
            )}
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-black tracking-tighter mb-2">{user.name}</h1>
            <p className="text-slate-400 font-medium mb-6">{user.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${user.isPremium ? 'border-amber-400 bg-amber-400/10 text-amber-400' : 'border-slate-700 bg-slate-800 text-slate-500'}`}>
                {user.isPremium ? 'Socio Premium' : 'Usuario Free'}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-purple-500/30 bg-purple-500/10 text-purple-400">
                Forjador Nivel 1
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
              <Settings size={20} />
            </button>
            <button onClick={logout} className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl hover:bg-red-500 text-red-500 hover:text-white transition">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* GRID DE ESTADÍSTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={<Zap className="text-yellow-400" />} title="Prompts Usados" value={user.stats?.promptsUsed || 0} />
          <StatCard icon={<Star className="text-purple-400" />} title="Favoritos" value={user.stats?.favoritesCount || 0} />
          <StatCard icon={<Clock className="text-cyan-400" />} title="Días Activo" value="12" />
        </div>

        {/* CONTENIDO BLOQUEADO PARA FREE / DISPONIBLE PARA PREMIUM */}
        <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-10 text-center">
          {!user.isPremium ? (
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-amber-400/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Desbloquea el Nivel Élite</h3>
              <p className="text-slate-500 mb-8 font-medium">Accede a métodos de IA que facturan miles de dólares. Los usuarios free solo ven el 10% del mercado.</p>
              <button className="w-full py-4 bg-amber-400 text-black font-black rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-amber-400/10">
                CONVERTIRSE EN PREMIUM
              </button>
            </div>
          ) : (
            <div className="text-left">
              <h3 className="text-2xl font-black mb-6">Tus Métodos Premium Recientes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 font-bold italic">Cargando tus compras...</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="p-8 bg-[#0a0f1e]/50 border border-white/5 rounded-[2rem] flex items-center gap-6">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shadow-inner">
      {icon}
    </div>
    <div>
      <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{title}</p>
      <p className="text-3xl font-black">{value}</p>
    </div>
  </div>
);

export default Dashboard;
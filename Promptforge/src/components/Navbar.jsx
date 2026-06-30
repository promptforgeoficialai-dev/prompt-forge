import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, User, Layout } from 'lucide-react';

const Navbar = () => {
  const { user, loginWithGoogle } = useAuth();

  return (
    <nav className="fixed w-full z-[100] bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-xl shadow-lg group-hover:rotate-12 transition-transform" />
          PROMFORGE
        </Link>

        <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <Link to="/market" className="hover:text-white transition">Marketplace</Link>
          <Link to="/community" className="hover:text-white transition">Comunidad</Link>
        </div>

        <div className="flex items-center gap-6">
          {user ? (
            <Link to="/dashboard" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-1.5 pr-5 rounded-full border border-white/10 transition-all">
              <img src={user.photo} alt="avatar" className="w-8 h-8 rounded-full border border-purple-500/50" />
              <span className="text-xs font-bold hidden sm:block">Panel Control</span>
            </Link>
          ) : (
            <button 
              onClick={loginWithGoogle}
              className="bg-white text-black px-8 py-2.5 rounded-full text-xs font-black hover:bg-cyan-400 hover:text-white transition-all shadow-xl"
            >
              ACCESO VIP
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
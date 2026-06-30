import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, ShieldCheck, Zap } from 'lucide-react';

const Login = () => {
  const { loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  // Si el usuario ya está logueado, lo mandamos al Dashboard automáticamente
  React.useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-[#0a0f1e]/80 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] text-center shadow-2xl relative z-10"
      >
        <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-[1.5rem] mx-auto mb-8 shadow-lg shadow-purple-500/20 flex items-center justify-center">
          <ShieldCheck size={40} className="text-white" />
        </div>
        
        <h2 className="text-4xl font-black mb-4 tracking-tighter">Entrar a la Forja</h2>
        <p className="text-slate-400 mb-10 font-medium">Accede a tus prompts exclusivos y herramientas de IA avanzada.</p>
        
        <button 
          onClick={handleLogin}
          className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-4 hover:bg-cyan-400 hover:text-white transition-all duration-300 group shadow-xl"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" className="w-6 h-6" />
          Continuar con Google
        </button>
        
        <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-center gap-6 opacity-50">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <Zap size={12} /> Fast Auth
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck size={12} /> Secure
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
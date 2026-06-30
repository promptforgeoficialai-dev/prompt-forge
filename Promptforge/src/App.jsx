import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// COMPONENTES UI
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// PÁGINAS
import Home from './pages/home';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

// PROTECCIÓN DE RUTAS
const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="h-screen bg-[#020617] flex items-center justify-center"><div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/" />;
  return children;
};

// FONDO
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-50 bg-[#020617] overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen text-slate-200 font-sans selection:bg-purple-500/30">
          <GlobalBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/market" element={<Marketplace />} />
            <Route path="/dashboard" element={<PrivateRoute><div className="flex"><Sidebar /><Dashboard /></div></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute adminOnly><AdminPanel /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <footer className="py-12 border-t border-white/5 text-center bg-black/20 backdrop-blur-sm">
            <div className="text-xl font-black tracking-tighter mb-4 text-white">PROMFORGE</div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 Todos los derechos reservados</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
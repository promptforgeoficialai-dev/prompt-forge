import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// --- COMPONENTES QUE YA TIENES EN TU CARPETA ---
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// --- PÁGINAS (Debes crearlas en src/pages/ o usar placeholders) ---
// Nota: Si aún no creas estos archivos, puedes definirlos rápido abajo.
import Home from './pages/Home';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

// --- COMPONENTE PARA PROTEGER RUTAS ---
// Evita que usuarios no logueados entren a secciones privadas
const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) return (
    <div className="h-screen bg-[#020617] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!user) return <Navigate to="/login" />;

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

// --- FONDO ANIMADO PREMIUM (ESTILO VERCEL/STRIPE) ---
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-50 bg-[#020617] overflow-hidden">
    {/* Luces de fondo movibles */}
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
    {/* Efecto de ruido/grano para textura profesional */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen text-slate-200 font-sans">
          <GlobalBackground />
          
          {/* El Navbar siempre visible */}
          <Navbar />

          <div className="flex">
            {/* El Sidebar solo se mostrará en ciertas rutas si lo deseas, 
                o puedes dejarlo fijo si es una App tipo Dashboard */}
            
            <main className="flex-1">
              <Routes>
                {/* RUTAS PÚBLICAS */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/market" element={<Marketplace />} />

                {/* RUTAS PRIVADAS (USUARIOS LOGUEADOS) */}
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute>
                      <div className="flex">
                        <Sidebar /> {/* Aquí usamos tu componente Sidebar */}
                        <Dashboard />
                      </div>
                    </PrivateRoute>
                  } 
                />

                {/* RUTA DE ADMINISTRADOR */}
                <Route 
                  path="/admin" 
                  element={
                    <PrivateRoute adminOnly>
                      <AdminPanel />
                    </PrivateRoute>
                  } 
                />

                {/* REDIRECCIÓN POR DEFECTO */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>

          {/* FOOTER OPCIONAL */}
          <footer className="py-10 text-center text-slate-600 text-xs border-t border-white/5">
            © 2024 PROMFORGE - Todos los derechos reservados.
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
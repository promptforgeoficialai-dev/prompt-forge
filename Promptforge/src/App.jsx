import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// COMPONENTES UI
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// PÁGINAS (Asegúrate de que los archivos existan en src/pages)
import Home from './pages/home'; 
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

// COMPONENTE DE PROTECCIÓN
const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="h-screen bg-[#020617] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user?.role !== 'admin') return <Navigate to="/" />;
  return children;
};

// FONDO DINÁMICO ESTILO VERCEL
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-50 bg-[#020617] overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
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
            
            {/* RUTAS PRIVADAS */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <div className="flex">
                  <Sidebar />
                  <Dashboard />
                </div>
              </PrivateRoute>
            } />

            <Route path="/admin" element={
              <PrivateRoute adminOnly={true}>
                <AdminPanel />
              </PrivateRoute>
            } />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
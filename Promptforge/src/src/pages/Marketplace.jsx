import React, { useState, useEffect } from 'react';
import { promptService } from '../services/promptService';
import PromptCard from '../components/PromptCard';
import { Search } from 'lucide-react';

const Marketplace = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      const data = await promptService.getPrompts();
      setPrompts(data);
      setLoading(false);
    };
    fetchPrompts();
  }, []);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-4">MERCADO PRO</h1>
            <p className="text-slate-500 font-medium">Prompts verificados por la comunidad de PromForge.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar prompts..." 
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-purple-500 transition-all"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => <div key={i} className="h-80 bg-white/5 animate-pulse rounded-[2.5rem]" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prompts.map(p => <PromptCard key={p.id} prompt={p} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
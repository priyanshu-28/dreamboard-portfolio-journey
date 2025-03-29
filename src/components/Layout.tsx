
import React from 'react';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.className = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <button 
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed right-4 top-4 z-50 p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-primary/20 transition-all"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <main className="relative overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;


import React from 'react';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark

  useEffect(() => {
    // Initialize with dark mode
    setTheme('dark');
    document.documentElement.className = 'dark';
    localStorage.setItem('theme', 'dark');

    // But check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-comic">
      <Button 
        variant="outline"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed right-4 top-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary/20 transition-all comic-button h-10 w-10 flex items-center justify-center"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
      <main className="relative overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;

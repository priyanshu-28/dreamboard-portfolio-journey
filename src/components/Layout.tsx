
import React from 'react';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { HiddenExperiences, HiddenClickArea } from './HiddenExperiences';
import { useToast } from "@/hooks/use-toast";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark
  const { toast } = useToast();
  const [isRainbowMode, setIsRainbowMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      // Set dark as default
      setTheme('dark');
      document.documentElement.className = 'dark';
      localStorage.setItem('theme', 'dark');
    }
    
    // Hidden Experience: Double-press 'r' for rainbow mode
    let lastKeyTime = 0;
    let lastKey = '';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentTime = new Date().getTime();
      if (e.key === 'r' && lastKey === 'r' && currentTime - lastKeyTime < 500) {
        setIsRainbowMode(prev => !prev);
        if (!isRainbowMode) {
          toast({
            title: "🌈 Rainbow Mode Activated!",
            description: "Double-press 'r' again to deactivate",
          });
        }
      }
      lastKey = e.key;
      lastKeyTime = currentTime;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRainbowMode, toast]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`min-h-screen bg-background text-foreground ${isRainbowMode ? 'rainbow-transition' : ''}`}>
      <button 
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed right-4 top-4 z-50 p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-primary/20 transition-all"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      
      {/* Hidden element - clicking the corner */}
      <HiddenClickArea 
        id="corner-secret"
        className="fixed top-0 left-0 w-16 h-16 z-40" 
        onClick={() => {
          toast({
            title: "You found a secret corner!",
            description: "There are more hidden elements to discover!",
          });
        }}
      />
      
      <main className="relative overflow-x-hidden">
        <HiddenExperiences />
        <div 
          className={`fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-20 ${theme === 'dark' ? 'opacity-10' : 'opacity-5'}`}
          style={{ 
            backgroundImage: 'url(/lovable-uploads/4fde4276-1eec-40f3-ac72-c3e22679c614.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'contain'
          }}
        />
        {children}
      </main>
    </div>
  );
};

export default Layout;

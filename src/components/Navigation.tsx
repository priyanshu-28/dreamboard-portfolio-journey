
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
  ];
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: id === 'home' ? 0 : element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-center items-center">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 mx-2 px-4 py-2 rounded-full transition-all ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
      
      {/* Mobile Menu */}
      <motion.div 
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
        <motion.div 
          className="absolute bottom-20 right-6 flex flex-col gap-2 items-end"
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: mobileMenuOpen ? 0 : 50, 
            opacity: mobileMenuOpen ? 1 : 0,
            transition: { 
              staggerChildren: 0.05,
              staggerDirection: mobileMenuOpen ? 1 : -1
            }
          }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                activeSection === item.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/80 text-secondary-foreground'
              }`}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.label}</span>
              {item.icon}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;

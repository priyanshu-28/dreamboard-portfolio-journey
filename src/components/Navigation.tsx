
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { when: "beforeChildren", staggerChildren: 0.05 } }
  };
  
  const handleDoubleClick = () => {
    // Show a hint about the marvel secret
    toast({
      title: "Secret Hint",
      description: "Try typing 'marvel' anywhere on the page for a special effect!",
    });
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-8",
          isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-md" : "py-4"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.span 
            className={cn(
              "text-lg font-bold",
              isScrolled ? "text-foreground" : "text-foreground"
            )}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onDoubleClick={handleDoubleClick}
          >
            Priyanshu Pathak
          </motion.span>

          <div className="hidden md:flex items-center space-x-6">
            {items.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className={cn(
                  "text-sm font-medium relative hover:text-primary transition-colors",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 origin-left transition-transform hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={toggleMenu}
            className="block md:hidden text-foreground p-1 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div 
        className="fixed inset-0 z-50 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <motion.div className="absolute right-0 top-0 bottom-0 w-64 bg-card shadow-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <motion.p 
              className="text-lg font-bold"
              variants={itemVariants}
            >
              Menu
            </motion.p>
            <motion.button 
              onClick={() => setIsOpen(false)}
              variants={itemVariants}
            >
              <X size={24} />
            </motion.button>
          </div>
          <div className="flex flex-col space-y-4">
            {items.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="text-foreground hover:text-primary py-2 border-b border-border/50"
                variants={itemVariants}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;

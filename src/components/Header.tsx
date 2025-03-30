
import React from 'react';
import { motion } from 'framer-motion';
import SparkButton from './SparkButton';

const Header: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-full opacity-20 bg-comic-pattern bg-[size:30px_30px]"></div>
      </motion.div>
      
      <motion.div
        className="container relative z-10 flex flex-col items-center max-w-4xl gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="hero-name-hover text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Priyanshu Pathak
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
          Software Engineer & Developer
        </h2>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground/70 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building impactful solutions through elegant code. Experienced in full-stack development, 
          competitive programming, and creating efficient software systems.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SparkButton href="mailto:contact@priyanshupathak.com" className="bg-marvel-red hover:bg-marvel-red/80">
            Get In Touch
          </SparkButton>
          
          <SparkButton href="#projects" variant="outline" className="border-2 border-marvel-red text-foreground hover:bg-marvel-red/20">
            View Projects
          </SparkButton>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-foreground/50"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SparkButton from './SparkButton';
import CodeBlock from './CodeBlock';

const Header: React.FC = () => {
  const [showCode, setShowCode] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 3500); // Match the typing animation duration
    
    return () => clearTimeout(timer);
  }, []);

  const cppCodeSample = `#include <iostream>
#include <vector>

// Competitive programming solution
int solve() {
  int n;
  std::cin >> n;
  std::vector<int> a(n);
  for (int i = 0; i < n; i++) {
    std::cin >> a[i];
  }
  // Find optimal solution
  return result;
}`;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-hero-pattern pt-16">
      <div className="absolute inset-0 bg-tech-grid bg-[length:50px_50px] opacity-10 pointer-events-none"></div>
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Priyanshu Pathak
            </motion.h1>
            
            <div className="h-8 mb-6">
              {typingComplete ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="gradient-text font-semibold text-xl">Software Engineer & Competitive Programmer</span>
                </motion.div>
              ) : (
                <div className="typing-animation text-xl font-semibold w-full">
                  Software Engineer & Competitive Programmer
                </div>
              )}
            </div>
            
            <motion.p 
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Building high-performance software solutions and crushing competitive programming challenges.
              Top 50 in India at CodeForces and leading engineering teams to deliver impactful projects.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <SparkButton 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => window.scrollTo({ top: document.getElementById('experience')?.offsetTop, behavior: 'smooth' })}
              >
                View Experience
              </SparkButton>
              
              <SparkButton 
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? 'Hide Code' : 'Show Some Code'}
              </SparkButton>
            </motion.div>
          </div>
          
          <motion.div 
            className="perspective-text"
            initial={{ opacity: 0, rotateY: 30 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {showCode ? (
              <div className="animate-float">
                <CodeBlock language="cpp">
                  {cppCodeSample}
                </CodeBlock>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 rounded-lg transform -rotate-3 z-0"></div>
                <div className="glass-card p-6 z-10 relative transform rotate-3 animate-float">
                  <h3 className="text-xl font-bold mb-4">Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-tech-purple">•</span> 
                      2169 (Master) Top 50 in India at CodeForces
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-tech-blue">•</span>
                      Global Rank 9 in Codeforces Round 987
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-tech-cyan">•</span>
                      4 Times ACM ICPC Regionalist
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-tech-green">•</span>
                      Achieved 75% reduction in manual intervention
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <SparkButton 
          onClick={() => window.scrollTo({ top: document.getElementById('experience')?.offsetTop, behavior: 'smooth' })}
          className="bg-background/50 backdrop-blur-sm p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </SparkButton>
      </div>
    </div>
  );
};

export default Header;

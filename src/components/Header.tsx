
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SparkButton from './SparkButton';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Header: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 3500); // Match the typing animation duration

    return () => clearTimeout(timer);
  }, []);

  // Top 4 highlights to display
  const highlights = [
    { text: " Ultimate Team Award, Zeta: Delivered 7 projects in 3 months with a 2-engineer team, demonstrating speed and hardwork.", color: "text-ghibli-green" },
    { text: "2169 (Master) Top 50 in India at CodeForces", color: "text-ghibli-blue" },
    { text: "Winner at ETHIndia Hackathon 2023 under the 'Best use of dApp Launchpad' track by Polygon Labs", color: "text-ghibli-red" },
    { text: "4 Times ACM ICPC Regionalist", color: "text-ghibli-brown" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center ghibli-bg pt-16">
      <div className="absolute inset-0 bg-tech-grid bg-[length:50px_50px] opacity-10 pointer-events-none"></div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <HoverCard>
              <HoverCardTrigger>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4 relative inline-block cursor-pointer font-comic hover:text-ghibli-blue transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Priyanshu Pathak
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-ghibli-blue"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h1>
              </HoverCardTrigger>
              <HoverCardContent className="comic-card w-80">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold font-comic">Priyanshu Pathak</h3>
                  <p className="text-sm text-muted-foreground font-comic">Software Engineer & Competitive Programmer</p>
                  <div className="h-1 w-full bg-gradient-to-r from-ghibli-blue to-ghibli-green my-1"></div>
                  <p className="text-xs font-comic">SWE at Zeta & Top 50 in India at CodeForces with a rating of 2169</p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <div className="h-8 mb-6">
              {typingComplete ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-comic font-semibold text-xl text-ghibli-blue">Software Engineer & Competitive Programmer</span>
                </motion.div>
              ) : (
                <div className="typing-animation text-xl font-semibold font-comic w-full text-ghibli-blue">
                  Software Engineer & Competitive Programmer
                </div>
              )}
            </div>

            <motion.p
              className="text-muted-foreground mb-8 font-comic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              A chill guy, building high-performance software solutions, and doing competitive programming in free time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <SparkButton
                className="comic-button font-comic hover:bg-ghibli-blue"
                onClick={() => window.scrollTo({ top: document.getElementById('experience')?.offsetTop, behavior: 'smooth' })}
              >
                Explore My Work
              </SparkButton>
            </motion.div>
          </div>

          <motion.div
            className="perspective-text"
            initial={{ opacity: 0, rotateY: 30 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ghibli-blue/20 to-ghibli-green/20 rounded-lg transform -rotate-3 z-0"></div>
              <div className="comic-card p-6 z-10 relative transform rotate-3 animate-float">
                <h3 className="text-xl font-bold mb-4 font-comic">Highlights</h3>
                <ul className="space-y-2 font-comic">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`mr-2 ${highlight.color}`}>•</span>
                      {highlight.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

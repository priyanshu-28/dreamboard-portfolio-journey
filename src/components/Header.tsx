
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SparkButton from './SparkButton';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useToast } from "@/hooks/use-toast";

interface SparkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
  href?: string;
}

const Header: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [nameClickCount, setNameClickCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 3500); // Match the typing animation duration

    return () => clearTimeout(timer);
  }, []);

  // Top 4 highlights to display
  const highlights = [
    { text: " Ultimate Team Award, Zeta: Delivered 7 projects in 3 months with a 2-engineer team, demonstrating speed and hardwork.", color: "text-tech-green" },
    { text: "2169 (Master) Top 50 in India at CodeForces", color: "text-tech-purple" },
    { text: "Winner at ETHIndia Hackathon 2023 under the 'Best use of dApp Launchpad' track by Polygon Labs", color: "text-tech-blue" },
    { text: "4 Times ACM ICPC Regionalist", color: "text-tech-cyan" }
  ];

  const handleNameClick = () => {
    setNameClickCount(prev => prev + 1);
    
    if (nameClickCount === 4) {
      toast({
        title: "Easter Egg Unlocked!",
        description: "Wow, you really like clicking my name! Here's a secret: try the Konami code (↑↑↓↓←→←→BA)",
        className: "border-green-500"
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-hero-pattern pt-16">
      <div className="absolute inset-0 bg-tech-grid bg-[length:50px_50px] opacity-10 pointer-events-none"></div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(65, 157, 120, 0.08) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(235, 186, 91, 0.05) 0%, transparent 40%)',
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <HoverCard>
              <HoverCardTrigger>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4 relative inline-block cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    color: "rgba(65, 157, 120, 1)",
                    transition: { duration: 0.2 }
                  }}
                  onClick={handleNameClick}
                >
                  Priyanshu Pathak
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tech-green to-tech-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </motion.h1>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-card/90 backdrop-blur-sm border border-accent/20">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold">Priyanshu Pathak</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer & Competitive Programmer</p>
                  <div className="h-0.5 w-full bg-gradient-to-r from-accent to-primary/50 my-1"></div>
                  <p className="text-xs">SWE at Zeta & Top 50 in India at CodeForces with a rating of 2169</p>
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
                  <span className="gradient-text font-semibold text-xl">Software Engineer & Competitive Programmer</span>
                </motion.div>
              ) : (
                <div className="typing-animation text-xl font-semibold w-full">
                  Software Engineer & Competitive Programmer
                </div>
              )}
            </div>

            <motion.p
              className="text-muted-foreground mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              A chill guy, building high-performance software solutions, and doing competitive programming in free time. Always looking through the window for inspiration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <SparkButton
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
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
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#419d78]/20 to-[#ebba5b]/20 rounded-lg transform -rotate-3 z-0"></div>
              <div className="glass-card p-6 z-10 relative transform rotate-3 animate-float">
                <h3 className="text-xl font-bold mb-4">Highlights</h3>
                <ul className="space-y-2">
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

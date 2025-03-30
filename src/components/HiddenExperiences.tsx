import { useState, useEffect, useCallback } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

// Counter for tracking various interactions
const useInteractionCounter = (threshold: number, onThresholdReached: () => void) => {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(prev => {
      const newCount = prev + 1;
      if (newCount === threshold) {
        onThresholdReached();
      }
      return newCount;
    });
  }, [threshold, onThresholdReached]);
  
  return { count, increment };
};

export const HiddenExperiences = () => {
  const { toast } = useToast();
  const [konami, setKonami] = useState<string[]>([]);
  const [secretWindow, setSecretWindow] = useState(false);
  const [foundSecrets, setFoundSecrets] = useState<string[]>([]);
  
  // #1: Konami Code Easter Egg
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  // #2: Click counter
  const { increment: incrementClicks } = useInteractionCounter(15, () => {
    if (!foundSecrets.includes('clicks')) {
      toast({
        title: "You're Clicking A Lot!",
        description: "Are you trying to break the website? 😂",
      });
      setFoundSecrets(prev => [...prev, 'clicks']);
    }
  });
  
  // #3: Scroll tracker
  const { increment: incrementScrolls } = useInteractionCounter(25, () => {
    if (!foundSecrets.includes('scroll')) {
      toast({
        title: "Scrolling Enthusiast!",
        description: "You've discovered the scroll secret! Keep exploring!",
        variant: "default",
      });
      setFoundSecrets(prev => [...prev, 'scroll']);
    }
  });

  // Handle keyboard input for Konami code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key];
      
      // Keep only the last N keys pressed where N is the length of the konami code
      if (newKonami.length > konamiCode.length) {
        newKonami.shift();
      }
      
      setKonami(newKonami);
      
      // Check if user has entered the konami code
      if (newKonami.join(',') === konamiCode.join(',') && !foundSecrets.includes('konami')) {
        toast({
          title: "⭐ KONAMI CODE ACTIVATED! ⭐",
          description: "You've unlocked developer mode! (Not really, but nice work finding this!)",
          variant: "destructive",
          duration: 5000,
        });
        setFoundSecrets(prev => [...prev, 'konami']);
        
        // Temporarily show something cool
        document.body.style.transition = "all 0.5s";
        document.body.style.filter = "invert(1)";
        
        setTimeout(() => {
          document.body.style.filter = "";
        }, 2000);
      }
    };
    
    const handleScroll = () => {
      incrementScrolls();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [konami, konamiCode, incrementScrolls, foundSecrets, toast]);
  
  // #4: Track document clicks
  useEffect(() => {
    const handleDocumentClick = () => {
      incrementClicks();
    };
    
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [incrementClicks]);
  
  // #5: Secret message when user stays for a while
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!foundSecrets.includes('patience')) {
        toast({
          title: "Patience Rewarded!",
          description: "You've been here for a while. Thanks for spending time with my portfolio!",
          className: "bg-amber-500/80 text-white",
        });
        setFoundSecrets(prev => [...prev, 'patience']);
      }
    }, 120000); // 2 minutes
    
    return () => clearTimeout(timer);
  }, [toast, foundSecrets]);

  return secretWindow ? (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={() => setSecretWindow(false)}
    >
      <div className="bg-card p-6 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">You found the secret window!</h2>
        <p>This is a hidden feature of the site. There are {5 - foundSecrets.length} more secrets to find!</p>
        <button 
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded"
          onClick={(e) => {
            e.stopPropagation();
            setSecretWindow(false);
          }}
        >
          Close
        </button>
      </div>
    </motion.div>
  ) : null;
};

// Helper component for hidden clickable areas
export const HiddenClickArea = ({ id, className, onClick }: { id: string, className: string, onClick: () => void }) => {
  const [found, setFound] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!found) {
      setFound(true);
      onClick();
    }
  };
  
  return (
    <div 
      data-hidden-area={id}
      className={`${className} cursor-default`}
      onClick={handleClick}
    />
  );
};

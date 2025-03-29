import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SparkButton from './SparkButton';
import { 
  Code2, 
  Server, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Settings, 
  Palette
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool';
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [filter, setFilter] = useState<'all' | 'language' | 'framework' | 'tool'>('all');
  
  const getFilterClass = (category: string) => {
    if (filter === 'all') return '';
    return filter === category ? '' : 'opacity-30 scale-95';
  };
    
  const getSkillIcon = (name: string) => {
    const iconProps = { size: 24, className: "text-accent group-hover:text-primary" };
    
    switch(name.toLowerCase()) {
      case 'c++':
        return <Code2 {...iconProps} />;
      case 'python':
        return <Terminal {...iconProps} />;
      case 'javascript':
        return <Globe {...iconProps} />;
      case 'reactjs':
        return <Layers {...iconProps} />;
      case 'nodejs':
        return <Server {...iconProps} />;
      case 'express':
        return <Server {...iconProps} />;
      case 'postgresql':
        return <Database {...iconProps} />;
      case 'git/github':
        return <Code2 {...iconProps} />;
      case 'svelte':
        return <Cpu {...iconProps} />;
      case 'golang':
        return <Globe {...iconProps} />;
      case 'haskell':
        return <Terminal {...iconProps} />;
      case 'java':
        return <Cpu {...iconProps} />;
      case 'html/css':
        return <Palette {...iconProps} />;
      case 'latex':
        return <Code2 {...iconProps} />;
      case 'matlab':
        return <Settings {...iconProps} />;
      case 'bash':
        return <Terminal {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="py-8">
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <SparkButton 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        >
          All Skills
        </SparkButton>
        <SparkButton 
          onClick={() => setFilter('language')}
          className={`px-4 py-2 rounded-full text-sm ${filter === 'language' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        >
          Languages
        </SparkButton>
        <SparkButton 
          onClick={() => setFilter('framework')}
          className={`px-4 py-2 rounded-full text-sm ${filter === 'framework' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        >
          Frameworks
        </SparkButton>
        <SparkButton 
          onClick={() => setFilter('tool')}
          className={`px-4 py-2 rounded-full text-sm ${filter === 'tool' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        >
          Tools
        </SparkButton>
      </div>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className={`group transition-all duration-300 ${getFilterClass(skill.category)}`}
          >
            <div className="bg-card rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full group-hover:bg-accent/5 group-hover:-translate-y-1">
              <div className="p-3 bg-accent/10 rounded-full transition-all duration-300 group-hover:bg-accent/20">
                {getSkillIcon(skill.name)}
              </div>
              <h3 className="font-medium text-center text-sm">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;

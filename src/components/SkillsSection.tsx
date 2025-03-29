
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import SparkButton from './SparkButton';

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
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
    
  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-tech-purple hover:bg-tech-purple/80';
    if (level >= 60) return 'bg-tech-blue hover:bg-tech-blue/80';
    if (level >= 40) return 'bg-tech-cyan hover:bg-tech-cyan/80';
    return 'bg-tech-green hover:bg-tech-green/80';
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
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="bg-card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{skill.name}</h3>
              <Badge className={getSkillColor(skill.level)}>
                {skill.level}%
              </Badge>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getSkillColor(skill.level)}`} 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

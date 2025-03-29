
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'award' | 'medal' | 'star';
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="h-8 w-8 text-tech-yellow" />;
      case 'award':
        return <Award className="h-8 w-8 text-tech-cyan" />;
      case 'medal':
        return <Medal className="h-8 w-8 text-tech-purple" />;
      case 'star':
        return <Star className="h-8 w-8 text-tech-blue" />;
      default:
        return <Trophy className="h-8 w-8 text-tech-yellow" />;
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {achievements.map((achievement, index) => (
        <motion.div key={index} variants={item}>
          <Card className="border-t-4 border-t-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <div className="bg-accent/10 p-2 rounded-full">
                  {getIcon(achievement.icon)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{achievement.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AchievementsSection;

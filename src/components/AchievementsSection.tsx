
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Medal, Star } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'award' | 'medal' | 'star';
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const achievementElements = achievementsRef.current?.querySelectorAll('.achievement-card');
    achievementElements?.forEach((el) => observer.observe(el));

    return () => {
      if (achievementElements) {
        achievementElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [achievements]);

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
    <div ref={achievementsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => (
        <Card 
          key={index} 
          className="achievement-card opacity-0 transition-all duration-500 ease-out border-t-4 border-t-accent hover:shadow-lg"
        >
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
      ))}
    </div>
  );
};

export default AchievementsSection;

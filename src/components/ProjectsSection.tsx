
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SparkButton from './SparkButton';

interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="card-hover">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{project.title}</span>
              <span className="text-sm font-normal text-muted-foreground">{project.date}</span>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <Badge key={i} variant="outline" className="bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <SparkButton className="text-sm text-primary hover:text-accent transition-colors">
              Learn more
            </SparkButton>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsSection;

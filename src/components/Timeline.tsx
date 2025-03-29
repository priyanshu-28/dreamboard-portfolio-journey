
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, date, description }) => {
  return (
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-background bg-accent">
        <span className="w-3 h-3 bg-white rounded-full"></span>
      </span>
      <Card className="card-hover">
        <CardContent className="p-5">
          <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{date}</time>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mb-4 text-base font-normal text-muted-foreground">{subtitle}</p>
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-foreground">• {item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ol className="relative border-l border-muted ml-3">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </ol>
  );
};

export default Timeline;

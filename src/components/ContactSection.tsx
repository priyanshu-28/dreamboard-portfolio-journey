
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import SparkButton from './SparkButton';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6 pb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:priyanshu.pt.28@gmail.com"
              className="flex items-center p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors"
            >
              <div className="mr-4 bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">priyanshu.pt.28@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918849726226"
              className="flex items-center p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors"
            >
              <div className="mr-4 bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 8849726226</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://github.com/priyanshu-28" target="_blank" rel="noopener noreferrer">
              <SparkButton className="bg-background p-3 rounded-full hover:bg-secondary/50 transition-colors">
                <Github className="h-5 w-5" />
              </SparkButton>
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-p/" target="_blank" rel="noopener noreferrer">
              <SparkButton className="bg-background p-3 rounded-full hover:bg-secondary/50 transition-colors">
                <Linkedin className="h-5 w-5" />
              </SparkButton>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;

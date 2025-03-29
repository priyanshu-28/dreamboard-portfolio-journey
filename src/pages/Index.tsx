import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import MouseEffect from '@/components/MouseEffect';
import { motion } from 'framer-motion';

// Experience data
const experienceData = [
  {
    title: "Software Engineer",
    subtitle: "Zeta",
    date: "Jul 2024 - Present",
    description: [
      "Developed internal platforms using VueJS, NodeJS and performed cross collaboration with teams across the organization, that resulted in increased productivity of engineers by 20%",
      "Responsible for $100k cost reduction by building in-house tools and automated systems, optimizing workflows using AI Agents, and minimizing reliance on third-party services",
      "Created and integrated Blog-in, Discourse-App to Microsoft Teams Chat, to enhance user experience, and boost productivity",
      "Built an AI-powered chatbot using large language models, and low-code platform, serving 200k+ users, reducing manual intervention by 75%, and processing 500k+ queries monthly, resulting in improved user satisfaction and engagement"
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Juspay",
    date: "Feb 2024 - Jul 2024",
    description: [
      "Responsible for improving user-retention to 40% by shipping features using Svelte, utilized by 350+ companies, for Breeze checkout page",
      "Automated the testing flow and enhanced the product experience by 67% using Haskell"
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Oblivious",
    date: "Jun 2023 - Dec 2023",
    description: [
      "Collaborated with the Chief Technology Officer to orchestrate a 30% cost reduction in product development, using Large Language Models for enhanced efficiency and productivity",
      "Executed data extraction of 1 million+ privacy policies using Beautiful Soup for research oriented analysis",
      "Evaluated private LLM model precision using Pinecone(VectorDB) and OpenAI, ensuring high accuracy metrics for our MVP",
      "Developed and implemented advanced algorithms and libraries in Python for our private environment, 'Antigranular,' a product designed to educate users on the concept of differential privacy"
    ],
  },
];

// Education data
const educationData = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    subtitle: "School of Engineering and Applied Science, Ahmedabad University",
    date: "Aug 2020 - May 2024",
    description: ["GPA: 3.22/4.00"],
  }
];

// Skills data
const skillsData = [
  { name: "C++", level: 95, category: "language" as const },
  { name: "Python", level: 90, category: "language" as const },
  { name: "JavaScript", level: 85, category: "language" as const },
  { name: "Golang", level: 80, category: "language" as const },
  { name: "Svelte", level: 75, category: "framework" as const },
  { name: "Haskell", level: 70, category: "language" as const },
  { name: "Java", level: 65, category: "language" as const },
  { name: "HTML/CSS", level: 80, category: "language" as const },
  { name: "ReactJS", level: 80, category: "framework" as const },
  { name: "NodeJS", level: 85, category: "framework" as const },
  { name: "Express", level: 75, category: "framework" as const },
  { name: "PostgreSQL", level: 70, category: "language" as const },
  { name: "Git/GitHub", level: 85, category: "tool" as const },
  { name: "LaTeX", level: 70, category: "tool" as const },
  { name: "MATLAB", level: 60, category: "tool" as const },
  { name: "Bash", level: 65, category: "language" as const },
];

// Projects data
const projectsData = [
  {
    title: "Distributed Task Scheduler",
    description: "Scalable distributed task scheduler leveraging Ansible to optimize task execution, improve resource allocation, and ensure isolation across interconnected machines with KVM.",
    tech: ["Ansible", "KVM", "Distributed Systems"],
    date: "December 2024"
  },
  {
    title: "CanteenSync",
    description: "High-performance caching layer using Redis streams for a WebApp catering to small restaurants and dining outlets, optimizing access to frequently used data.",
    tech: ["HTML", "CSS", "JavaScript", "NodeJS", "PostgreSQL", "Express", "Redis"],
    date: "April 2023"
  }
];

// Achievements data
const achievementsData = [
  {
    title: "Master at CodeForces",
    description: "2169 rating, Top 50 in India at CodeForces and 2154 (5 stars) at CodeChef",
    icon: "star" as const
  },
  {
    title: "Global Rank 9",
    description: "India Rank 2 in Codeforces Round 987 (Div. 2)",
    icon: "medal" as const
  },
  {
    title: "Ultimate Team Award",
    description: "Delivered 7 projects in 3 months with a 2-engineer team at Zeta, demonstrating speed and hardwork.",
    icon: "trophy" as const
  },
  {
    title: "ACM ICPC Regionalist",
    description: "4 Times ACM ICPC Regionalist from 2021- 2024",
    icon: "trophy" as const
  },
  {
    title: "LeetCode Contest 400",
    description: "India Rank 7, and Global Rank 67 in LeetCode Weekly Contest 400",
    icon: "medal" as const
  },
  {
    title: "ETHIndia Hackathon Winner",
    description: "Winner at ETHIndia Hackathon 2023 under the 'Best use of dApp Launchpad' track by Polygon Labs",
    icon: "award" as const
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const Index: React.FC = () => {
  return (
    <Layout>
      <MouseEffect />
      <Navigation />

      <section id="home">
        <Header />
      </section>

      <motion.section
        id="experience"
        className="py-20 px-4 bg-background section-transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-glow-animation">Experience</h2>
          <Timeline items={experienceData} />
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="py-20 px-4 bg-secondary/30 section-transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-glow-animation">Education</h2>
          <Timeline items={educationData} />
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="py-20 px-4 bg-background section-transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-glow-animation">Skills</h2>
          <SkillsSection skills={skillsData} />
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 px-4 bg-secondary/30 section-transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-glow-animation">Projects</h2>
          <ProjectsSection projects={projectsData} />
        </div>
      </motion.section>

      <motion.section
        id="achievements"
        className="py-20 px-4 bg-background section-transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-glow-animation">Achievements</h2>
          <AchievementsSection achievements={achievementsData} />
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 px-4 bg-secondary/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-glow-animation">Contact</h2>
          <ContactSection />
        </div>
      </motion.section>

      <footer className="py-6 px-4 bg-background text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Priyanshu Pathak. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Index;

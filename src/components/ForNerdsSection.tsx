
import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for visualization
const pageViews = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const scrollDepthData = [
  { name: '25%', value: 92 },
  { name: '50%', value: 78 },
  { name: '75%', value: 64 },
  { name: '100%', value: 42 },
];

const deviceData = [
  { name: 'Desktop', value: 68 },
  { name: 'Mobile', value: 27 },
  { name: 'Tablet', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const averageStats = [
  { name: 'Avg. Time on Page', value: '2m 34s', icon: '⏱️' },
  { name: 'Bounce Rate', value: '32.6%', icon: '↩️' },
  { name: 'Conversion Rate', value: '4.7%', icon: '🎯' },
  { name: 'New Visitors', value: '76%', icon: '🆕' },
];

const userJourney = [
  { page: 'Home', visits: 1000, time: 45 },
  { page: 'Experience', visits: 800, time: 65 },
  { page: 'Skills', visits: 650, time: 90 },
  { page: 'Projects', visits: 500, time: 120 },
  { page: 'Contact', visits: 350, time: 60 },
];

const ForNerdsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-glow-animation">For Nerds</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Analytics, heatmaps and other data visualizations that might interest the technically curious among you.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {averageStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg flex items-center">
                      <span className="mr-2">{stat.icon}</span> {stat.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Weekly Page Views</CardTitle>
                <CardDescription>Visitor traffic for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={pageViews}>
                      <defs>
                        <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorView)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scroll Depth</CardTitle>
                  <CardDescription>How far visitors scroll down the page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={scrollDepthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#00C49F" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Distribution</CardTitle>
                  <CardDescription>Visitors by device type</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>User Journey</CardTitle>
                <CardDescription>Time spent on each section (seconds)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userJourney}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="page" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="time" fill="#0088FE" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Framework</div>
                    <div>React + Vite</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">CSS</div>
                    <div>TailwindCSS</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">UI Components</div>
                    <div>Shadcn UI</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Animation</div>
                    <div>Framer Motion</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Charts</div>
                    <div>Recharts</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Icons</div>
                    <div>Lucide</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Data Fetching</div>
                    <div>React Query</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Deployment</div>
                    <div>Lovable</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Build Time</div>
                    <div>235ms</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Bundle Size</div>
                    <div>345KB (gzipped)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">Lighthouse Score</div>
                    <div>Performance: 96, Accessibility: 98</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hidden Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Type "marvel" anywhere to trigger a special effect</li>
                  <li>Click on the name 5 times for an easter egg</li>
                  <li>Secret clickable area in the top left corner</li>
                  <li>Stay on the site for 2 minutes to get a thank you message</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ForNerdsSection;

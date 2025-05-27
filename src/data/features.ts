import { BarChart2, Video, Pencil, Rocket, BrainCircuit, Database, Globe, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureData {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export const featuresData: FeatureData[] = [
  {
    icon: BarChart2,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with advanced AI analysis and visualization tools.",
    iconColor: "bg-blue-500",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Create professional videos effortlessly with AI-powered editing, captions, and enhancements.",
    iconColor: "bg-purple-500",
  },
  {
    icon: Pencil,
    title: "Content Creation",
    description: "Generate high-quality articles, social posts, and marketing copy tailored to your brand voice.",
    iconColor: "bg-pink-500",
  },
  {
    icon: Rocket,
    title: "Automation",
    description: "Streamline workflows and eliminate repetitive tasks with intelligent process automation.",
    iconColor: "bg-orange-500",
  },
  {
    icon: BrainCircuit,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI-powered predictive models.",
    iconColor: "bg-green-500",
  },
  {
    icon: Database,
    title: "Smart Data Storage",
    description: "Organize and access your data efficiently with AI-enhanced search and classification.",
    iconColor: "bg-yellow-500",
  },
  {
    icon: Globe,
    title: "Translation",
    description: "Break language barriers with real-time, accurate translations for content and communications.",
    iconColor: "bg-indigo-500",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Deploy intelligent conversational agents for customer support and engagement.",
    iconColor: "bg-teal-500",
  },
];
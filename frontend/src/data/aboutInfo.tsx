import { Education, Experience, SkillCategory } from "../types";
import { Code, Server, Layout, Shield } from "lucide-react";

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "California State University, Fullerton",
    duration: "2022 - 2024",
    description: "Focus on Frontend and Backend full-stack development.",
  },
];

export const experience: Experience[] = [
  {
    position: "Administrative Manager",
    company: "Kaizen Dining Group Inc.",
    duration: "2025 - Present",
    description: [
      "Diagnosed and resolved an e-Gift card purchasing issue by identifying a payment gateway failure and successfully re-establishing online transaction functionality.",
      "Took initiative to design and launch a full-featured website for a newly opened restaurant using Wix Studio, improving brand presence and customer accessibility.",
      "Continuously maintain and update websites for multiple restaurant locations, ensuring content accuracy, SEO optimization, and a consistent user experience.",
      "Developed a Python script to extract payroll data from HTML files and populate PDF forms, significantly reducing manual effort and human error."
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout className="w-8 h-8 text-blue-500 mb-2" />,
    skills: [
      { name: "JavaScript", level: 95, category: "frontend" },
      { name: "React", level: 85, category: "frontend" },
      { name: "CSS/SCSS", level: 80, category: "frontend" },
      { name: "Next.js", level: 75, category: "frontend" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-8 h-8 text-green-500 mb-2" />,
    skills: [
      { name: "Node.js", level: 85, category: "backend" },
      { name: "Express", level: 80, category: "backend" },
      { name: "MongoDB", level: 75, category: "backend" },
      { name: "PostgreSQL", level: 70, category: "backend" },
    ],
  },
  {
    name: "Languages",
    icon: <Code className="w-8 h-8 text-purple-500 mb-2" />,
    skills: [
      { name: "JavaScript", level: 95, category: "other" },
      { name: "C++", level: 80, category: "other" },
      { name: "Python", level: 70, category: "other" },
      { name: "C#", level: 65, category: "other" },
    ],
  },
  {
    name: "DevOps",
    icon: <Shield className="w-8 h-8 text-orange-500 mb-2" />,
    skills: [
      { name: "Git", level: 90, category: "other" },
      { name: "Docker", level: 75, category: "other" },
    ],
  },
];

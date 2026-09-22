import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", badge: "Core Technology", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", badge: "Core Technology", color: "#F7DF1E" },
      { name: "Tailwind CSS", badge: "Used in Projects", color: "#38BDF8" },
      { name: "HTML5", badge: "Core Technology", color: "#E34F26" },
      { name: "CSS3", badge: "Core Technology", color: "#1572B6" },
      { name: "Bootstrap", badge: "Used in Projects", color: "#7952B3" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", badge: "Used in Projects", color: "#339933" },
      { name: "Firebase", badge: "Core Technology", color: "#FFCA28" },
      { name: "MongoDB", badge: "Currently Learning", color: "#47A248" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", badge: "Core Technology", color: "#F05032" },
      { name: "GitHub", badge: "Core Technology", color: "#FFFFFF" },
      { name: "VS Code", badge: "Core Technology", color: "#007ACC" },
    ]
  },
  {
    title: "Specialties & Workflow",
    skills: [
      { name: "MERN Stack", badge: "Currently Learning", color: "#61DAFB" },
      { name: "Responsive Web Design", badge: "Core Technology", color: "#38BDF8" },
      { name: "REST APIs", badge: "Used in Projects", color: "#A855F7" },
      { name: "AI-Assisted Development", badge: "Used in Projects", color: "#22D3EE" },
    ]
  }
];

export const ALL_SKILLS_FOR_SPHERE = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Firebase",
  "Git",
  "GitHub",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Bootstrap",
  "REST APIs",
  "MERN",
  "TypeScript",
  "AI & Web"
];

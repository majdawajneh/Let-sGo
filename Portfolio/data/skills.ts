import type { IconType } from "react-icons";

/* Simple Icons */
import {
  SiSharp,
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiCloudflare,
  SiVercel,
  SiPostman,
  SiSwagger,
  SiFramer,
} from "react-icons/si";

/* Font Awesome */
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

/* Tabler */
import {
  TbApi,
  TbShieldLock,
  TbDatabaseCog,
  TbBrandTailwind,
} from "react-icons/tb";

/* Visual Studio Code */
import { VscCode } from "react-icons/vsc";

/* Devicons */
import { DiVisualstudio } from "react-icons/di";

export type SkillItem = {
  name: string;
  category: string;
  icon: IconType;
  iconClassName: string;
};

export const skills: SkillItem[] = [
  {
    name: "C#",
    category: "Programming Language",
    icon: SiSharp,
    iconClassName: "text-[#68217A]",
  },
  {
    name: "ASP.NET Core",
    category: "Backend Framework",
    icon: SiDotnet,
    iconClassName: "text-[#512BD4]",
  },
  {
    name: "Entity Framework Core",
    category: "ORM / Data Access",
    icon: TbDatabaseCog,
    iconClassName: "text-[#6C63FF]",
  },
  {
    name: "SQL Server",
    category: "Database",
    icon: FaDatabase,
    iconClassName: "text-[#CC2927]",
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    icon: SiTypescript,
    iconClassName: "text-[#3178C6]",
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: SiJavascript,
    iconClassName: "text-[#F7DF1E]",
  },
  {
    name: "React",
    category: "Frontend Library",
    icon: SiReact,
    iconClassName: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    category: "Frontend Framework",
    icon: SiNextdotjs,
    iconClassName: "text-black dark:text-white",
  },
  {
    name: "Node.js",
    category: "JavaScript Runtime",
    icon: SiNodedotjs,
    iconClassName: "text-[#339933]",
  },
  {
    name: "REST APIs",
    category: "API Development",
    icon: TbApi,
    iconClassName: "text-[#0284C7]",
  },
  {
    name: "JWT",
    category: "Authentication",
    icon: TbShieldLock,
    iconClassName: "text-[#F59E0B]",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    iconClassName: "text-[#47A248]",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
    iconClassName: "text-[#E34F26]",
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: FaCss3Alt,
    iconClassName: "text-[#1572B6]",
  },
  {
    name: "Tailwind CSS",
    category: "Styling Framework",
    icon: TbBrandTailwind,
    iconClassName: "text-[#06B6D4]",
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    icon: FaBootstrap,
    iconClassName: "text-[#7952B3]",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: SiFramer,
    iconClassName: "text-[#7C3AED]",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: FaGitAlt,
    iconClassName: "text-[#F05032]",
  },
  {
    name: "GitHub",
    category: "Source Control",
    icon: SiGithub,
    iconClassName: "text-black dark:text-white",
  },
  {
    name: "Cloudflare",
    category: "Hosting / Deployment",
    icon: SiCloudflare,
    iconClassName: "text-[#F38020]",
  },
  {
    name: "Vercel",
    category: "Hosting / Deployment",
    icon: SiVercel,
    iconClassName: "text-black dark:text-white",
  },
  {
    name: "Postman",
    category: "API Testing",
    icon: SiPostman,
    iconClassName: "text-[#FF6C37]",
  },
  {
    name: "Swagger",
    category: "API Documentation",
    icon: SiSwagger,
    iconClassName: "text-[#85EA2D]",
  },
  {
    name: "Visual Studio",
    category: "Development Environment",
    icon: DiVisualstudio,
    iconClassName: "text-[#5C2D91]",
  },
  {
    name: "VS Code",
    category: "Code Editor",
    icon: VscCode,
    iconClassName: "text-[#007ACC]",
  },
];
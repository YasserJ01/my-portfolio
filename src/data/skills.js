import {
  Sparkles,  // Placeholder for Flutter, if you still want to list it
  Brackets, // For React/Frontend
  Code,     // For general programming
  Server,   // For Backend/Node.js
  Database, // For Firebase/DBs
  GitBranch // For Git/Version Control
} from 'lucide-react';

export const skills = [
  {
    name: "React.js",
    icon: Brackets,
    level: 90, // Percentage for progress bar
    description: "Building responsive and dynamic user interfaces.",
  },
  {
    name: "Tailwind CSS",
    icon: Code,
    level: 95,
    description: "Rapidly styling modern web applications.",
  },
  {
    name: "Node.js & Express",
    icon: Server,
    level: 75,
    description: "Developing robust backend APIs and services.",
  },
  {
    name: "JavaScript/TypeScript",
    icon: Code,
    level: 85,
    description: "Core language proficiency and type safety.",
  },
  {
    name: "Firebase",
    icon: Database,
    level: 80,
    description: "Real-time databases, authentication, and hosting.",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    level: 90,
    description: "Version control and collaborative development workflows.",
  },
  // Add your Flutter skill here if relevant for web portfolio context
  {
    name: "Flutter",
    icon: Sparkles, // Use a generic Sparkles or find a Flutter icon
    level: 88,
    description: "Cross-platform mobile and web application development.",
  },
  {
    name: "RESTful APIs",
    icon: Server,
    level: 80,
    description: "Designing and consuming efficient APIs.",
  },
];
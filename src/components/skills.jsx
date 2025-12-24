import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { 
  Smartphone, 
  Database, 
  Terminal, 
  Layout, 
  Users 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-blue-500" />,
      skills: ["Flutter", "Dart", "Websocket","Firebase", "API Integration","BloC","Riverpod","RESTful APIs"]
    },
    {
      title: "Backend & Cloud",
      icon: <Database className="text-emerald-500" />,
      skills: ["RESTful APIs", "Django"]
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal className="text-purple-500" />,
      skills: ["Git & Github", "Jira", "Agile Methodology","Software engineering principles"]
    },
    {
      title: "Design & UX",
      icon: <Layout className="text-orange-500" />,
      skills: ["UI/UX Principles", "Responsive Design", "Interactive Prototypes"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
      <Reveal>
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto md:mx-0" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all group"
          >
            <div className="mb-6 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
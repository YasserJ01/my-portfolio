import { motion } from 'framer-motion';
import Reveal from './Reveal';
import {
  Layers,
  Workflow,
  Cloud,
  ShieldCheck,
  TestTube,
  GitBranch,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "State Management",
      icon: <Layers className="text-teal-600" />,
      color: "blue",
      skills: [
        { name: "BLoC / Cubit" },
        { name: "Riverpod" },
        { name: "Provider" },
        { name: "setState / InheritedWidget" },
      ],
    },
    {
      title: "Architecture",
      icon: <Workflow className="text-emerald-600" />,
      color: "emerald",
      skills: [
        { name: "Clean Architecture" },
        { name: "MVVM" },
        { name: "Repository Pattern" },
        { name: "Facade / Observer / Adapter" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Cloud className="text-indigo-500" />,
      color: "purple",
      skills: [
        { name: "Django (Python)" },
        { name: "RESTful APIs / Dio" },
        { name: "Firebase Suite" },
        { name: "WebSockets / SignalR" },
      ],
    },
    {
      title: "Security & Storage",
      icon: <ShieldCheck className="text-amber-600" />,
      color: "orange",
      skills: [
        { name: "Hive" },
        { name: "Isar DB" },
        { name: "Flutter Secure Storage" },
        { name: "Shared Preferences" },
      ],
    },
    {
      title: "Testing & Quality",
      icon: <TestTube className="text-rose-500" />,
      color: "rose",
      skills: [
        { name: "Unit Testing" },
        { name: "Widget Testing" },
        { name: "Integration Tests" },
        { name: "CI/CD (GitHub Actions)" },
      ],
    },
    {
      title: "Delivery & Tools",
      icon: <GitBranch className="text-slate-700" />,
      color: "teal",
      skills: [
        { name: "Git & GitHub" },
        { name: "Flutter Web & Desktop" },
        { name: "Push Notifications / Maps" },
        { name: "Jira / Agile / Scrum" },
      ],
    },
  ];

  const borderAccents = {
    blue:    "group-hover:border-teal-500/40",
    emerald: "group-hover:border-emerald-500/40",
    purple:  "group-hover:border-purple-500/40",
    orange:  "group-hover:border-orange-500/40",
    rose:    "group-hover:border-rose-500/40",
    teal:    "group-hover:border-teal-500/40",
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
      <Reveal>
        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flutter Skill Matrix</h2>
          <div className="h-1.5 w-20 bg-teal-600 rounded-full" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`group bg-white/70 border border-slate-200 p-7 rounded-3xl transition-all ${borderAccents[category.color]} shadow-[0_20px_50px_rgba(15,23,42,0.08)]`}
          >
            <div className="mb-5 w-12 h-12 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
              {category.icon}
            </div>
            <h3 className="text-lg font-bold mb-4">{category.title}</h3>
            <ul className="space-y-2.5">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3">
                  <span className="text-teal-500/70">
                    <Sparkles size={14} />
                  </span>
                  <span className="text-slate-600 text-sm">{skill.name}</span>
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

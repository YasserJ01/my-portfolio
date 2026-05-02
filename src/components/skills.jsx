import { motion } from 'framer-motion';
import Reveal from './Reveal';
import {
  Layers,
  Workflow,
  Cloud,
  ShieldCheck,
  TestTube,
  GitBranch,
  Sparkles,
  Zap // Added for the header icon
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
    <section style={{ padding: '120px 24px', maxWidth: 1280, margin: '0 auto' }} id="skills">
      
      {/* Updated Header - Matching Projects style */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ marginBottom: 64 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 32, height: 1, background: 'var(--cyan)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#0f766e', letterSpacing: '0.2em' }}>
            04 / EXPERTISE
          </span>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(14,165,166,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={20} color="#0f766e" />
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', margin: 0 }}>
                Technical stack.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>
                A comprehensive matrix of my Flutter and Dart capabilities.
              </p>
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            {skillCategories.length} categories
          </span>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
          {['T-Shaped Developer', 'Clean Code', 'Performance First'].map((pill) => (
            <span key={pill} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', padding: '6px 12px', borderRadius: 999, border: '1px solid rgba(16,24,40,0.12)', background: 'rgba(255,255,255,0.7)', color: 'var(--text-secondary)' }}>
              <Sparkles size={12} /> {pill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
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
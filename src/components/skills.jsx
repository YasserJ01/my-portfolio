import { motion as Motion } from 'framer-motion';
import { createElement } from 'react';
import { Blocks, CloudCog, Code2, Database, GitPullRequest, ShieldCheck } from 'lucide-react';

const groups = [
  { icon: Code2, title: 'Flutter engineering', skills: ['Dart', 'Flutter mobile', 'Responsive UI systems', 'Native platform integration'] },
  { icon: Blocks, title: 'State and architecture', skills: ['BLoC / Cubit', 'Riverpod', 'Clean Architecture', 'Dependency injection'] },
  { icon: CloudCog, title: 'Connected products', skills: ['REST / Dio', 'Firebase Messaging', 'WebSockets / SignalR', 'Deep-link routing'] },
  { icon: Database, title: 'Local data', skills: ['Hive', 'Isar', 'Shared Preferences', 'Offline and recovery flows'] },
  { icon: ShieldCheck, title: 'Security and quality', skills: ['Secure Storage', 'AES-GCM encryption', 'Authorization boundaries', 'Accessibility'] },
  { icon: GitPullRequest, title: 'Delivery', skills: ['Unit and widget tests', 'CI/CD', 'Performance tracing', 'Telemetry and crash reporting'] },
];

const Skills = () => (
  <section className="skills-section" id="skills">
    <div className="section">
      <Motion.div className="split-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div>
          <div className="section-label"><span>03</span> Capabilities</div>
          <h2>A production-minded mobile stack.</h2>
        </div>
        <p>Tools are selected around product constraints: predictable state, safe data, observable releases, and maintainable boundaries.</p>
      </Motion.div>
      <div className="skills-grid">
        {groups.map((group, index) => (
          <Motion.article key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
            {createElement(group.icon, { size: 22 })}
            <h3>{group.title}</h3>
            <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

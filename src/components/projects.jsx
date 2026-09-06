import { motion as Motion } from 'framer-motion';
import {
  ArrowUpRight,
  BellRing,
  Calculator,
  Check,
  FileUp,
  Github,
  ScanLine,
  Siren,
  Smartphone,
} from 'lucide-react';
import { medVolunteer, projects, telloPrintshop } from '../data/projects';

const Projects = () => (
  <section className="section projects-section" id="projects">
    <Motion.div className="split-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div>
        <div className="section-label"><span>02</span> Selected work</div>
        <h2>Mobile products across real domains.</h2>
      </div>
      <p>A selection of active production apps and product-focused work across volunteering, printing, logistics, education, wellness, finance, and civic technology.</p>
    </Motion.div>

    <div className="production-heading">
      <div><span className="live-dot" /> Production apps</div>
      <span>2 deployed and active products</span>
    </div>

    <div className="production-grid">
      <ProductionCard project={medVolunteer} type="med" />
      <ProductionCard project={telloPrintshop} type="tello" />
    </div>

    <div className="other-work-heading"><span>Additional projects</span><span>{projects.length} selected builds</span></div>
    <div className="projects-list">
      {projects.map((project, index) => (
        <Motion.article
          className="project-row"
          key={project.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04 }}
        >
          <span className="project-number">{String(index + 3).padStart(2, '0')}</span>
          <div className="project-title"><span>{project.category}</span><h3>{project.title}</h3></div>
          <p>{project.summary}</p>
          <div className="project-tags">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={17} /><ArrowUpRight size={15} /></a>
        </Motion.article>
      ))}
    </div>
  </section>
);

const ProductionCard = ({ project, type }) => (
  <Motion.article
    className={`production-card ${type}`}
    id={type === 'med' ? 'medvolunteer' : 'tello-printshop'}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="featured-topline">
      <span>{type === 'med' ? 'Volunteer operations' : 'Print commerce'}</span>
      <span className="live-badge"><i /> Live</span>
    </div>
    <p className="featured-category">{project.category}</p>
    <h3>{project.title}</h3>
    <p className="featured-summary">{project.summary}</p>

    {type === 'med' ? <MEDVolunteerVisual /> : <TelloVisual />}

    <div className="featured-role"><span>My contribution</span><p>{project.contribution}</p></div>
    <div className="featured-features">
      {project.features.map((feature) => <span key={feature}><Check size={14} />{feature}</span>)}
    </div>
    <div className="featured-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
  </Motion.article>
);

const MEDVolunteerVisual = () => (
  <div className="production-visual med-visual" aria-label="MEDVolunteer mobile product preview">
    <div className="visual-toolbar"><strong>MEDVolunteer</strong><BellRing size={15} /></div>
    <div className="med-summary"><span>Active volunteer</span><strong>Ready to make an impact</strong><div><b>340</b> points <b>28</b> hours</div></div>
    <div className="visual-actions">
      <div><ScanLine size={17} /><span>Attendance</span></div>
      <div><Siren size={17} /><span>Response</span></div>
      <div><Smartphone size={17} /><span>Profile</span></div>
    </div>
  </div>
);

const TelloVisual = () => (
  <div className="production-visual tello-visual" aria-label="Tello Printshop mobile product preview">
    <div className="visual-toolbar"><strong>Tello Printshop</strong><BellRing size={15} /></div>
    <div className="upload-card"><FileUp size={20} /><div><strong>Upload your documents</strong><span>PDF, DOCX, images, and more</span></div><b>3 files</b></div>
    <div className="print-progress"><span><i /> Order #1042</span><strong>Printing</strong><div><i /></div></div>
    <div className="price-chip"><Calculator size={16} /><span>Estimated total</span><strong>Ready to confirm</strong></div>
  </div>
);

export default Projects;

import { Eye } from 'lucide-react';
import BrandIcon from './BrandIcon';
import { catLabels } from '../data/projects';

const iconMap = {
  bot: '🤖',
  send: '📨',
  'shopping-cart': '🛒',
  smartphone: '📱',
  cloud: '☁️',
  'sliders-horizontal': '🎛️',
  brain: '🧠',
  utensils: '🍽️',
  truck: '🚚',
};

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" data-category={project.category}>
      <div className="project-media">
        <span className="preview text-5xl">{iconMap[project.icon] || '🚀'}</span>
        <span className="corner tl"></span>
        <span className="corner br"></span>
      </div>
      <div className="project-body">
        <div className="project-cat">{catLabels[project.category]}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <Eye size={16} /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <BrandIcon name="github" size={16} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

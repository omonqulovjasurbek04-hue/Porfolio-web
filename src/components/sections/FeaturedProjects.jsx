import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function FeaturedProjects() {
  return (
    <section className="section">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader centered label="Portfolio" title='Featured <span class="grad-text">Projects</span>' subtitle="A selection of products I've designed, built and shipped over the last decade." />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
        <div className="text-center mt-12"><Link to="/projects" className="btn btn-primary">Explore All Projects</Link></div>
      </div>
    </section>
  );
}

import useCounter from '../hooks/useCounter';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import SkillsSection from '../components/sections/SkillsSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ExperiencePreview from '../components/sections/ExperiencePreview';
import ContactPreview from '../components/sections/ContactPreview';

export default function Home() {
  useCounter();
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <FeaturedProjects />
      <ExperiencePreview />
      <ContactPreview />
    </>
  );
}

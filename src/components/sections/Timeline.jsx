import TimelineItem from '../ui/TimelineItem';
const items = [
  { num: '01', date: '2023 — Present', role: 'Lead Full Stack Developer', company: 'NovaTech Solutions', points: ['Leading a 12-engineer team shipping a SaaS platform for 300+ enterprise clients.', 'Architected a micro-frontend system that cut release cycles from weeks to hours.', 'Drove infrastructure costs down 40% through containerization and autoscaling.', 'Mentored 6 mid-level developers into senior roles.'] },
  { num: '02', date: '2020 — 2023', role: 'Senior Full Stack Engineer', company: 'CloudScale Systems', points: ['Built a real-time analytics platform processing 2B+ events daily.', 'Designed the AI recommendation pipeline powering 35% of conversion lift.', 'Owned the migration from monolith to event-driven microservices.'] },
  { num: '03', date: '2017 — 2020', role: 'Full Stack Developer', company: 'PayFlow Fintech', points: ['Delivered payment gateway integrations for 5 major banks.', 'Cut payment processing latency by 60% with a Node.js + Redis pipeline.', 'Achieved PCI-DSS compliance for the core platform.'] },
  { num: '04', date: '2015 — 2017', role: 'Junior → Mid-Level Developer', company: 'WebCraft Agency', points: ['Shipped 40+ client websites and web applications end-to-end.', 'Introduced the agency\'s first automated CI/CD workflow.', 'Won "Best Developer of the Year" award (2016).'] },
];
export default function Timeline() {
  return (
    <div className="timeline">
      {items.map((it) => <TimelineItem key={it.num} {...it} />)}
    </div>
  );
}

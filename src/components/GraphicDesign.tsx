import { motion } from 'motion/react';
import { HoverCard } from './HoverCard';
import { ExternalLink } from 'lucide-react';

const graphicDesignProjects = [
  {
    id: 'urban-beats',
    title: 'Urban Beats Festival',
    subtitle: 'Brand Identity & Campaign',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1621974714993-465ae51a4483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2MTU1MTMxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'zenith-coffee',
    title: 'Zenith Coffee Co.',
    subtitle: 'Complete Brand Redesign',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTU0NjQzMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'eco-tech',
    title: 'EcoTech Solutions',
    subtitle: 'Sustainable Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwxfHx8fDE3NjE1NjAzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function GraphicDesign() {
  const handleProjectClick = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="graphic-design" className="relative bg-black">
      <div className="relative">
        {/* Section Header with Featured Projects */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 
                className="mb-4 bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
              >
                Graphic Design
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Brand identities and visual communication projects
              </p>
            </motion.div>

            {/* Featured Project Cards - 3 Karten wie bei Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
              {graphicDesignProjects.map((project, index) => (
                <HoverCard
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black shadow-2xl"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute inset-0 bg-ice-400/0 group-hover:bg-ice-400/10 transition-colors duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-ice-400/20 border border-ice-400/30 text-ice-400 text-sm backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-white/60 mb-1 text-sm">
                        {project.subtitle}
                      </p>
                      <h3 className="text-white mb-3 group-hover:text-ice-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 group-hover:text-ice-400 transition-colors">
                        <span className="text-sm">View Case Study</span>
                      </div>
                    </div>
                  </motion.div>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { HoverCard } from './HoverCard';
import { galleryProjects } from './Gallery3D';
import TurntableModel from './TurntableModel';

// ⭐ Alle Projekt-Details
const projectDetails = [
  {
    id: 'abstract-forms',
    title: 'Abstract Forms',
    subtitle: 'Modern Design',
    category: '3D Design',
    date: 'September 2024',
    description:
      'A series of abstract 3D sculptures that explore the relationship between organic and geometric forms, pushing the boundaries of digital materiality.',
    technologies: ['Cinema 4D', 'Octane Render', 'Houdini', 'Photoshop'],
    show3DModel: false,
  },
  {
    id: 'minimal-aesthetics',
    title: 'Minimal Aesthetics',
    subtitle: 'Contemporary Art',
    category: '3D Design',
    date: 'August 2024',
    description:
      "A minimalist approach to 3D design, focusing on clean lines, subtle gradients, and the beauty of simplicity in digital space.",
    technologies: ['Blender', 'Arnold Renderer', 'Illustrator', 'Figma'],
    show3DModel: true,
  },
  {
    id: 'geometric-vision',
    title: 'Geometric Vision',
    subtitle: 'Precision Design',
    category: '3D Design',
    date: 'July 2024',
    description:
      'Exploring the intersection of mathematics and art through precise geometric compositions that create visual harmony and intrigue.',
    technologies: ['Grasshopper', 'Rhino 3D', 'V-Ray', 'Processing'],
    show3DModel: true,
  },
  {
    id: 'organic-flow',
    title: 'Organic Flow',
    subtitle: 'Fluid Dynamics',
    category: '3D Design',
    date: 'June 2024',
    description:
      'A study in fluid simulation and organic forms, exploring the natural movement and evolution of shapes in digital space.',
    technologies: ['Houdini', 'Redshift', 'Cinema 4D', 'X-Particles'],
    show3DModel: false,
  },
  {
    id: 'crystalline-structure',
    title: 'Crystalline Structure',
    subtitle: 'Mathematical Beauty',
    category: '3D Design',
    date: 'May 2024',
    description:
      'Inspired by natural crystal formations, this project explores the intersection of mathematical precision and organic growth patterns.',
    technologies: ['Houdini', 'Mantra', 'ZBrush', 'Substance Designer'],
    show3DModel: false,
  },
  {
    id: 'london-telephone-box',
    title: 'London Telephone Box',
    subtitle: 'Game Assets / Props',
    category: 'Digital 3D',
    date: 'July 2023',
    description:
      "As part of my Bachelor's project, titled 'Modern London Street,' I had the exciting opportunity to create a contemporary London street in a 3D environment. During the implementation, I incorporated the famous red London telephone booth.",
    technologies: ['Blender', 'Substance Painter', 'Unreal Engine', 'ZBrush'],
    show3DModel: true,
  },
];

export function Projects() {
  const handleProjectClick = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="3d-projects" className="relative bg-black text-white">
      <div className="py-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
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
            3D Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Featured case studies of my 3D design work
          </p>
        </motion.div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
          {galleryProjects.map((project, index) => (
            <HoverCard key={project.id} onClick={() => handleProjectClick(project.id)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-ice-400/0 group-hover:bg-ice-400/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <p className="text-white/60 mb-1 text-sm">{project.subtitle}</p>
                  <h3 className="text-white mb-3 group-hover:text-ice-400 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-ice-400 transition-colors">
                    <span className="text-sm">View Case Study</span>
                  </div>
                </div>
              </motion.div>
            </HoverCard>
          ))}
        </div>

        {/* Project Details */}
        {projectDetails.map((project) => (
          <article key={project.id} id={project.id} className="w-full flex flex-col gap-8 mb-20">
            {/* 3D Turntable */}
            {project.show3DModel && (
              <div className="w-full h-[80vh] md:h-[90vh]">
                <TurntableModel />
              </div>
            )}

            {/* Text */}
            <div className="px-4 md:px-0 max-w-5xl mx-auto flex flex-col gap-4">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-zinc-900 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
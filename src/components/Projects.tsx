import { motion } from 'framer-motion';
import { ProjectDetail } from './ProjectDetail';
import { galleryProjects } from './Gallery3D';
import { HoverCard } from './HoverCard';
import TurntableModel from './TurntableModel';

// ⭐ Projekt-Details
const projectDetails = [
  {
    id: 'abstract-forms',
    title: 'Abstract Forms',
    subtitle: 'Modern Design',
    category: '3D Design',
    date: 'September 2024',
    description:
      'A series of abstract 3D sculptures that explore the relationship between organic and geometric forms, pushing the boundaries of digital materiality.',
    images: [
      'https://images.unsplash.com/photo-1637246344338-2afcfb02e766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1710858775474-08799a698bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1759265685207-4f3ca08233b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    technologies: ['Cinema 4D', 'Octane Render', 'Houdini', 'Photoshop'],
    show3DModel: false,
  },
  {
    id: 'london-telephone-box',
    title: 'London Telephone Box',
    subtitle: 'Game Assets / Props',
    category: 'Digital 3D',
    date: 'July 2023',
    description:
      "As part of my Bachelor's project, titled 'Modern London Street,' I created a contemporary London street including the iconic red London telephone booth.",
    images: [
      'https://cdnb.artstation.com/p/assets/images/images/065/171/711/large/leon-kaltenschnee-render-005.jpg?1689699385',
      'https://cdnb.artstation.com/p/assets/images/images/065/179/277/large/leon-kaltenschnee-render.jpg?1689712390',
      'https://cdnb.artstation.com/p/assets/images/images/065/179/213/large/leon-kaltenschnee-new-project-81.jpg?1689712223',
      'https://cdna.artstation.com/p/assets/images/images/065/179/356/large/leon-kaltenschnee-new-project-82.jpg?1689712570',
      'https://cdna.artstation.com/p/assets/images/images/065/171/716/large/leon-kaltenschnee-render-008.jpg?1689699403',
    ],
    technologies: ['Blender', 'Substance Painter', 'Unreal Engine', 'ZBrush'],
    show3DModel: true, // Nur für das zweite Fenster
  },
  // Weitere Projekte analog…
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
          <ProjectDetail key={project.id} {...project}>
            {/* Nur für London Telephone Box: zweites 3D-Fenster */}
            {project.id === 'london-telephone-box' && (
              <div className="w-full h-[90vh] md:h-[100vh] border border-zinc-700 rounded-xl overflow-hidden mt-8">
                <TurntableModel />
              </div>
            )}
          </ProjectDetail>
        ))}
      </div>
    </section>
  );
}
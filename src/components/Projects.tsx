import { motion } from 'motion/react';
import { ProjectDetail } from './ProjectDetail';
import { galleryProjects } from './Gallery3D';
import { HoverCard } from './HoverCard';

// ⭐ PROJEKT-DETAILS - Diese werden mit den Gallery-Karten verlinkt
const projectDetails = [
  {
    id: 'quantum-sphere',
    title: 'Quantum Sphere',
    subtitle: 'Digital Sculpture',
    category: '3D Design',
    date: 'October 2024',
    description: 'An exploration of form and light through advanced 3D rendering techniques, creating a mesmerizing digital sculpture that challenges perception.',
    challenge: 'The challenge was to create a visually striking 3D sculpture that would captivate viewers while maintaining technical precision. The project required balancing artistic vision with computational constraints, ensuring the final render would be both beautiful and performant.',
    solution: 'By utilizing advanced ray-tracing techniques and procedural modeling, I created a dynamic sphere that interacts with light in unexpected ways. The use of metallic and glass materials creates depth and complexity, while the geometric patterns add a layer of mathematical precision to the organic forms.',
    results: [
      'Featured in Digital Arts Magazine',
      'Over 50,000 views on social media',
      'Selected for international digital art exhibition',
      'Commissioned for commercial use by tech company',
    ],
    images: [
      'https://images.unsplash.com/photo-1749621245916-910ef8a23e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHJlbmRlciUyMGFydHxlbnwxfHx8fDE3NjE0MDgwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjE0NTY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwc2hhcGVzfGVufDF8fHx8MTc2MTQ1Njc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Blender', 'Cycles Renderer', 'Substance Painter', 'After Effects'],
    show3DModel: true,
  },
  {
    id: 'abstract-forms',
    title: 'Abstract Forms',
    subtitle: 'Modern Design',
    category: '3D Design',
    date: 'September 2024',
    description: 'A series of abstract 3D sculptures that explore the relationship between organic and geometric forms, pushing the boundaries of digital materiality.',
    challenge: 'Creating a cohesive series that balances abstraction with visual appeal while maintaining a consistent aesthetic language across multiple pieces. The challenge was to make each piece unique yet part of a unified collection.',
    solution: 'I developed a custom procedural workflow that allowed for controlled randomness in form generation. By establishing a core set of design principles and material properties, each piece maintains visual coherence while expressing individual character. The interplay of matte and glossy surfaces creates visual interest and depth.',
    results: [
      'Complete series sold to private collector',
      'Published in 3D Artist Magazine',
      'Used in promotional materials for design conference',
      'Generated licensing inquiries from multiple brands',
    ],
    images: [
      'https://images.unsplash.com/photo-1637246344338-2afcfb02e766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjEzNTcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1710858775474-08799a698bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc2MTQwNzY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759265685207-4f3ca08233b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY29uY2VwdHxlbnwxfHx8fDE3NjEzMjQyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Cinema 4D', 'Octane Render', 'Houdini', 'Photoshop'],
  },
  {
    id: 'minimal-aesthetics',
    title: 'Minimal Aesthetics',
    subtitle: 'Contemporary Art',
    category: '3D Design',
    date: 'August 2024',
    description: 'A minimalist approach to 3D design, focusing on clean lines, subtle gradients, and the beauty of simplicity in digital space.',
    challenge: 'In an era of visual complexity, the challenge was to create compelling work using minimal elements. Every decision needed to be intentional, as there was nowhere to hide imperfections in such a stripped-down aesthetic.',
    solution: 'By focusing on perfect lighting, subtle material variations, and precise composition, I created a series that proves less can indeed be more. The key was understanding that minimalism doesn\'t mean simple - it means refined. Every shadow, reflection, and edge was carefully considered.',
    results: [
      'Won Best Minimal Design Award at Digital Arts Festival',
      'Featured on Behance\'s curated gallery',
      'Commissioned for luxury brand campaign',
      'Tutorial requests from over 200 designers',
    ],
    images: [
      'https://images.unsplash.com/photo-1646936190308-6faef1ac893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwYXJ0fGVufDF8fHx8MTc2MTQwODA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1675350174784-e76296667d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzM5MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1722880805722-d212c7630855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3xlbnwxfHx8fDE3NjE0MDIyODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Blender', 'Arnold Renderer', 'Illustrator', 'Figma'],
    show3DModel: true,
  },
  {
    id: 'geometric-vision',
    title: 'Geometric Vision',
    subtitle: 'Precision Design',
    category: '3D Design',
    date: 'July 2024',
    description: 'Exploring the intersection of mathematics and art through precise geometric compositions that create visual harmony and intrigue.',
    challenge: 'The project required balancing mathematical precision with artistic intuition. Creating patterns that were both technically accurate and visually compelling demanded a deep understanding of both geometry and design principles.',
    solution: 'Using parametric modeling techniques, I created a system that could generate complex geometric patterns while maintaining perfect symmetry and proportion. The integration of color theory with geometric forms resulted in compositions that are both intellectually and visually satisfying.',
    results: [
      'Selected for permanent exhibition at Tech Museum',
      'Licensed for use in educational materials',
      'Featured in Geometry & Art publication',
      'Generated collaboration offers from architects',
    ],
    images: [
      'https://images.unsplash.com/photo-1688486134221-dfa7d4c45073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBkZXNpZ258ZW58MXx8fHwxNzYxNDA1NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjE0NTY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1743446770828-180040aba491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjEzNzc0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Grasshopper', 'Rhino 3D', 'V-Ray', 'Processing'],
    show3DModel: true,
  },
  {
    id: 'organic-flow',
    title: 'Organic Flow',
    subtitle: 'Fluid Dynamics',
    category: '3D Design',
    date: 'June 2024',
    description: 'A study in fluid simulation and organic forms, exploring the natural movement and evolution of shapes in digital space.',
    challenge: 'Simulating realistic fluid dynamics while maintaining artistic control over the final form. The challenge was to let the physics guide the design while still achieving a visually compelling composition.',
    solution: 'Combining particle systems with force fields and dynamic meshes, I created a workflow that balanced procedural generation with manual refinement. The result is a series that feels both naturally occurring and intentionally designed.',
    results: [
      'Featured in Motion Graphics Quarterly',
      'Used in brand campaign for luxury perfume',
      'Workshop invitation at design conference',
      'Over 100,000 impressions on Behance',
    ],
    images: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwc2hhcGVzfGVufDF8fHx8MTc2MTQ1Njc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1710858775474-08799a698bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc2MTQwNzY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759265685207-4f3ca08233b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY29uY2VwdHxlbnwxfHx8fDE3NjEzMjQyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Houdini', 'Redshift', 'Cinema 4D', 'X-Particles'],
  },
  {
    id: 'crystalline-structure',
    title: 'Crystalline Structure',
    subtitle: 'Mathematical Beauty',
    category: '3D Design',
    date: 'May 2024',
    description: 'Inspired by natural crystal formations, this project explores the intersection of mathematical precision and organic growth patterns.',
    challenge: 'Creating structures that feel both mathematically precise and naturally grown. The challenge was to capture the essence of crystalline beauty while maintaining visual interest through variation and imperfection.',
    solution: 'Using L-systems and growth algorithms combined with manual refinement, I developed a hybrid approach that produces structures with mathematical foundations but organic variation. Strategic lighting and material choices emphasize the crystalline nature.',
    results: [
      'Selected for Science & Art exhibition',
      'Featured in 3D World Magazine cover',
      'Purchased by private art collector',
      'Commission for jewelry brand visualization',
    ],
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjE0NTY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1749621245916-910ef8a23e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHJlbmRlciUyMGFydHxlbnwxfHx8fDE3NjE0MDgwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1688486134221-dfa7d4c45073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBkZXNpZ258ZW58MXx8fHwxNzYxNDA1NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Houdini', 'Mantra', 'ZBrush', 'Substance Designer'],
  },
];

export function Projects() {
  const handleProjectClick = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="3d-projects" className="relative bg-black">
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
                3D Projects
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Featured case studies of my 3D design work
              </p>
            </motion.div>

            {/* Featured Project Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
              {galleryProjects.map((project, index) => (
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
                    className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-ice-400/0 group-hover:bg-ice-400/10 transition-colors duration-300" />
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

        {/* Project Details - Linked from Featured Cards */}
        {projectDetails.map((project) => (
          <ProjectDetail key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

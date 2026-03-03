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
    challenge:
      'Creating a cohesive series that balances abstraction with visual appeal while maintaining a consistent aesthetic language across multiple pieces. The challenge was to make each piece unique yet part of a unified collection.',
    solution:
      'I developed a custom procedural workflow that allowed for controlled randomness in form generation. By establishing a core set of design principles and material properties, each piece maintains visual coherence while expressing individual character. The interplay of matte and glossy surfaces creates visual interest and depth.',
    results: [
      'Complete series sold to private collector',
      'Published in 3D Artist Magazine',
      'Used in promotional materials for design conference',
      'Generated licensing inquiries from multiple brands',
    ],
    images: [
      'https://images.unsplash.com/photo-1637246344338-2afcfb02e766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1710858775474-08799a698bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1759265685207-4f3ca08233b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    technologies: ['Cinema 4D', 'Octane Render', 'Houdini', 'Photoshop'],
  },
  {
    id: 'minimal-aesthetics',
    title: 'Minimal Aesthetics',
    subtitle: 'Contemporary Art',
    category: '3D Design',
    date: 'August 2024',
    description:
      'A minimalist approach to 3D design, focusing on clean lines, subtle gradients, and the beauty of simplicity in digital space.',
    challenge:
      'In an era of visual complexity, the challenge was to create compelling work using minimal elements. Every decision needed to be intentional, as there was nowhere to hide imperfections in such a stripped-down aesthetic.',
    solution:
      "By focusing on perfect lighting, subtle material variations, and precise composition, I created a series that proves less can indeed be more. The key was understanding that minimalism doesn't mean simple - it means refined. Every shadow, reflection, and edge was carefully considered.",
    results: [
      'Won Best Minimal Design Award at Digital Arts Festival',
      "Featured on Behance's curated gallery",
      'Commissioned for luxury brand campaign',
      'Tutorial requests from over 200 designers',
    ],
    images: [
      'https://images.unsplash.com/photo-1646936190308-6faef1ac893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1675350174784-e76296667d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1722880805722-d212c7630855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
    description:
      'Exploring the intersection of mathematics and art through precise geometric compositions that create visual harmony and intrigue.',
    challenge:
      'The project required balancing mathematical precision with artistic intuition. Creating patterns that were both technically accurate and visually compelling demanded a deep understanding of both geometry and design principles.',
    solution:
      'Using parametric modeling techniques, I created a system that could generate complex geometric patterns while maintaining perfect symmetry and proportion. The integration of color theory with geometric forms resulted in compositions that are both intellectually and visually satisfying.',
    results: [
      'Selected for permanent exhibition at Tech Museum',
      'Licensed for use in educational materials',
      'Featured in Geometry & Art publication',
      'Generated collaboration offers from architects',
    ],
    images: [
      'https://images.unsplash.com/photo-1688486134221-dfa7d4c45073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1743446770828-180040aba491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
    description:
      'A study in fluid simulation and organic forms, exploring the natural movement and evolution of shapes in digital space.',
    challenge:
      'Simulating realistic fluid dynamics while maintaining artistic control over the final form. The challenge was to let the physics guide the design while still achieving a visually compelling composition.',
    solution:
      'Combining particle systems with force fields and dynamic meshes, I created a workflow that balanced procedural generation with manual refinement. The result is a series that feels both naturally occurring and intentionally designed.',
    results: [
      'Featured in Motion Graphics Quarterly',
      'Used in brand campaign for luxury perfume',
      'Workshop invitation at design conference',
      'Over 100,000 impressions on Behance',
    ],
    images: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1710858775474-08799a698bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1759265685207-4f3ca08233b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    technologies: ['Houdini', 'Redshift', 'Cinema 4D', 'X-Particles'],
  },
  {
    id: 'crystalline-structure',
    title: 'Crystalline Structure',
    subtitle: 'Mathematical Beauty',
    category: '3D Design',
    date: 'May 2024',
    description:
      'Inspired by natural crystal formations, this project explores the intersection of mathematical precision and organic growth patterns.',
    challenge:
      'Creating structures that feel both mathematically precise and naturally grown. The challenge was to capture the essence of crystalline beauty while maintaining visual interest through variation and imperfection.',
    solution:
      'Using L-systems and growth algorithms combined with manual refinement, I developed a hybrid approach that produces structures with mathematical foundations but organic variation. Strategic lighting and material choices emphasize the crystalline nature.',
    results: [
      'Selected for Science & Art exhibition',
      'Featured in 3D World Magazine cover',
      'Purchased by private art collector',
      'Commission for jewelry brand visualization',
    ],
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1749621245916-910ef8a23e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1688486134221-dfa7d4c45073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    technologies: ['Houdini', 'Mantra', 'ZBrush', 'Substance Designer'],
  },
  {
    id: 'london-telephone-box',
    title: 'London Telephone Box',
    subtitle: 'Game Assets / Props',
    category: 'Digital 3D',
    date: 'July 2023',
    description:
      "As part of my Bachelor's project, titled 'Modern London Street,' I created a contemporary London street including the iconic red London telephone booth.",
    challenge:
      'Capturing the essence of modern London by meticulously designing the street with attention to detail.',
    solution:
      'Faithfully recreating the iconic telephone booth with high-quality texturing and modeling to match real-world references.',
    results: [
      'Featured on ArtStation',
      'Realistic Game Asset Creation',
      'High-detail Hard Surface Modeling',
    ],
    images: [
      'https://cdnb.artstation.com/p/assets/images/images/065/171/711/large/leon-kaltenschnee-render-005.jpg?1689699385',
      'https://cdnb.artstation.com/p/assets/images/images/065/179/277/large/leon-kaltenschnee-render.jpg?1689712390',
      'https://cdnb.artstation.com/p/assets/images/images/065/179/213/large/leon-kaltenschnee-new-project-81.jpg?1689712223',
      'https://cdna.artstation.com/p/assets/images/images/065/179/356/large/leon-kaltenschnee-new-project-82.jpg?1689712570',
      'https://cdna.artstation.com/p/assets/images/images/065/171/716/large/leon-kaltenschnee-render-008.jpg?1689699403',
    ],
    technologies: ['Blender', 'Substance Painter', 'Unreal Engine', 'ZBrush'],
    extra3DComponent: (
      <div className="w-full h-[90vh] md:h-[100vh] border border-zinc-700 rounded-xl overflow-hidden mt-8">
        <TurntableModel />
      </div>
    ),
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
          <ProjectDetail key={project.id} {...project} extra3DComponent={project.extra3DComponent} />
        ))}
      </div>
    </section>
  );
}
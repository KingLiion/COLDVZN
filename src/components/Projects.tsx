import { motion } from 'framer-motion';
import { ProjectDetail } from './ProjectDetail';
import { gallery3DProjects } from './Gallery3D';
import { HoverCard } from './HoverCard';
import TurntableModel from './TurntableModel'; // Dein 3D-Modell-Fenster

// ⭐ PROJEKT-DETAILS
const projectDetails = [
  {
    id: 'interior-visualization',
    title: '3D Interior & Product Visualization – Tabletops and Countertops',
    subtitle: 'Product Visualization',
    category: 'Digital 3D',
    date: 'June 2023 - December 2024',
    description: 'This project was created during my work as a 3D Artist at Rückwand24 with the goal of realistically visualizing high-quality tabletops and countertops in interior scenes. The renderings were used for presenting materials and products to give clients a clear understanding of how surfaces integrate into real residential and working environments.',
    challenge: 'Creating convincing product visualizations within realistic interior environments while maintaining both atmospheric design and clear product focus. The challenge was to develop scenes that not only showcase the product technically correctly but also make it emotionally compelling.',
    solution: 'I developed a modular approach to scene construction, establishing clear design principles for contemporary Scandinavian interior styling. Each environment was carefully composed to balance aesthetic interior design with strong product emphasis. I used physically-based materials to achieve realistic surface responses, strategic lighting to guide viewer attention, and layered design elements (furniture, plants, artwork) that create familiar, contemporary spaces without distracting from the main product.',
    results: [
      'High-quality product visualizations for marketing materials',
      'Professional interior staging for e-commerce and catalogs',
      'Multiple scene variations showcasing product versatility',
      'Production-ready assets for client presentations',
    ],
    images: [
      '/assets/buro_V2.2.webp',
      '/assets/Küche-ZimmerV2.webp',
      '/assets/ZimmerV2.webp',
      '/assets/küche-zimmer.webp',
      '/assets/buro_nah_V2.webp',
      '/assets/Esszimmer_V1.webp',
    ],
    technologies: ['Blender', 'Substance 3D Designer', 'Substance 3D Painter', 'Adobe Creative Suite', 'Photoshop'],
  },
 {
    id: 'material-surface-visualization',
    title: '3D Material & Surface Visualization – Stone Tabletops and Countertops',
    subtitle: 'Material Visualization',
    category: 'Digital 3D',
    date: 'June 2023 - December 2024',
    description: 'This project was developed during my work as a 3D Artist at Rückwand24 and focuses on the visualization of stone and marble surfaces used for tabletops and countertops. The goal was to create high-quality material presentations that clearly communicate color, pattern, and surface characteristics. The visualizations were designed to help customers understand how different materials look and behave in realistic interior environments.',
    
    challenge: 'The main challenge was translating complex stone and marble materials into believable digital surfaces while preserving their natural variation, depth, and reflectivity. Each material has unique veins, color shifts, and surface characteristics that needed to be represented accurately. At the same time, the visualizations had to remain clear and consistent so that clients could easily compare different material options.',
    
    solution: 'I developed a workflow focused on physically based material creation and clean product-focused scene composition. Using Substance 3D tools, I created and refined realistic stone materials with detailed surface maps controlling roughness, reflections, and microstructure. In Blender, I built simple but elegant interior contexts that provide scale and realism while keeping the material as the central visual element. Lighting setups were carefully designed to reveal surface details and highlight the natural patterns of the materials.',
    
    results: [
      'Realistic digital representations of multiple stone and marble materials',
      'Clear visual comparison between different surface styles and colors',
      'High-quality product imagery for marketing and online product catalogs',
      'Production-ready assets for product presentation and customer visualization',
    ],
    
    images: [
      '/assets/Amazonia_Jade_S.webp',
      '/assets/Calacatta_Vein_S.webp',
      '/assets/Desert_Brown_S.webp',
      '/assets/Marble_Gold_S.webp',
      '/assets/Midnight_Black_S.webp',
      '/assets/Urban_Grey_S.webp',
    ],
    
    technologies: [
      'Blender',
      'Substance 3D Designer',
      'Substance 3D Painter',
      'Adobe Creative Suite',
      'Photoshop'
    ],
  },
  {
    id: 'london-street-ue5',
    title: 'Atmospheric Realtime Environment - London Street (UE5.1)',
    subtitle: 'Real-time Environment / Lighting',
    category: 'Digital 3D',
    date: 'February 2026',
    description:
      'The goal of this project was the development of a high-quality real-time environment with a strong focus on lighting, material response, and atmosphere. A single consistent scene was iteratively reinterpreted through varying lighting and weather conditions (daylight, evening, fog and rain) to showcase mood, reflections and material response in Unreal Engine 5.1. Assets were produced with a production-oriented workflow prioritizing modularity and performance.',
    challenge:
      'Maintaining visual quality and performance in a real-time scene while achieving convincing material response (especially on wet surfaces) and atmospheric depth. The project required balancing asset reuse via modular building blocks and high-fidelity hero assets.',
    solution:
      'A modular street architecture enabled efficient asset reuse. Materials were authored in Substance Designer/Painter with deliberate roughness variation and localized wear. Lighting scenarios (warm/cold contrast, volumetric fog, and rain reflections) were iterated to define depth, guide the viewer and create distinct moods across the same geometry.',
    results: [
      'Featured on ArtStation',
      'Production-ready modular environment',
      'Optimized real-time rendering in UE5.1',
    ],
    images: [
      'https://cdna.artstation.com/p/assets/images/images/096/655/378/large/leon-kaltenschnee-highresscreenshot00001-1.webp?1771957329',
      'https://cdna.artstation.com/p/assets/images/images/096/655/392/large/leon-kaltenschnee-highresscreenshot00009.webp?1771957369',
      'https://cdnb.artstation.com/p/assets/images/images/096/720/009/large/leon-kaltenschnee-psx-20260226-161722.webp?1772121839',
      'https://cdnb.artstation.com/p/assets/images/images/096/720/013/large/leon-kaltenschnee-psx-20260226-161310.webp?1772121845',
      'https://cdna.artstation.com/p/assets/images/images/096/720/322/large/leon-kaltenschnee-leon-kaltenschnee-render-005-1.webp?1772122478',
      'https://cdna.artstation.com/p/assets/images/images/096/727/742/large/leon-kaltenschnee-strassenmat2-kamera.webp?1772135567',
      'https://cdnb.artstation.com/p/assets/images/images/096/720/507/large/leon-kaltenschnee-leon-kaltenschnee-nacht-licht-normal.webp?1772122828',
      'https://cdna.artstation.com/p/assets/images/images/096/729/114/large/leon-kaltenschnee-gebaude.webp?1772138247',
    ],
    technologies: ['Substance 3D Designer', 'Substance 3D Painter', '3ds Max', 'Maya', 'Blender', 'Unreal Engine', 'Photoshop'],
    show3DModel: false,
  },
 {
  id: 'mirror-product-visualization',
  title: '3D Interior Visualization – Mirror Product Rendering',
  subtitle: 'Product Visualization',
  category: 'Digital 3D',
  date: 'June 2023 - December 2024',
  description: `This project was created during my professional work as a 3D Artist at Rückwand24 and focuses on the realistic visualization of a decorative wall mirror within carefully designed interior environments. The goal was to present the mirror not as an isolated product, but as part of contemporary living spaces that communicate both function and atmosphere.

To achieve this, I developed several interior scenes including a bathroom and a living room environment. Each scene was designed to demonstrate how the mirror integrates naturally into modern interior design while maintaining a clear visual focus on the product itself. The renderings simulate real residential spaces and provide viewers with a realistic sense of scale, placement, and spatial interaction.

A major aspect of the project was the accurate representation of reflective surfaces and spatial depth. Mirrors are particularly challenging in 3D visualization because they require believable reflections of the surrounding environment while avoiding visual clutter or distracting elements. Therefore, the scenes were carefully structured to control what appears within the mirror reflection, ensuring that the reflections enhance the realism of the space without overwhelming the composition.

The visual style follows a contemporary interior design language commonly used in modern furniture catalogs and online product presentations. Recognizable design elements such as minimal furniture, soft lighting, plants, textured walls, and decorative accessories create an authentic lifestyle setting that helps customers imagine the product in their own homes.

The final renderings were used as high-quality product imagery for marketing and product presentation, demonstrating how professional 3D visualization can effectively communicate design, material quality, and spatial context to customers.`,

  challenge: `One of the main challenges of this project was achieving convincing mirror reflections within complex interior scenes while maintaining a clear and controlled visual composition.

Because mirrors reflect the entire surrounding environment, every object placed in the scene needs to be carefully considered. Uncontrolled reflections can easily create visual noise or distract from the main product. Additionally, the lighting needed to be carefully balanced so that the reflective surface behaves realistically while the surrounding interior remains visually appealing and readable.

Another challenge was maintaining the mirror as the visual focal point while still creating a believable interior environment that feels natural and lived in.`,

  solution: `To address these challenges, I developed a structured workflow focused on controlled scene composition, realistic lighting setups, and physically based materials.

First, I designed the interior environments in a modular way. Furniture, plants, and decorative objects were placed strategically so that they appear naturally within the mirror reflections without distracting from the product itself. This allowed the reflections to support the realism of the scene while maintaining visual clarity.

Within Blender, I used physically based rendering techniques to accurately simulate reflective surfaces and realistic material behavior. Lighting setups were carefully arranged using a combination of natural light sources and subtle interior lighting to create soft shadows and believable light distribution across the space.

Camera composition also played an important role in the final images. I selected angles that clearly present the mirror’s shape, frame, and placement while allowing the reflected environment to extend the perceived depth of the scene. By carefully balancing interior design, lighting, and reflection behavior, the final renders create a convincing and visually appealing product presentation.

This workflow demonstrates my ability to translate real-world interior design principles into digital environments and to produce production-ready visualizations suitable for marketing, e-commerce platforms, and professional product presentations.`,

  results: [
    'High-quality mirror product visualizations for marketing and online presentation',
    'Realistic interior scenes demonstrating product placement and spatial interaction',
    'Accurate handling of reflections and lighting within complex 3D environments',
    'Professional visualization pipeline used in a real production environment'
  ],

  images: [
    '/assets/Mirror_Bath_V1.webp',
    '/assets/Mirror.Bath_V1.3.2.webp',
    '/assets/Mirror.Bath_V1.3.3.webp',
    '/assets/Mirror_Livingroom_V1.3.webp',
    '/assets/Mirror_Livingroom_V2.2.1.webp'
  ],

  technologies: [
    'Blender',
    'Substance 3D Designer',
    'Substance 3D Painter',
    'Adobe Creative Suite',
    'Photoshop'
  ]
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
    description: 'As part of my Bachelor\'s project, titled "Modern London Street," I had the exciting opportunity to create a contemporary London street in a 3D environment. During the implementation, I incorporated the famous red London telephone booth. These telephone booths have become an iconic symbol of the British capital, representing the charm and history of the city.',
    challenge: 'In my project, I strived to capture the essence of modern London by meticulously designing the street with attention to detail. The inclusion of the red telephone booth was essential in conveying the character and ambiance of the cityscape.',
    solution: 'By faithfully recreating this iconic element, I aimed to pay homage to its significance in the cultural fabric of London, utilizing high-quality texturing and precise modeling techniques to match real-world references.',
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
    show3DModel: true,
    extra3DComponent: <TurntableModel />, // <-- nur hier das 3D-Fenster
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
              {gallery3DProjects.map((project, index) => (
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
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-ice-400/0 group-hover:bg-ice-400/10 transition-colors duration-300" />
                    </div>

                    <div className="p-6">
                      <p className="text-white/60 mb-1 text-sm">
                        {project.subtitle}
                      </p>
                      <h3 className="text-white group-hover:text-ice-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        {projectDetails.map((project) => (
          <ProjectDetail key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
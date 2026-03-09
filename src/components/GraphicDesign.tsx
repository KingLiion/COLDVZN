import { motion } from 'motion/react';
import { HoverCard } from './HoverCard';
import { ExternalLink } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';

export const graphicDesignProjects = [
  {
    id: 'buzz-cups',
    title: 'BuzzCups - Party Game',
    subtitle: 'Product Design | Packaging & Branding',
    category: 'Product Design',
    image: '/assets/1.png',
  },
  {
    id: 'pfanner-iced-tea',
    title: 'Pfanner Iced Tea – Blueberry',
    subtitle: 'Packaging Design | Competition Concept',
    category: 'Packaging',
    image: '/assets/PfannerDesign2.3.png',
    description: `This packaging design draft was created as part of an open design competition by Pfanner. The basis of the project was a predefined template structure consisting of the Pfanner logo, a vertical dividing line, and the basic lettering. These elements formed the design framework within which a free, independent interpretation could be developed.

The goal of my design was to portray the blueberry flavor emotionally and visually powerfully – deliberately detached from the classic core range. The focus was on a strong taste association, dynamism, and a high level of recognizability. Through intense color contrasts, a dense illustrative imagery, and dynamic compositions, freshness, fruitiness, and energy were to be conveyed.

A central concept of the design is the two‑sided logic of the packaging: the design is split in the middle so that each side functions as an independent product view. The two glasses pick up this idea and ensure that each side is perceived as a complete, balanced composition on the shelf.

Visually, the design combines illustrative elements with typographic areas and textures. The background typography is not primarily intended for readability, but serves as a graphic device to reinforce the varietal identity. The result is a visually loud, experimental packaging developed specifically for a competition and concept context.

Strengths of the design

- Independent, illustrative brand interpretation
- Strong communication of taste and freshness
- Bold color and imagery with high attention factor
- Clear conceptual idea through the two‑sided design
- Conscious handling of predefined brand elements

Tools & implementation

Adobe Illustrator
Developed vector elements, typography, layout structure, and graphic details

Adobe Photoshop
Image editing, illustration, color corrections, textures, and compositing

Project context

This project is to be understood as a conceptual competition design. It shows my approach to working with fixed brand guidelines and deliberately interpreting them creatively without losing their function or recognizability.`,
  },
  {
    id: 'eco-tech',
    title: 'EcoTech Solutions',
    subtitle: 'Sustainable Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwxfHx8fDE3NjE1NjAzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

// detailed descriptions used below for the full-page layout
const graphicDesignDetails = [
  {
    id: 'buzz-cups',
    title: 'BuzzCups - The Party Game with Buzz',
    subtitle: 'Product Design | Packaging & Branding',
    category: 'Product Design',
    date: 'November 2024',
    description: `BuzzCups is an exciting, fast-paced party game combining skill, speed, and strategy. Players receive 6 colorful shot cups and must arrange them in specific formations according to cards drawn from a shuffled deck. The challenge is to build the correct formation, then buzz in before opponents do. Fast reflexes and accuracy are essential—buzzing with the wrong formation means losing a previously won card.

The game comes in two exciting variants: the Classic version with 2 dimensions (side-by-side and stacked arrangements), and the Extreme version featuring 4 additional challenging dimensions including pyramids, stacking order variations, upside-down configurations, and open-ended placements.

The design process encompassed the entire product ecosystem: game mechanics, visual communication through instruction cards, colorful and durable product design, and comprehensive packaging that clearly communicates the game's energy and fun factor.`,
    challenge: "Creating a cohesive visual identity for a complex game product that clearly communicates rules while maintaining excitement and appeal.",
    solution: "Developed a visual system with clear instruction cards, vibrant color-coded components, and packaging design that immediately conveys the game's fast-paced, party nature. Used dynamic composition and bold typography to create visual impact.",
    results: ['Complete product ecosystem designed', 'Clear game mechanics through visual communication', 'Engaging packaging design for market appeal'],
    images: [
      '/assets/1.png',
      '/assets/2.png',
      '/assets/3.png',
      '/assets/4.png',
      '/assets/5.png',
      '/assets/6.png',
      '/assets/7.png',
      '/assets/8.png',
    ],
    technologies: ['Illustrator', 'Photoshop', 'Product Design'],
  },
  {
    id: 'pfanner-iced-tea',
    title: 'Pfanner Iced Tea – Blueberry',
    subtitle: 'Packaging Design | Competition Concept',
    category: 'Packaging',
    date: 'September 2024',
    description: `This packaging design draft was created as part of an open design competition by Pfanner. The basis of the project was a predefined template structure consisting of the Pfanner logo, a vertical dividing line, and the basic lettering. These elements formed the design framework within which a free, independent interpretation could be developed.

The goal of my design was to portray the blueberry flavor emotionally and visually powerfully – deliberately detached from the classic core range. The focus was on a strong taste association, dynamism, and a high level of recognizability. Through intense color contrasts, a dense illustrative imagery, and dynamic compositions, freshness, fruitiness, and energy were to be conveyed.

A central concept of the design is the two‑sided logic of the packaging: the design is split in the middle so that each side functions as an independent product view. The two glasses pick up this idea and ensure that each side is perceived as a complete, balanced composition on the shelf.

Visually, the design combines illustrative elements with typographic areas and textures. The background typography is not primarily intended for readability, but serves as a graphic device to reinforce the varietal identity. The result is a visually loud, experimental packaging developed specifically for a competition and concept context.

Strengths of the design

- Independent, illustrative brand interpretation
- Strong communication of taste and freshness
- Bold color and imagery with high attention factor
- Clear conceptual idea through the two‑sided design
- Conscious handling of predefined brand elements

Tools & implementation

Adobe Illustrator
Developed vector elements, typography, layout structure, and graphic details

Adobe Photoshop
Image editing, illustration, color corrections, textures, and compositing

Project context

This project is to be understood as a conceptual competition design. It shows my approach to working with fixed brand guidelines and deliberately interpreting them creatively without losing their function or recognizability.`,
    challenge: 'Working within strict brand guidelines while still producing something visually distinctive.',
    solution: 'Exploited the two‑sided template to create a split composition and used bold colors to stand out.',
    results: ['Entered into competition', 'Positive feedback from peers'],
    images: ['/assets/PfannerDesign2.3.png', '/assets/icetea-Kamera.png'],
    technologies: ['Illustrator', 'Photoshop'],
  },
  {
    id: 'eco-tech',
    title: 'EcoTech Solutions',
    subtitle: 'Sustainable Brand Identity',
    category: 'Branding',
    date: 'June 2024',
    description: 'A branding package for a fictional eco‑technology startup, featuring leaf motifs and a clean sans-serif logotype.',
    challenge: 'Conveying innovation and sustainability without relying on clichés.',
    solution: 'Used a muted green palette and abstract geometric forms to suggest both circuitry and foliage.',
    results: ['Concept designs well received in class'],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwxfHx8fDE3NjE1NjAzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    technologies: ['Illustrator', 'Figma'],
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
                  id={project.id}
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
                        loading="lazy"
                        decoding="async"
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
                      <h3 className="text-white group-hover:text-ice-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </HoverCard>
              ))}
            </div>

            {/* Details sections mimic 3D Projects layout */}
            {graphicDesignDetails.map((project) => (
              <ProjectDetail key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    image: '/assets/1.webp',
  },
  {
    id: 'pfanner-iced-tea',
    title: 'Pfanner Iced Tea – Blueberry',
    subtitle: 'Packaging Design | Competition Concept',
    category: 'Packaging',
    image: '/assets/PfannerDesign2.3.webp',
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
    id: 'Party-Pong',
    title: 'Party-Pong – A Dynamic Twist on Beer Pong',
    subtitle: 'Game Design | Product Design | Packaging',
    category: 'Game & Product Design',
    image: '/assets/partypongspiel.webp',
  },
];

// detailed descriptions used below for the full-page layout
const graphicDesignDetails = [
  {
  id: 'buzz-cups',
  title: 'BuzzCups – A Fast-Paced Party Game',
  subtitle: 'Game Design | Product Design | Packaging',
  category: 'Game & Product Design',
  date: 'November 2024',
  description: `BuzzCups is a party game concept that I developed from the initial idea to the final product design. The project combines game mechanics, visual design, and product development into one cohesive experience.

The core gameplay revolves around speed, pattern recognition, and quick decision-making. Players receive six colorful cups and must arrange them according to formations shown on shuffled cards. Once a player completes the correct configuration, they buzz in to claim the card. However, buzzing with the wrong formation results in losing a previously won card, adding tension and strategy to the fast-paced gameplay.

Beyond the mechanics, I designed the complete visual identity of the game. This includes the card system that communicates the formations clearly, the colorful cup design, and the packaging that reflects the energetic and social nature of the game.

The game features two gameplay modes: a Classic version focusing on two-dimensional formations and an Extreme version introducing additional spatial challenges such as pyramids, stacking variations, upside-down placements, and more complex spatial configurations. The goal was to create a simple concept that becomes increasingly challenging and engaging as players progress.`,
  
  challenge: 'Developing a party game that is easy to understand but still dynamic and competitive, while designing a visual system that clearly communicates the gameplay mechanics. The challenge was balancing intuitive rules with visually clear card instructions and creating a cohesive product design that works both as a game and as a marketable product.',
  
  solution: 'I developed the core game mechanics, designed the card system that visually communicates the required cup formations, and created the full product design including packaging and branding. The cards were designed to quickly communicate spatial arrangements through clear visual cues, while the packaging uses bold colors and dynamic typography to reflect the fast-paced nature of the game. By designing every element—from gameplay to visual communication—I created a cohesive game experience that is both intuitive and visually engaging.',
  
  results: [
    'Complete original party game concept developed',
    'Custom card system designed for intuitive gameplay',
    'Full product and packaging design created',
    'Cohesive visual identity connecting gameplay and branding'
  ],
  
  images: [
    '/assets/1.webp',
    '/assets/2.webp',
    '/assets/3.webp',
    '/assets/4.webp',
    '/assets/5.webp',
    '/assets/6.webp',
    '/assets/7.webp',
    '/assets/8.webp',
  ],
  
  technologies: ['Illustrator', 'Photoshop', 'Product Design', 'Game Design'],
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
    images: ['/assets/PfannerDesign2.3.webp', '/assets/icetea-Kamera.webp'],
    technologies: ['Illustrator', 'Photoshop'],
  },
  {
  id: 'Party-Pong',
  title: 'Party-Pong – A Dynamic Twist on Beer Pong',
  subtitle: 'Visual Design | Packaging | Logo Design',
  category: 'Game & Product Design',
  date: 'March 2023',
  description: `Party-Pong is a playful card-based extension for Beer Pong, designed to add excitement and variety to the classic party game. While the gameplay actions were provided by the client, I was responsible for bringing each action to life visually, creating a cohesive and appealing experience.

The game consists of cards with unique actions that players perform before each throw. My role focused on designing these cards, ensuring each action was represented with clear, dynamic, and visually engaging graphics. Additionally, I created the full packaging and logo design, establishing a recognizable brand identity for the game.

Using Photoshop and Illustrator, I developed a visual language that balances fun, readability, and style. Each card communicates the action at a glance, while the packaging design conveys the energetic and social spirit of the game. The goal was to translate playful game mechanics into an intuitive and visually striking product that stands out in a party setting.`,
  
  challenge: 'Translating pre-defined game actions into a visual language that is immediately understandable, engaging, and cohesive with the brand identity. The challenge was to ensure that the cards were visually distinct, the packaging was attractive for retail, and the overall aesthetic aligned with the playful nature of the game.',

  solution: 'I designed each card to clearly communicate the corresponding action through illustrative graphics and dynamic layouts. The packaging and logo were developed to unify the visual identity, using bold typography, playful color schemes, and energetic composition. My design approach ensured that each element—from individual cards to the overall product—works together to enhance the player experience and the product’s market appeal.',
  
  results: [
    'Full visual design for all game cards completed',
    'Packaging and logo design created to establish brand identity',
    'Consistent and playful visual language applied across all assets',
    'Product visually communicates game mechanics and party energy effectively'
  ],
  
  images: [
    '/assets/partypongspiel.webp',
    '/assets/Partypongkarten-1.webp',
    '/assets/partypongkarten-2.webp',
    ,
  ],
  
  technologies: ['Illustrator', 'Photoshop', 'Product Design', 'Visual Communication'],
}
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

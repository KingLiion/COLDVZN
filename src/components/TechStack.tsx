import { motion } from 'motion/react';

interface TechItem {
  name: string;
  logo: string;
}

const tools: TechItem[] = [
  { name: '3ds Max', logo: '/assets/autodesk-3ds-max-product-icon-1282x.png' },
  { name: 'Adobe Creative Cloud', logo: '/assets/Adobe_Creative_Cloud_rainbow_icon.svg.png' },
  { name: 'Blender', logo: '/assets/Blender_logo_no_text.svg.png' },
  { name: 'Substance Painter', logo: '/assets/substance_painter.png' },
  { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
  { name: 'Canva', logo: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
];

// Create 3 rows with 5 items each by repeating the tools
const row1 = [tools[0], tools[1], tools[2], tools[3], tools[4]];
const row2 = [tools[5], tools[0], tools[1], tools[2], tools[3]];


export function TechStack() {
  return (
    <section className="relative py-20 px-6 bg-black">
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
            Software & Tools
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Professional tools used across my projects
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Row 1 - Normal */}
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem' }}>
            {row1.map((tech, index) => (
              <motion.div
                key={`row1-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center group"
                style={{ flex: '1 1 calc(20% - 1.6rem)' }}
              >
                <div className="w-24 h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-white/70 group-hover:text-ice-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - Offset */}
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', marginLeft: 'calc(10% + 1rem)' }}>
            {row2.map((tech, index) => (
              <motion.div
                key={`row2-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 5) * 0.1 }}
                className="flex flex-col items-center group"
                style={{ flex: '1 1 calc(20% - 1.6rem)' }}
              >
                <div className="w-24 h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-white/70 group-hover:text-ice-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}

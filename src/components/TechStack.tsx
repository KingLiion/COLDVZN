import { motion } from 'motion/react';

interface TechItem {
  name: string;
  logo: string;
}

const tools: TechItem[] = [
  { name: '3ds Max', logo: '/assets/autodesk-3ds-max-product-icon-1282x.png' },
  { name: 'Maya', logo: '/assets/Mayalogo.png' },
  { name: 'Blender', logo: '/assets/Blender_logo_no_text.svg.png' },
  { name: 'Substance Painter', logo: '/assets/painterlogo.png' },
  { name: 'Substance Designer', logo: '/assets/designerlogo.png' },
  { name: 'Unreal Engine', logo: '/assets/icons8-unreal-engine-500.png' },
  { name: 'Adobe Creative Cloud', logo: '/assets/Adobe_Creative_Cloud_rainbow_icon.svg.png' },
  { name: 'Figma', logo: '/assets/icons8-figma-480.png' },
  { name: 'Canva', logo: '/assets/canvalogo.png' },
  { name: 'MS Office', logo: '/assets/MSOffice.png' },
  { name: 'ZBrush', logo: '/assets/zbrush.png' },
];

export function TechStack() {
  return (
    <section className="relative py-32 px-6 bg-black">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12">

          {tools.map((tech, index) => (
            <motion.div
              key={tech.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col items-center group"
            >

              <div className="w-24 h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
    </section>
  );
}
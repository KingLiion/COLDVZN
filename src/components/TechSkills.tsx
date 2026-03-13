import { motion } from 'motion/react';

interface Skill {
  id: string;
  name: string;
  logo: string;
}

const skills: Skill[] = [
  {
    id: 'cinema4d',
    name: 'Cinema 4D',
    logo: 'https://cdn.worldvectorlogo.com/logos/cinema-4d-1.svg',
  },
  {
    id: 'blender',
    name: 'Blender',
    logo: 'https://cdn.worldvectorlogo.com/logos/blender-2.svg',
  },
  {
    id: 'houdini',
    name: 'Houdini',
    logo: 'https://cdn.worldvectorlogo.com/logos/houdini.svg',
  },
  {
    id: 'maya',
    name: 'Maya',
    logo: 'assets/mayalogo.webp',
  },
  {
    id: '3dsmax',
    name: '3DS Max',
    logo: 'https://cdn.worldvectorlogo.com/logos/autodesk-3ds-max.svg',
  },
  {
    id: 'substance-designer',
    name: 'Substance Designer',
    logo: 'https://cdn.worldvectorlogo.com/logos/substance-3d-designer.svg',
  },
  {
    id: 'substance-painter',
    name: 'Substance Painter',
    logo: 'https://cdn.worldvectorlogo.com/logos/substance-3d-painter.svg',
  },
  {
    id: 'zbrush',
    name: 'ZBrush',
    logo: 'https://cdn.worldvectorlogo.com/logos/zbrush.svg',
  },
  {
    id: 'octane-render',
    name: 'Octane Render',
    logo: 'https://cdn.worldvectorlogo.com/logos/otoy-octane-render.svg',
  },
  {
    id: 'arnold',
    name: 'Arnold',
    logo: 'https://www.arnoldrenderer.com/site/assets/files/2231/arn_icon_new-7@2x.webp',
  },
  {
    id: 'redshift',
    name: 'Redshift',
    logo: 'https://www.maxon.net/files/20210405150722_redshift-icon.svg',
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    logo: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg',
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    logo: 'https://cdn.worldvectorlogo.com/logos/adobe-illustrator-7.svg',
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
  },
  {
    id: 'ue5',
    name: 'Unreal Engine',
    logo: 'https://cdn.worldvectorlogo.com/logos/unreal-engine-1.svg',
  },
  {
    id: 'x-particles',
    name: 'X-Particles',
    logo: 'https://www.x-particles.com/images/favicon.ico',
  },
  {
    id: 'mantra',
    name: 'Mantra',
    logo: 'https://www.sidefx.com/wp-content/uploads/2024/02/mantra-extra-sm.svg',
  },
];

export function TechSkills() {
  return (
    <section className="relative py-12 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Logo Grid - 5 per row */}
        <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              className="group relative flex justify-center items-center"
            >
              {/* Logo Container - Very Small */}
              <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center relative">
                <motion.img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-full w-full object-contain filter opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-150"
                  loading="lazy"
                />
              </div>

              {/* Tooltip on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 2 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-ice-400 text-black text-xs font-medium rounded whitespace-nowrap pointer-events-none z-50"
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

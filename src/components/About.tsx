import { motion } from 'motion/react';
import { Sparkles, Layers, Palette, Camera, Code, Briefcase, GraduationCap, Download, FileText } from 'lucide-react';

const skills = [
  { icon: Layers, category: '3D Design', items: ['Blender', '3ds Max', 'Substance Tools', 'ZBrush', 'Unreal Engine'] },
  { icon: Palette, category: 'Graphic Design', items: ['Illustrator', 'Photoshop', 'Canva', 'Figma'] },
  { icon: Camera, category: 'Photography & Video Editing', items: ['Landscape', 'Architecture', 'Adobe Creative Suite'] },
  { icon: Code, category: 'AI & Development', items: ['Prompt Engineering',
  'Generative AI Workflows',
  'AI-Assisted Prototyping', 'WebGL'] },
];

const careerPath = [
  {
    type: 'work',
    year: '2025 - Present',
    title: 'VR Operator',
    company: 'Miniatur Wunderland – Yullbe',
    description: 'Guest experience management, technical operation of VR systems, maintenance, and daily operational leadership.',
  },
  {
    type: 'work',
    year: '2025',
    title: '3D Artist',
    company: 'Rückwand24 – VBS Digital GmbH',
    description: 'Creation of high-quality 3D visualizations and product designs for commercial client projects.',
  },
  {
    type: 'work',
    year: '2021 - 2022',
    title: 'Product Designer & Developer',
    company: 'BeerBaller GmbH',
    description: 'Designed and developed two innovative consumer products from concept to final production.',
  },
];

const educationPath = [
  {
    type: 'education',
    year: '2020 - 2024',
    title: 'Bachelor of Arts (Hons.)',
    company: 'SAE Institute Frankfurt / Middlesex University',
    description: 'Game Art & 3D Animation',
  },
  {
    type: 'education',
    year: '2019',
    title: 'University Entrance Qualification',
    company: 'Gymnasium',
    description: 'German Abitur',
  },
];

export function About() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-32 px-6">
      <div className="relative max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square">
              <img
                src="https://lh3.googleusercontent.com/d/1huhghJ0Ir_2WaRhOTf7UGT7PKytntEnB"
                alt="About Me"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-ice-400/20 border border-ice-400/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-ice-400" />
                  <span className="text-white text-sm">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white mb-6">Skills & Expertise</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-ice-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-ice-400/10 border border-ice-400/20 flex items-center justify-center mb-4 group-hover:bg-ice-400/20 group-hover:border-ice-400/40 transition-all">
                    <skill.icon size={24} className="text-ice-400" />
                  </div>

                  <h4 className="text-white mb-3 group-hover:text-ice-400 transition-colors">
                    {skill.category}
                  </h4>

                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-ice-400/50" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-white">My Story</h3>

            <p className="text-white/70">
              My name is Leon Kaltenschnee, a 3D artist and creative technologist based in Hamburg. 
              I hold a Bachelor of Arts in Game Art and 3D Animation from SAE Institute Frankfurt in collaboration with Middlesex University.
              During my studies and professional work, I developed a strong passion for building visually compelling 3D assets and immersive digital experiences.
            </p>

            <p className="text-white/70">
              My work focuses on combining technical precision with artistic detail. 
              From modeling and texturing to final presentation, I strive to create assets that feel believable, polished, and production-ready.
              These skills have been proven in real-world projects where I delivered visualizations and designs tailored to the needs of clients and commercial environments.
            </p>

            <p className="text-white/70">
              As a 3D Artist at Rückwand24, I created numerous 3D visualizations for commercial use, translating client ideas into high-quality digital assets.
              Previously, as a Product Designer and Developer at BeerBaller, I successfully designed and developed two innovative products and guided them from concept to final production.
            </p>

            <p className="text-white/70">
              Today I continue expanding my expertise in immersive technologies while working with large-scale VR systems at Yullbe in Miniatur Wunderland.
              This role allows me to combine technical understanding, storytelling, and user experience design within interactive environments.
            </p>

            <p className="text-white/70">
              Outside of my professional work, creativity remains a central part of my life.
              I have been playing the violin since childhood and enjoy photography, particularly capturing landscapes and architecture.
              Animation, games, and immersive storytelling continue to inspire my creative work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-ice-400" />
                Career
              </h3>

              <div className="space-y-6">
                {careerPath.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-ice-400/30"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-ice-400 border-4 border-black" />

                    <div className="pb-6">
                      <span className="text-ice-400 text-sm">{item.year}</span>
                      <h4 className="text-white mt-1">{item.title}</h4>
                      <p className="text-white/60 text-sm mt-1">{item.company}</p>
                      <p className="text-white/50 text-sm mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-ice-400" />
                Education
              </h3>

              <div className="space-y-6">
                {educationPath.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-ice-400/30"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-ice-400 border-4 border-black" />

                    <div className="pb-6">
                      <span className="text-ice-400 text-sm">{item.year}</span>
                      <h4 className="text-white mt-1">{item.title}</h4>
                      <p className="text-white/60 text-sm mt-1">{item.company}</p>
                      <p className="text-white/50 text-sm mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        <div className="mt-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-medium text-white mb-6">
              Documents & References
            </h3>

            <p className="text-white/70 max-w-2xl mx-auto">
              Download my resume and professional references here.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Resume Download",
                description: "My detailed professional background and qualifications.",
                pdfUrl: "/assets/Lebenslauf.pdf",
              },
              {
                title: "Work Reference Download",
                description: "Professional references and employment certificates.",
                pdfUrl: "/assets/Arbeitszeugnis_Leon Kaltenschnee_signed (3).pdf",
              }
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative flex flex-col items-center p-6 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
                style={{ boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
              >
                <div className="relative w-full aspect-[3/4] max-w-[340px] bg-black/60 rounded-xl mb-6 flex flex-col items-center justify-center border border-white/10 overflow-hidden shadow-2xl">
                  <iframe
                    src={`${doc.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-none pointer-events-none"
                    title={doc.title}
                  />

                  <div className="absolute inset-0 z-10" />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-md border border-red-500/20 flex items-center gap-1 z-20 backdrop-blur-md">
                    <FileText size={12} />
                    PDF
                  </div>
                </div>

                <div className="text-center z-10 flex flex-col items-center w-full">
                  <h4 className="text-xl text-white font-medium mb-2 group-hover:text-ice-200 transition-colors duration-300">
                    {doc.title}
                  </h4>

                  <p className="text-white/50 text-sm max-w-[280px] mb-6 px-4">
                    {doc.description}
                  </p>

                  <a
                    href={doc.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-ice-400/10 border border-ice-400/20 text-ice-400 hover:bg-ice-400 hover:text-black hover:scale-105 transition-all duration-300 font-medium text-sm"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
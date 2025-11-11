import { motion } from 'motion/react';
import { Sparkles, Layers, Palette, Camera, Code, Briefcase, GraduationCap } from 'lucide-react';

// ⭐ HIER KANNST DU DEINE SKILLS/FERTIGKEITEN ANPASSEN
const skills = [
  { icon: Layers, category: '3D Design', items: ['Blender', '3ds Max', 'Substance Tools', 'ZBrush', 'Unreal Engine'] },
  { icon: Palette, category: 'Graphic Design', items: ['Illustrator', 'Photoshop', 'Canva', 'Figma'] },
  { icon: Camera, category: 'Photography', items: ['Landscape', 'Architecture', 'Street'] },
  { icon: Code, category: 'Development', items: ['React', 'Three.js', 'WebGL', 'GLSL'] },
];

// ⭐ HIER KANNST DU DEINEN BERUFSWEG ANPASSEN
const careerPath = [
  {
    type: 'work',
    year: '2023 - 2024',
    title: 'Praktikum',
    company: 'Rückwand24',
    description: '3D-Visualisierungen und Design für Kundenprojekte',
  },
  {
    type: 'work',
    year: '2021 - 2022',
    title: 'Produktdesigner & Entwickler',
    company: 'BeerBaller',
    description: 'Entwicklung von zwei innovativen Produkten von Konzept bis Fertigstellung',
  },
];

// ⭐ HIER KANNST DU DEINEN BILDUNGSWEG ANPASSEN
const educationPath = [
  {
    type: 'education',
    year: '2019 - 2022',
    title: 'Bachelor of Arts',
    company: 'SAE Institut Frankfurt',
    description: 'Game Art & 3D Animation',
  },
  {
    type: 'education',
    year: '2019',
    title: 'Abitur',
    company: 'Gymnasium',
    description: 'Allgemeine Hochschulreife',
  },
];

export function About() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-32 px-6">
      <div className="relative max-w-7xl mx-auto">
        {/* Haupttitel */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          About Me
        </motion.h2>

        {/* Oberer Bereich: Bild und Skills nebeneinander */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Linke Seite - Bild */}
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
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-ice-400/20 border border-ice-400/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-ice-400" />
                  <span className="text-white text-sm">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rechte Seite - Skills */}
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
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-ice-400/10 border border-ice-400/20 flex items-center justify-center mb-4 group-hover:bg-ice-400/20 group-hover:border-ice-400/40 transition-all">
                    <skill.icon size={24} className="text-ice-400" />
                  </div>

                  {/* Category */}
                  <h4 className="text-white mb-3 group-hover:text-ice-400 transition-colors">
                    {skill.category}
                  </h4>

                  {/* Skills List */}
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

        {/* Unterer Bereich: Text und Timeline nebeneinander */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Linke Seite - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-white">Meine Geschichte</h3>
            
            <p className="text-white/70">
              Mein Name ist Leon Kaltenschnee, ich bin 23 Jahre alt und lebe in Hamburg. 
              Nach meinem Abitur, das ich 2019 abgeschlossen habe, habe ich meinen Bachelor of Arts in Game Art und 3D Animation am SAE Institut in Frankfurt erworben. 
              Während meines Studiums habe ich meine Leidenschaft für die Erstellung von 3D-Assets entdeckt. 
              Besonders die Liebe zu den kleinen Details – sei es bei der Texturierung oder dem Feinschliff von Modellen – hat mir gezeigt, wie wichtig Präzision und Ästhetik in der digitalen Kunst sind.
            </p>
            
            <p className="text-white/70">
              Als 3D-Artist habe ich in verschiedenen Projekten wertvolle Erfahrungen gesammelt. Eine besonders prägende Zeit war mein Praktikum bei Rückwand24, wo ich an einer Vielzahl von Projekten beteiligt war. Dort konnte ich meine gestalterischen Fähigkeiten einbringen und Designs sowie Visualisierungen entwickeln, die auf die Wünsche der Kunden abgestimmt waren.
            </p>
            
            <p className="text-white/70">
              Zuvor war ich als Produktdesigner und Entwickler bei BeerBaller tätig. In diesem Rahmen habe ich zwei innovative Produkte gestaltet und von der Idee bis zur Fertigstellung begleitet. Durch meine Mediationsausbildung während der Schulzeit habe ich gelernt, effektiv und lösungsorientiert im Team zu kommunizieren.
            </p>

            <p className="text-white/70">
              In meiner Freizeit spiele ich seit meiner Kindheit Geige und fotografiere leidenschaftlich gerne. Ich bin fasziniert von Animationsfilmen und der kreativen Vielfalt im Gaming-Bereich, die meine Leidenschaft für immersive Erlebnisse wecken.
            </p>
          </motion.div>

          {/* Rechte Seite - Timeline (Berufsweg & Bildungsweg) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Berufsweg */}
            <div>
              <h3 className="text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-ice-400" />
                Berufsweg
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
                    {/* Timeline dot */}
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

            {/* Bildungsweg */}
            <div>
              <h3 className="text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-ice-400" />
                Bildungsweg
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
                    {/* Timeline dot */}
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
      </div>
    </section>
  );
}

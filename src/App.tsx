import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { GraphicDesign } from './components/GraphicDesign';
import { Photography } from './components/Photography';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Snowfall } from './components/Snowfall';

export default function App() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Dezenter Schneien-Effekt */}
      <Snowfall />
      
      <Navigation />
      <Hero />
      
      {/* Reduzierter Abstand zwischen Sektionen */}
      <div className="-mt-32">
        <Projects />
      </div>
      
      <GraphicDesign />
      <Photography />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40">
            © 2025 Leon Kaltenschnee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

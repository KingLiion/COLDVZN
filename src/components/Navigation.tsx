import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: '3d-projects', label: '3D Projects' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'photography', label: 'Photography' },
  { id: 'about', label: 'About Me' },
];

export function Navigation() {
  const [activeItem, setActiveItem] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-based section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Desktop Navigation
  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className="relative px-2 py-2 rounded-full backdrop-blur-3xl border border-white/10"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -1px 1px rgba(0, 0, 0, 0.1),
              0 1px 0 rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          {/* Subtle shimmer effect */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)',
            }}
          />

          <ul className="relative flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                {activeItem === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        linear-gradient(180deg, 
                          #d4f8ff 0%, 
                          #64d2ff 40%, 
                          #1ec8ff 100%
                        )
                      `,
                      boxShadow: `
                        0 2px 12px rgba(100, 210, 255, 0.6),
                        inset 0 1px 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 1px rgba(0, 0, 0, 0.15),
                        0 0 20px rgba(100, 210, 255, 0.4),
                        0 0 40px rgba(30, 200, 255, 0.2)
                      `,
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 30 
                    }}
                  />
                )}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-200 ${
                    activeItem === item.id
                      ? 'text-black'
                      : 'text-white/70 hover:text-white/90'
                  }`}
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Burger Menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 right-4 z-50 md:hidden"
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative p-3 rounded-2xl backdrop-blur-md text-white transition-all duration-300 hover:scale-105 overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(224, 242, 254, 0.15))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 4px 16px rgba(56, 189, 248, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
            }}
          />
          <span className="relative z-10">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl transition-all duration-200 ${
                    activeItem === item.id
                      ? 'text-ice-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

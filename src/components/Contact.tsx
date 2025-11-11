import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Palette } from 'lucide-react';

// ⭐ HIER KANNST DU DEINE KONTAKTDATEN ANPASSEN
const contactInfo = {
  email: 'coldsnowleon@gmail.com',
  phone: '+49 172 1395432',
  location: 'Hamburg, Germany',
};

// ⭐ HIER KANNST DU DEINE SOCIAL MEDIA LINKS ANPASSEN
const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/leoon.2001',
    color: '#E4405F',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/yourprofile',
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yourusername',
    color: '#fff',
  },
  {
    name: 'ArtStation',
    icon: Palette,
    url: 'https://artstation.com/leonkaltenschnee',
    color: '#13AFF0',
  },
];

export function Contact() {
  return (
    <section className="relative bg-black border-t border-white/10 py-20 md:py-32 px-4 md:px-6">


      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-6 bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              Let's Connect
            </h2>
            <p className="text-white/70 mb-8 max-w-lg">
              Interested in collaborating or have a project in mind? Feel free to reach out. 
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-white/80 hover:text-ice-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-ice-400/10 group-hover:border-ice-400/30 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-0.5">Email</div>
                  <div className="text-white">{contactInfo.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-white/80 hover:text-ice-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-ice-400/10 group-hover:border-ice-400/30 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-0.5">Phone</div>
                  <div className="text-white">{contactInfo.phone}</div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 text-white/80"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-0.5">Location</div>
                  <div className="text-white">{contactInfo.location}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Follow Me
            </h3>
            <p className="text-white/70 mb-8">
              Stay connected and follow my latest work on social media
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-ice-400/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ 
                      background: `radial-gradient(circle at center, ${social.color}15, transparent 70%)` 
                    }}
                  />

                  <div className="relative">
                    <social.icon 
                      size={28} 
                      className="text-white/70 group-hover:text-white transition-colors mb-3"
                      style={{ color: `${social.color}` }}
                    />
                    <div className="text-white group-hover:text-ice-400 transition-colors">
                      {social.name}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Bilder optimiert für keine Lücken
const photographyImages = [
  // Row 1: horizontal, vertical, horizontal, vertical
  {
    url: "https://lh3.googleusercontent.com/d/1bSsMhHzKJGfPp-bXVv4ehGGvFobOBO97",
    title: "Neroberg",
    category: "Architecture",
    orientation: "vertical",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1ImVb1zVINpGPH9moxhwKJjbbetvcdI5B",
    title: "Waterfall",
    category: "Landscape",
    orientation: "vertical",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1N5gLl19fRERAIciBBUWrwcE8D1ARUnsD",
    title: "German Beach",
    category: "Nature",
    orientation: "vertical",
  },
  {
    url: "https://lh3.googleusercontent.com/d/19FeM1Tf9VoROxwZkSSsJOg3m6-AhHgQs",
    title: "Bee",
    category: "Nature",
    orientation: "vertical",
  },
  // Row 2: vertical, horizontal, vertical, horizontal
  {
    url: "https://lh3.googleusercontent.com/d/1bVYNychp_7EU5I_H6zCE9KcUgDWpzyIG",
    title: "Louvre",
    category: "Architecture",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1TVltU7xRcgmSuEpCtmAQFzz-JKEDosG6",
    title: "Golden Hour",
    category: "Nature",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1Yvf59uI-ZyqS1vD0mvkxOAlvqj6P7FK2",
    title: "Magic Parc",
    category: "Landscape",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1bcL1zcVpkHWgjpTRterwUdDqSpGJ9xc4",
    title: "Train Lines",
    category: "Architecture",
    orientation: "horizontal",
  },
  // Row 3: horizontal, vertical, horizontal, vertical
  {
    url: "https://lh3.googleusercontent.com/d/1i6vNeLnUVMnvWm9J2W23ZbGbLjDM9gi_",
    title: "SOS",
    category: "City",
    orientation: "vertical",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1mb5mSRnFnF_DXuZJqKe6jj6usHn7VRI8",
    title: "Tower View",
    category: "City",
    orientation: "vertical",
  },
  {
    url: "https://lh3.googleusercontent.com/d/11Ivgtwm8bCG4GRwcorXskCSfNBg1Ng1X",
    title: "Brooklyn Bridge",
    category: "Architecture",
    orientation: "vertical",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1axpn6rl36m7Jt76of-rJ1rbNkx_566rF",
    title: "Bella",
    category: "Portrait",
    orientation: "vertical",
  },
  // Row 4: vertical, horizontal, vertical, horizontal
  {
    url: "https://lh3.googleusercontent.com/d/1bgoZd3_VHzVsZG_1Na23Pes01grnLtUw",
    title: "Subway Hamburg",
    category: "Architecture",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1BW79ypsJeH-4_wANwQfiIOlfR31WHDBC",
    title: "Manhatten",
    category: "City",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/19rQBQ4VA4yZhcY9Ux_r5onBaQoRei1b9",
    title: "Manhatten Bridge",
    category: "Architecture",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1ccZPkQkigWzduUFh8I8uwOCHqh_jHkcH",
    title: "Cherry flowers",
    category: "Nature",
    orientation: "horizontal",
  },

  // Row 4: vertical, horizontal, vertical, horizontal
  {
    url: "https://lh3.googleusercontent.com/d/1bgoZd3_VHzVsZG_1Na23Pes01grnLtUw",
    title: "Subway Hamburg",
    category: "Architecture",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1BW79ypsJeH-4_wANwQfiIOlfR31WHDBC",
    title: "Manhatten",
    category: "City",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/19rQBQ4VA4yZhcY9Ux_r5onBaQoRei1b9",
    title: "Manhatten Bridge",
    category: "Architecture",
    orientation: "horizontal",
  },
  {
    url: "https://lh3.googleusercontent.com/d/1ccZPkQkigWzduUFh8I8uwOCHqh_jHkcH",
    title: "Cherry flowers",
    category: "Nature",
    orientation: "horizontal",
  },

  
];

export function Photography() {
  const [selectedImage, setSelectedImage] = useState<
    number | null
  >(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + photographyImages.length) %
          photographyImages.length,
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage + 1) % photographyImages.length,
      );
    }
  };

  // Organize in rows of 4
  const rows = [];
  for (let i = 0; i < photographyImages.length; i += 4) {
    rows.push(photographyImages.slice(i, i + 4));
  }

  const renderImageCard = (
    image: (typeof photographyImages)[0],
    globalIndex: number,
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
    <motion.div
      key={globalIndex}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (globalIndex % 4) * 0.05,
      }}
      onClick={() => setSelectedImage(globalIndex)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-xl overflow-hidden cursor-pointer bg-zinc-900"
      style={{
        aspectRatio:
          image.orientation === "vertical" ? "9/16" : "16/9",
      }}
    >
      {/* Image */}
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-2 py-1 rounded-md bg-ice-400/20 border border-ice-400/30 text-ice-400 text-xs mb-2">
            {image.category}
          </span>
          <h3
            className="text-white"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            {image.title}
          </h3>
        </div>
      </div>

      {/* Einheitlicher eisiger blau-türkiser Rahmen - breiter beim Hover */}
      <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 rounded-xl transition-all duration-300"
          style={{
            border: isHovered ? '3px solid rgba(100, 210, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: isHovered 
              ? '0 0 40px rgba(100, 210, 255, 0.7), 0 0 80px rgba(30, 200, 255, 0.5), inset 0 0 30px rgba(100, 210, 255, 0.2)' 
              : 'none',
          }}
        />
      </div>
    </motion.div>
    );
  };

  return (
    <section
      id="photography"
      className="relative min-h-screen bg-black py-32 px-4 md:px-6"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="mb-4 bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Photography
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Capturing moments through the lens - a collection of
            my photographic work
          </p>
        </motion.div>

        {/* Row-based Grid - No Gaps */}
        <div className="space-y-3 md:space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            >
              {row.map((image, colIndex) => {
                const globalIndex = rowIndex * 4 + colIndex;
                return renderImageCard(image, globalIndex);
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto"
              style={{
                aspectRatio:
                  photographyImages[selectedImage]
                    .orientation === "vertical"
                    ? "9/16"
                    : "16/9",
                maxHeight: "85vh",
              }}
            >
              <img
                src={photographyImages[selectedImage].url}
                alt={photographyImages[selectedImage].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image info */}
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1.5 rounded-full bg-ice-400/20 border border-ice-400/30 text-ice-400 text-sm mb-2">
                {photographyImages[selectedImage].category}
              </span>
              <h3 className="text-white text-2xl">
                {photographyImages[selectedImage].title}
              </h3>
              <p className="text-white/50 mt-2">
                {selectedImage + 1} / {photographyImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
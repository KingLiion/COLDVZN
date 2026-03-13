import { motion } from "motion/react";

interface TechItem {
  name: string;
  logo: string;
}

const tools: TechItem[] = [
  { name: "3ds Max", logo: "/assets/autodesk-3ds-max-product-icon-1282x.webp" },
  { name: "Maya", logo: "/assets/Mayalogo.webp" },
  { name: "Blender", logo: "/assets/Blender_logo_no_text.svg.webp" },
  { name: "Substance Painter", logo: "/assets/painterlogo.webp" },
  { name: "Substance Designer", logo: "/assets/designerlogo.webp" },
  { name: "Unreal Engine", logo: "/assets/icons8-unreal-engine-500.webp" },
  { name: "Adobe Creative Cloud", logo: "/assets/Adobe_Creative_Cloud_rainbow_icon.svg.webp" },
  { name: "Figma", logo: "/assets/icons8-figma-480.webp" },
  { name: "Canva", logo: "/assets/canvalogo.webp" },
  { name: "MS Office", logo: "/assets/MSOffice.webp" },
  { name: "ZBrush", logo: "/assets/zbrush.webp" }
];


/* --------- Funktion erzeugt Reihen im Muster 5 / 3 / 5 / 3 --------- */

function createRows(items: TechItem[]) {
  const rows: TechItem[][] = [];
  let index = 0;
  let fiveRow = true;

  while (index < items.length) {
    const size = fiveRow ? 5 : 3;
    rows.push(items.slice(index, index + size));
    index += size;
    fiveRow = !fiveRow;
  }

  return rows;
}

const rows = createRows(tools);


/* ---------------- COMPONENT ---------------- */

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
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Software & Tools
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Professional tools used across my projects
          </p>
        </motion.div>


        <div className="space-y-12">

          {rows.map((row, rowIndex) => {

            const offset = rowIndex % 2 === 1;

            return (
              <div
                key={rowIndex}
                className="flex justify-center gap-12"
                style={{ marginLeft: offset ? "120px" : "0px" }}
              >

                {row.map((tech, index) => (

                  <motion.div
                    key={tech.name + index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08
                    }}
                    className="flex flex-col items-center group w-32"
                  >

                    <div className="w-20 h-20 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">

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
            );
          })}

        </div>

      </div>
    </section>
  );
}
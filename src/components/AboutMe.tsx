import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";

export function AboutMe() {
    const documents = [
        {
            title: "Lebenslauf Download",
            description: "Mein detaillierter Werdegang und meine Qualifikationen.",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // TODO: Replace this link with the real CV PDF URL
            previewUrl: "https://lh3.googleusercontent.com/d/1_TIf1kH25k5tV2iA9j0mO5H6TpHhW91N", // Generic PDF icon placeholder
        },
        {
            title: "Arbeitszeugnis Download",
            description: "Meine bisherigen Referenzen und Arbeitszeugnisse.",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // TODO: Replace this link with the real reference PDF URL
            previewUrl: "https://lh3.googleusercontent.com/d/1_TIf1kH25k5tV2iA9j0mO5H6TpHhW91N", // Generic PDF icon placeholder
        }
    ];

    return (
        <section id="about-me" className="relative min-h-screen bg-black py-32 px-4 md:px-6 flex flex-col justify-center">
            <div className="relative max-w-5xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2
                        className="mb-6 bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                    >
                        About Me
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                        Erfahre mehr über meinen beruflichen Hintergrund und meine bisherigen Erfahrungen.
                    </p>
                </motion.div>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {documents.map((doc, index) => (
                        <motion.a
                            key={index}
                            href={doc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative flex flex-col items-center p-8 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
                            style={{
                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                            }}
                        >
                            {/* Hover Effects */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at center, rgba(100, 210, 255, 0.1) 0%, transparent 70%)',
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    border: '1px solid rgba(100, 210, 255, 0.3)',
                                    boxShadow: 'inset 0 0 20px rgba(100, 210, 255, 0.1)',
                                }}
                            />

                            {/* Preview Window (Document Icon/Visual) */}
                            <div className="w-full aspect-[3/4] max-w-[280px] bg-black/60 rounded-xl mb-8 flex flex-col items-center justify-center relative border border-white/10 group-hover:border-ice-400/30 transition-colors duration-300 overflow-hidden shadow-2xl">
                                {/* PDF Label Tag */}
                                <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-md border border-red-500/20 flex items-center gap-1 z-10 backdrop-blur-md">
                                    <FileText size={12} />
                                    PDF
                                </div>

                                {/* Centered Document Icon */}
                                <FileText size={64} className="text-white/20 group-hover:text-ice-400/50 transition-colors duration-500 mb-4" />
                                <div className="w-3/4 h-2 bg-white/10 rounded-full mb-3" />
                                <div className="w-2/3 h-2 bg-white/10 rounded-full mb-3" />
                                <div className="w-5/6 h-2 bg-white/10 rounded-full mb-3" />
                                <div className="w-1/2 h-2 bg-white/10 rounded-full" />

                                {/* Hover Overlay Download Icon */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full bg-ice-400/20 border border-ice-400/30 flex items-center justify-center text-ice-400 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <Download size={28} />
                                    </div>
                                </div>
                            </div>

                            {/* Text Description */}
                            <div className="text-center z-10">
                                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-ice-200 transition-colors duration-300">
                                    {doc.title}
                                </h3>
                                <p className="text-white/50 text-sm max-w-[280px]">
                                    {doc.description}
                                </p>

                                {/* Hint on where to change the link */}
                                <div className="mt-4 text-xs text-ice-400/50 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                    {`<!-- Change href here -->`}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

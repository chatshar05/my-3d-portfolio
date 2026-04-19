import { motion , Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-10 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-12 text-white border-l-4 border-indigo-500 pl-6"
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-10">
            I am a B.Tech Computer Science student at Bennett University (2024–2028) 
            passionate about building modern web applications and AI-powered solutions. 
            I enjoy working on full-stack development, Generative AI integrations, and 
            scalable systems while continuously improving my DSA, backend, and cloud skills.
          </p>
          
          <h3 className="text-2xl font-semibold mb-6 text-white">Extras</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors"
            >
              <span className="block text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">Interests</span>
              <span className="text-slate-300 text-lg">Full Stack Development, Generative AI, System Design</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors"
            >
              <span className="block text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">Hobbies</span>
              <span className="text-slate-300 text-lg">Building tech projects, Exploring new technologies, Fitness</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

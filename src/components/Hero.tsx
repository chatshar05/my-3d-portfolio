import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-24 relative max-w-7xl mx-auto">
      {/* Left side: Text Layout */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 w-full mb-12 md:mb-0 mt-20 md:mt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-center md:text-left text-white mb-6"
        >
          Chaitanya Sharma
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-indigo-400 font-light text-center md:text-left"
        >
          Full Stack & GenAI Developer
        </motion.h2>
      </div>

      {/* Right side: Profile Image */}
      <div className="flex-1 w-full h-[50vh] md:h-[90vh] flex justify-center items-center z-10 relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border border-indigo-500/30 shadow-[0_0_80px_rgba(99,102,241,0.2)] bg-slate-900/50 backdrop-blur-sm p-2"
        >
          <img 
            src="../../public/profile.jpeg" 
            alt="Chaitanya Sharma" 
            className="w-full h-full object-cover rounded-full bg-slate-800" 
            onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-slate-500 rounded-full">CS</div>';
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center animate-bounce left-1/2 -translate-x-1/2"
      >
        <span className="text-sm tracking-widest uppercase text-slate-400 mb-2 font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </motion.div>
    </section>
  );
}

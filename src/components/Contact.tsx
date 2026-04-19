import { motion , Variants } from 'framer-motion';
import { Mail, GraduationCap, Calendar, MapPin } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-10 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full flex flex-col gap-12"
      >
        {/* Education - Full Width Container */}
        <motion.div variants={itemVariants} className="w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-full bg-slate-900/50 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-indigo-500/30 transition-colors">
            
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <GraduationCap className="w-8 h-8 text-indigo-400" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white">Education</h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                  B.Tech in Computer Science Engineering
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-lg font-medium text-slate-300">
                  <span className="flex items-center gap-2">
                     <MapPin className="w-5 h-5 text-indigo-400" />
                     Bennett University
                  </span>
                  <span className="flex items-center gap-2">
                     <Calendar className="w-5 h-5 text-purple-400" />
                     2024 – 2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info - Full Width Container */}
        <motion.div variants={itemVariants} className="w-full bg-gradient-to-br from-indigo-950/40 to-slate-900/80 backdrop-blur-xl border border-white/5 p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Aesthetic background flares */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Let's Connect</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <a href="mailto:your-email@example.com" className="group relative flex flex-col items-center justify-center gap-4 p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2">
                 <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700 group-hover:bg-indigo-600 group-hover:scale-110 transition-all shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                 </div>
                 <span className="text-xl font-bold text-slate-200 group-hover:text-white">Email</span>
                 <span className="text-sm text-slate-400">your-email@example.com</span>
              </a>
              
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="group relative flex flex-col items-center justify-center gap-4 p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2">
                 <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700 group-hover:bg-indigo-600 group-hover:scale-110 transition-all shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                 </div>
                 <span className="text-xl font-bold text-slate-200 group-hover:text-white">GitHub</span>
                 <span className="text-sm text-slate-400">@yourusername</span>
              </a>
              
              <a href="https://www.linkedin.com/in/chaitanya-sharma-11b34b2b4" target="_blank" rel="noreferrer" className="group relative flex flex-col items-center justify-center gap-4 p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2">
                 <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700 group-hover:bg-indigo-600 group-hover:scale-110 transition-all shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                 </div>
                 <span className="text-xl font-bold text-slate-200 group-hover:text-white">LinkedIn</span>
                 <span className="text-sm text-slate-400">Chaitanya Sharma</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-24 text-slate-600 text-sm font-semibold tracking-widest uppercase"
      >
        © 2026 Chaitanya Sharma
      </motion.footer>
    </section>
  );
}

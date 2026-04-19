import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Resolve-It — Complaint Management System',
    description: 'A full-stack platform where students can register complaints and administrators can manage and resolve them efficiently through dedicated dashboards and tracking systems.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '(add link)',
    live: '(add link)'
  },
  {
    title: 'AI Powered DSA Learning Platform',
    description: 'An interactive platform to learn Data Structures and Algorithms with AI-powered hints, code explanations, interview simulation, and personalized learning roadmaps.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Generative AI APIs'],
    github: '(add link)'
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-10 max-w-5xl mx-auto overflow-hidden">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-12 text-white border-l-4 border-indigo-500 pl-6"
        >
          Featured <span className="text-indigo-400">Projects</span>
        </motion.h2>
        
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-md border border-white/10 hover:border-indigo-500/40 p-8 md:p-10 rounded-3xl group transition-all duration-500 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} className="px-5 py-2 bg-slate-800 text-white rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors shadow-lg">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-lg">
                      Live App
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

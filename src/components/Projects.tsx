
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profileData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <div className="glass-panel p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/30 group-hover:scale-150 transition-all duration-700"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }} 
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20 group-hover:border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                      <FolderGit2 className="w-8 h-8" />
                    </motion.div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-100 mb-3 relative z-10">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow relative z-10 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {project.techStack.map((tech, i) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="text-xs font-mono text-cyan-300 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-400/20 shadow-[0_0_10px_rgba(0,240,255,0.1)] cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

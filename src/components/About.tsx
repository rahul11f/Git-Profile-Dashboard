
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const getIconForCategory = (category: string) => {
  switch (category) {
    case 'Languages': return <Code2 className="w-6 h-6 text-cyan-400" />;
    case 'Frontend': return <Layout className="w-6 h-6 text-purple-400" />;
    case 'Backend': return <Terminal className="w-6 h-6 text-green-400" />;
    case 'Database': return <Database className="w-6 h-6 text-blue-400" />;
    default: return <Code2 className="w-6 h-6 text-gray-400" />;
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">About & Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full opacity-50 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <Terminal className="text-cyan-400" />
              <span>System.out.println("Hello World");</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {profileData.about}
            </p>
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
               <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-sm text-gray-300">Open to Opportunities</span>
               </div>
               <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2">
                  <span className="text-sm text-gray-300">Based in Lucknow, India</span>
               </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {profileData.skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                whileHover={{ scale: 1.05 }}
                className="glass-panel p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {getIconForCategory(skillGroup.category)}
                  <h4 className="font-semibold text-gray-100">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <motion.span 
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 hover:bg-cyan-500/20 hover:text-cyan-100 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

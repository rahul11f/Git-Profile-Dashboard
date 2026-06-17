
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Journey so far</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-4 pl-8 space-y-10">
              {profileData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300"></div>
                  <div className="glass-panel p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
                    <h4 className="text-xl font-bold text-gray-100">{exp.role}</h4>
                    <h5 className="text-lg text-purple-400 mb-2">{exp.company}</h5>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-4 pl-8 space-y-10">
              {profileData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)] group-hover:bg-pink-500 group-hover:scale-125 transition-all duration-300"></div>
                  <div className="glass-panel p-6 rounded-xl hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors"></div>
                    <h4 className="text-xl font-bold text-gray-100">{edu.degree}</h4>
                    <h5 className="text-lg text-pink-400 mb-2">{edu.institution}</h5>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

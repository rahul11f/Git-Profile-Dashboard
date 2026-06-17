
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, Calendar } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full opacity-50 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={2500}
              >
                <div className="glass-panel p-1 rounded-xl group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="bg-black/80 rounded-lg p-5 relative z-10 h-full flex flex-col border border-white/5 group-hover:border-yellow-400/30 transition-colors">
                    <Award className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="font-bold text-gray-100 mb-2 leading-tight flex-grow">{cert.title}</h3>
                    <div className="text-sm text-gray-400 flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                      <span>{cert.issuer}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {cert.date}</span>
                    </div>
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

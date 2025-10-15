import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Rocket, Users } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      icon: Rocket,
      title: 'Full-Stack Development',
      description: 'Built full-stack applications using MERN and Fastify',
      color: 'from-blue-500 to-cyan-500',
      year: '2023-2024',
    },
    {
      icon: Code,
      title: 'AI Assistant Backend',
      description: 'Developed an AI assistant backend using Python and Llama',
      color: 'from-purple-500 to-pink-500',
      year: '2024',
    },
    {
      icon: Award,
      title: 'Rollout Clone Project',
      description: 'Created a Rollout Clone using MERN stack',
      color: 'from-green-500 to-emerald-500',
      year: '2024',
    },
    {
      icon: Users,
      title: 'Tech Community',
      description: 'Participated in school tech clubs and coding challenges',
      color: 'from-orange-500 to-red-500',
      year: '2022-Present',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 left-20 animate-pulse delay-1000"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Experience & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
                    ></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <exp.icon className="text-white" size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <span className="text-sm text-gray-400 font-medium">{exp.year}</span>
                          </div>
                          <p className="text-gray-400">{exp.description}</p>
                        </div>
                      </div>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        className={`h-1 bg-gradient-to-r ${exp.color} rounded-full mt-4 origin-left`}
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-gray-900 shadow-lg relative z-10`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color}`}
                    ></motion.div>
                  </motion.div>
                </div>

                <div className="flex-1 w-full lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-8 py-6">
            <p className="text-gray-300 text-lg font-medium">
              Continuously building, learning, and growing as a developer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

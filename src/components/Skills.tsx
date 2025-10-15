import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Server,
  Database,
  Globe,
  Lightbulb,
  GitBranch,
} from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Angular.js'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'C#', 'C++', 'C'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['MongoDB', 'PostgreSQL', 'Fantasy.js'],
    },
    {
      title: 'Tools & Other',
      icon: GitBranch,
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'Firebase', 'REST APIs', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-1000"></div>
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                      }}
                      className="px-4 py-2 bg-gradient-to-br from-gray-700/80 to-gray-900/80 rounded-lg text-gray-200 font-medium text-sm border border-gray-600/30 hover:border-blue-500/50 transition-all cursor-pointer backdrop-blur-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.15 + 0.3 }}
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-6 origin-left`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-8 py-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Lightbulb className="text-yellow-400" size={24} />
              <Code2 className="text-blue-400" size={24} />
            </div>
            <p className="text-gray-300 text-lg">
              Always learning, always growing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

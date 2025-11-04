import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pic from "../img/546512906_801596355569750_2637909720645892208_n.jpg";
import { Code2, Palette, Database, Terminal } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      year: "2025-2027",
      title: "Class 12th (PCM)",
      school: "Currently Studying",
    },
    { year: "2024-2025", title: "Class 10th", school: "Completed" },
  ];

  const technologies = [
    { name: "React.js", icon: Code2, color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: Terminal, color: "from-gray-400 to-gray-600" },
    { name: "Node.js", icon: Terminal, color: "from-green-400 to-emerald-600" },
    { name: "Python", icon: Code2, color: "from-yellow-400 to-blue-500" },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
    { name: "UI/UX", icon: Palette, color: "from-pink-400 to-purple-500" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center w-full lg:w-1/2 "
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative group"
            >
              <img
                src={pic}
                alt="Arihant Jain"
                style={{ transform: "rotate(-80deg)" }}
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm{" "}
                <span className="text-blue-400 font-semibold">
                  Arihant Jain
                </span>
                , a{" "}
                <span className="text-purple-400 font-semibold">
                  15-year-old
                </span>{" "}
                passionate developer currently studying in{" "}
                <span className="text-teal-400 font-semibold">
                  Class 11 (PCM)
                </span>
                , Faridabad. I specialize in web and mobile app development
                using technologies like{" "}
                <span className="text-blue-400">React.js</span>,{" "}
                <span className="text-gray-400">Next.js</span>,{" "}
                <span className="text-green-400">Node.js</span>, and{" "}
                <span className="text-yellow-400">Python</span>. I enjoy
                building creative, scalable, and intelligent applications that
                solve real-world problems.
              </p>

              {/* Education Timeline */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Education Timeline
                </h3>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all"
                    >
                      <div className="flex-shrink-0 w-20 text-blue-400 font-semibold text-sm">
                        {edu.year}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">
                          {edu.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {edu.school}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Technologies I Love
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`bg-gradient-to-br ${tech.color} p-4 rounded-xl flex flex-col items-center gap-2 shadow-lg cursor-pointer`}
                  >
                    <tech.icon size={24} className="text-white" />
                    <span className="text-white text-xs font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

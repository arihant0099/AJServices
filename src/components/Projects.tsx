import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Sparkles } from "lucide-react";

// ✅ Project interface includes an optional image
interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  demoLink?: string;
  githubLink?: string;
  gradient: string;
  features: string[];
  image?: string; // 👈 added
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "E-commerce Website & Professional Services",
      description:
        "Full-stack e-commerce platform with booking system and secure authentication",
      fullDescription:
        "A comprehensive e-commerce platform featuring product listings, shopping cart functionality, secure checkout process, and an integrated booking system for professional services.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Product catalog with advanced filtering",
        "Secure checkout and payment integration",
        "Professional services booking system",
        "User authentication and profiles",
        "Admin dashboard for management",
        "Real-time order tracking",
      ],
      image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',

    },
    {
      title: "Grocery App (Blinkit Clone)",
      description:
        "Real-time grocery delivery app with tracking and payment integration",
      fullDescription:
        "A feature-rich grocery delivery app inspired by Blinkit with real-time tracking, payments, and intuitive UX.",
      tech: ["React Native", "Fastify", "MongoDB", "Redis", "Socket.io"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Real-time order tracking with GPS",
        "Category-based product slider",
        "Multiple payment gateway integration",
        "Push notifications for order updates",
        "Cart management and wishlist",
        "Lightning-fast delivery optimization",
      ],
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "AI Coding Assistant",
      description:
        "Intelligent code generation tool using Llama Model with natural language input",
      fullDescription:
        "An AI-powered coding assistant that understands natural language prompts and generates high-quality code in multiple languages.",
      tech: ["Python", "Llama Model", "FastAPI", "Docker", "TensorFlow"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Natural language to code conversion",
        "Multi-language support (Python, JS, Java, etc.)",
        "Code explanation and documentation",
        "Bug detection and fixing suggestions",
        "Context-aware code completion",
        "Integration with popular IDEs",
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBhZ2VudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "Rollout Clone",
      description:
        "Feature management and A/B testing platform built with MERN stack",
      fullDescription:
        "A powerful platform that allows teams to manage features, run experiments, and roll out updates safely.",
      tech: ["MongoDB", "Express", "React", "Node.js", "WebSocket"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Feature flag management dashboard",
        "A/B testing and experimentation",
        "Real-time configuration updates",
        "User segmentation and targeting",
        "Analytics and performance metrics",
        "Team collaboration tools",
      ],
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Building innovative solutions to real-world problems
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500`}
              ></div>

              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl h-full flex flex-col">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4 w-full h-48 object-cover border border-gray-700"
                  />
                )}

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white pr-4">
                    {project.title}
                  </h3>
                  <Sparkles className="text-blue-400 flex-shrink-0" size={24} />
                </div>

                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full text-xs text-gray-300 border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demoLink, "_blank");
                    }}
                    className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubLink, "_blank");
                    }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-start justify-between z-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full text-xs text-gray-300 border border-gray-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Image Section */}
        {project.image && (
          <div className="w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover border-b border-gray-700"
            />
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.demoLink, "_blank")}
              className={`flex-1 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium flex items-center justify-center gap-2 shadow-lg`}
            >
              <ExternalLink size={20} />
              View Live Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.githubLink, "_blank")}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Github size={20} />
              View Code
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

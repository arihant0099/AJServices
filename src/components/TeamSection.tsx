import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, X } from "lucide-react";

// ✅ Keep your working local imports
import ari from "../img/546512906_801596355569750_2637909720645892208_n.jpg";
import aad from "../img/image.png";
import punee from "../img/image1.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Arihant Jain",
    role: "Founder & Full Stack Developer",
    image: ari,
    bio: "Arihant is a passionate full-stack developer skilled in React, Node.js, and AI integration. He leads the team with innovation and vision.",
    skills: ["React", "Node.js", "MongoDB", "AI Integration"],
    socials: {
      linkedin: "https://linkedin.com/in/arihant",
      github: "https://github.com/arihant",
      instagram: "https://www.instagram.com/arihant_music_/",
    },
  },
  {
    name: "Punnet Bhardwaj",
    role: "UI/UX Designer",
    image: punee,
    bio: "Punnet is a creative designer who brings ideas to life through sleek, intuitive, and user-friendly interfaces.",
    skills: ["Figma", "Photoshop", "Prototyping", "Brand Design"],
    socials: {
      instagram: "https://www.instagram.com/fact_zimmo.1/",
    },
  },
  {
    name: "Aadarsh Singh",
    role: "Communication Specialist",
    image: aad,
    bio: "Aadarsh handles communication and client relations with clarity and professionalism.",
    skills: ["Public Speaking", "Content Writing", "Strategy", "Teamwork"],
    socials: {
      instagram: "https://www.instagram.com/singh_aadarsh_1018/",
    },
  },
];

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-[#0a0f1a] to-[#111827] text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">
          Our Team
        </h2>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] p-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-white mt-5">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>

                <div className="flex justify-center mt-5 space-x-5">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-500 transition"
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-400 hover:text-pink-500 transition"
                    >
                      <Instagram size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#0f172a] border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative text-left"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedMember(null)}
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col items-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 mb-5"
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-blue-400">{selectedMember.role}</p>
                </div>

                <p className="text-gray-300 mt-5 text-center leading-relaxed">
                  {selectedMember.bio}
                </p>

                <div className="mt-5 text-center">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Skills
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedMember.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TeamSection;

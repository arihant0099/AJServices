import React from "react";
import { ExternalLink, ShoppingCart, Code } from "lucide-react";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A full-featured React + Node.js eCommerce platform with Stripe integration, product management, and admin dashboard.",
    price: "₹999",
    image: "https://picsum.photos/id/1015/800/500",
    demo: "#",
    buy: "https://wa.me/+918800728810?text=I%20want%20to%20buy%20Ecommerce%20Website",
  },
  {
    title: "Portfolio Template",
    description:
      "A sleek and responsive React portfolio with animations, light/dark mode, and easy customization.",
    price: "₹499",
    image: "https://picsum.photos/id/1005/800/500",
    demo: "#",
    buy: "https://wa.me/+918800728810?text=I%20want%20to%20buy%20Portfolio%20Template",
  },
  {
    title: "Grocery Delivery App",
    description:
      "A React Native grocery delivery app with Fastify backend, JWT authentication, and live tracking.",
    price: "₹1499",
    image: "https://picsum.photos/id/1011/800/500",
    badge: "🔥 NEW",
    demo: "#",
    buy: "https://wa.me/+918800728810?text=I%20want%20to%20buy%20Grocery%20Delivery%20App",
  },
  {
    title: "Business Landing Page",
    description:
      "Professional landing page built using Next.js and TailwindCSS with SEO optimization and analytics.",
    price: "₹799",
    image: "https://picsum.photos/id/1012/800/500",
    demo: "#",
    buy: "https://wa.me/+918800728810?text=I%20want%20to%20buy%20Landing%20Page",
  },
  {
    title: "AI Chatbot UI",
    description:
      "A modern AI chatbot frontend built with React + TailwindCSS featuring typing effects, chat history, and futuristic design.",
    price: "₹1299",
    image: "https://picsum.photos/id/1027/800/500",
    badge: "🔥 NEW",
    demo: "#",
    buy: "https://wa.me/+918800728810?text=I%20want%20to%20buy%20AI%20Chatbot%20UI",
  },
  {
    title: "Startup Website",
    description:
      "A creative and responsive Next.js startup website template with stunning animations and responsive design.",
    price: "₹999",
    image: "https://picsum.photos/id/1043/800/500",
    demo: "#",
    buy: "https://wa.me/+918800728810?text=I%20want%20to%20buy%20Startup%20Website",
  },
];

const fallbackImage =
  "https://via.placeholder.com/800x500/1e293b/ffffff?text=Preview+Unavailable";

const ProjectsForSale = () => {
  return (
    <section
      id="projects-for-sale"
      className="py-20 bg-gradient-to-b from-[#0a0f1a] to-[#111827]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Projects You Can Buy
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore ready-to-use professional web projects built using modern
          technologies — ideal for developers, freelancers, and businesses.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group bg-[#0f172a] border border-gray-800 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* 🔥 Badge Fix */}
              {p.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => (e.currentTarget.src = fallbackImage)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Code className="text-white" size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <p className="text-lg font-bold text-blue-400 mb-6">
                    {p.price}
                  </p>
                </div>

                <div className="flex justify-center space-x-4 mt-auto">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                  >
                    <ExternalLink size={18} className="mr-2" /> Demo
                  </a>
                  <a
                    href={p.buy}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                  >
                    <ShoppingCart size={18} className="mr-2" /> Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsForSale;

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Freelance Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
    review:
      "I purchased the Ecommerce project from Arihant’s collection, and it was absolutely worth it! The code was clean, responsive, and easy to customize. Perfect for my client work.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    review:
      "The Portfolio template gave my brand a professional look instantly. The UI is stunning, and Arihant even helped me deploy it smoothly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Imran Khan",
    role: "Student & Developer",
    // ✅ Updated with a valid Unsplash image link
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    review:
      "I bought the Grocery App project — everything worked perfectly. Learned a lot about React Native and Fastify. Great for beginners who want to learn real-world apps!",
    rating: 4,
  },
  {
    name: "Priya Desai",
    role: "Digital Agency Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    review:
      "Arihant’s Landing Page project was so modern and responsive. I used it for my client’s business website and they loved it. Great quality for the price!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#111827] to-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Hear from developers, freelancers, and business owners who have used
          Arihant’s projects to level up their work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                />
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{t.role}</p>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      className={
                        starIndex < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  “{t.review}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

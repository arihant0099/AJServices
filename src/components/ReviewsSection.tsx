import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ravi Kumar",
    company: "TechSpark Pvt. Ltd.",
    feedback:
      "Arihant and his team delivered an amazing website for our business — fast, clean, and responsive!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    company: "Creative Studio",
    feedback:
      "Professional and easy to communicate with. My portfolio came out even better than I imagined!",
    rating: 5,
  },
  {
    name: "Manish Yadav",
    company: "MyGroceryApp",
    feedback:
      "Excellent full-stack work and great problem-solving approach. Highly recommended!",
    rating: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#111827] to-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <p className="text-gray-300 italic mb-6">“{r.feedback}”</p>
              <div className="flex justify-center mb-4">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <h4 className="font-semibold text-lg text-white">{r.name}</h4>
              <p className="text-sm text-gray-400">{r.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

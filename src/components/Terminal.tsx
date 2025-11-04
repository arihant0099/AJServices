// src/components/Terminal.tsx
import React, { useEffect, useState } from "react";

const lines = [
  "npm create-react-app portfolio...",
  "Installing dependencies...",
  "Configuring TailwindCSS...",
  "Starting development server...",
  "🚀 Project running on http://localhost:3000",
];

const Terminal: React.FC = () => {
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setDisplayed((prev) => [...prev, line]);
      }, i * 800);
    });
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono p-6 mb-10 rounded-lg shadow-lg border border-green-700 w-full max-w-2xl mx-auto mt-6">
      <div className="text-sm mb-3">Arihant@portfolio:~$</div>
      {displayed.map((line, i) => (
        <div key={i} className="animate-fadeIn">
          {line}
        </div>
      ))}
    </div>
  );
};

export default Terminal;

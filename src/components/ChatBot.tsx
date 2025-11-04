// src/components/ChatBot.tsx
import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([
    { from: "bot", text: "Hey! I'm Arihant AI 🤖 — how can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "user", text: input }]);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "That’s awesome! 🚀 Keep building amazing things." },
      ]);
    }, 700);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle size={24} />
      </button>

      {open && (
        <div className="fixed bottom-20 left-6 w-72 bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-3 flex flex-col">
          <div className="flex-1 overflow-y-auto max-h-64 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-800 text-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-gray-800 text-gray-100 p-2 rounded-l-lg outline-none"
              placeholder="Ask me..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 px-3 rounded-r-lg text-white hover:bg-blue-700"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

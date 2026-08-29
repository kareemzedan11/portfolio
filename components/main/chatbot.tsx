"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const botResponses: Record<string, string> = {
  hello: "Hello! Welcome to Kareem's portfolio. How can I help you today?",
  hi: "Hi there! I'm Kareem's assistant. Feel free to ask me anything about his work!",
  hey: "Hey! Great to see you here. What would you like to know?",
  projects: "Kareem has worked on Capital Taxi, Moqawlak, Awfar, Talabat Clone, Muthamin, Istibdal, Sarfak, Mawj Lance, and Hisnak (حصنك). Want details on any of them?",
  hisnak: "Hisnak (حصنك) is a comprehensive Islamic app — prayer times, Quran, adhkar, Qibla, digital tasbih, Quran reciters, daily wird, challenges, and spiritual progress tracking.",
  "حصنك": "حصنك تطبيق إسلامي شامل — مواقيت الصلاة، المصحف، الأذكار، القبلة، السبحة، الاستماع للقراء، الورد اليومي، والتحديات.",
  islamic: "Hisnak (حصنك) brings prayer times, Quran reading & listening, adhkar, Qibla, and habit challenges into one Flutter app.",
  "mawj lance": "Mawj Lance (موج لانس) is an Arabic freelance marketplace — post projects, get competitive offers, chat with freelancers, and pay safely with escrow.",
  freelance: "Mawj Lance connects clients with freelancers for academic, design, tech, writing, and consulting services with escrow protection.",
  sarfak: "Sarfak (صرفك) is a daily expense tracker — log spending by category, set monthly budgets, view reports and charts, and calculate savings if you quit habits.",
  expense: "Sarfak helps you track daily expenses, manage your monthly budget, and understand spending with clear reports.",
  istibdal: "Istibdal (استبدال) is a smart bartering app — list unused items, browse offers nearby, chat directly, and trade safely with ratings and verified items.",
  barter: "Istibdal lets you swap items instead of buying new ones — categories, location search, offers, negotiation, and in-app chat.",
  muthamin: "Muthamin (مثمن) is a real estate appraisal platform in Oman that connects property owners, banks, and certified appraisers — with offers, reports, payments, and bilingual Arabic/English UI.",
  appraisal: "Muthamin helps users request property appraisals, compare offers from certified appraisers, track progress, and get secure valuation reports in Oman.",
  talabat: "The Talabat Clone is a Flutter food delivery app with restaurants, groceries, talabat mart, health & wellness, social login, filters, deals, and a modern orange-branded UI.",
  "food delivery": "The Talabat Clone is a full food delivery experience built with Flutter — home discovery, restaurant listings, grocery mart, and social authentication.",
  skills: "Kareem is skilled in Flutter, Dart, Firebase, Bloc, GetX, REST APIs, Git, and mobile app development for both Android and iOS platforms.",
  contact: "You can reach Kareem on Facebook, WhatsApp (01501301718), Telegram (01501301718), or call 01044764595.",
  experience: "Kareem has 3+ years of experience as a Flutter developer, specializing in building beautiful, cross-platform mobile apps for Android and iOS with clean architecture.",
  flutter: "Flutter is Kareem's primary framework! He builds high-performance, beautiful mobile apps for both Android and iOS using Flutter and Dart.",
  "capital taxi": "Capital Taxi is a ride-hailing app built with Flutter. It features real-time GPS tracking, multiple user modes (Captain/Passenger), social authentication, and seamless payment integration.",
  hire: "Interested in working with Kareem? Reach out via WhatsApp, Telegram, phone, or Facebook — links are in the footer!",
  default: "Thanks for your message! I'm a simple bot assistant. You can ask me about Kareem's projects, skills, experience, or how to contact him.",
};

const quickReplies = [
  "Projects",
  "Skills", 
  "Experience",
  "Contact",
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Kareem's assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-[#0d0d1a] border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Kareem&apos;s Assistant</h3>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-purple-500/20 text-gray-200 rounded-tl-none"
                        : "bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-tr-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-[10px] mt-1 ${message.isBot ? "text-gray-500" : "text-white/60"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-purple-500/20 p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="text-xs px-3 py-1.5 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-purple-500/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center hover:opacity-90 transition disabled:opacity-50"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

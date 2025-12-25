
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! This is Sarah from ROIDentalAgency.com. How can I help you schedule your dental appointment today? You can also reach us at 916-382-2516." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Create a new instance right before making an API call to ensure it always uses the most up-to-date configuration
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Use gemini-3-flash-preview for conversational text tasks as per guidelines
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Conversation History:\n${messages.map(m => `${m.role}: ${m.text}`).join('\n')}\nPatient: ${userMessage}`,
        config: {
          systemInstruction: "You are Sarah, a professional and friendly AI receptionist for ROIDentalAgency.com. Your agency helps dental clinics with AI management. You should be empathetic, polite, and efficient. Use dental terminology correctly. If someone asks for a price, mention that we need an exam first to provide an accurate quote. Our office phone is 916-382-2516. We are open Mon-Fri 8am-5pm. Keep responses concise and helpful.",
        }
      });

      // Directly access .text property as it's a getter, not a method
      const aiText = response.text || "I'm sorry, I'm having trouble processing that right now. Could you try again?";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error("Demo Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Oops! My connection to the clinic database is slightly interrupted. Please try again in a moment or call us at 916-382-2516." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Try the AI Experience</h2>
        <p className="text-slate-600">Chat with Sarah, our AI receptionist at ROIDentalAgency.com, to see how she handles complex dental patient scenarios.</p>
      </div>

      <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src="https://picsum.photos/seed/receptionist/40/40" className="w-10 h-10 rounded-full object-cover" alt="Sarah" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Sarah (ROIDentalAgency.com)</div>
              <div className="text-xs text-green-400">Online | 24/7 Available</div>
            </div>
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Demo Mode</div>
        </div>

        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-4 ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-100 rounded-tl-none'}`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 flex space-x-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-slate-800/30 border-t border-slate-700">
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Sarah about booking a cleaning..."
              className="flex-grow bg-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-700"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white p-3 rounded-xl transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="mt-2 text-[10px] text-center text-slate-500">
            Simulated AI Demo. ROIDentalAgency.com AI works over the phone using high-fidelity voice.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;

import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Icons } from './Icons';

interface AIChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const AIChat: React.FC<AIChatProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Abu's AI assistant. Ask me anything about his work or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message immediately
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);

    // Get response
    const responseText = await geminiService.sendMessage(newHistory, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-neutral-800 text-white rotate-90' : 'bg-neutral-900 text-white'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <Icons.X size={24} /> : <Icons.MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[500px] bg-white rounded-2xl shadow-2xl border border-neutral-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-neutral-50 border-b border-neutral-100 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                <Icons.Bot size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
                <p className="text-xs text-neutral-500">Powered by Gemini 2.5</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-neutral-200 text-neutral-700' : 'bg-neutral-900 text-white'
                }`}>
                  {msg.role === 'user' ? <Icons.User size={16} /> : <Icons.Bot size={16} />}
                </div>
                <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-neutral-100 text-neutral-800 rounded-tr-none' 
                    : 'bg-white border border-neutral-100 shadow-sm text-neutral-600 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-neutral-900 flex-shrink-0 flex items-center justify-center text-white">
                  <Icons.Bot size={16} />
                </div>
                <div className="bg-neutral-50 p-3 rounded-2xl rounded-tl-none border border-neutral-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-100 bg-neutral-50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full pl-4 pr-12 py-3 bg-white border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Icons.Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);

    // Add an empty model message that we will stream into
    setMessages(prev => [...prev, { role: 'model', text: '', reasoning: '' }]);

    try {
      const apiMessages = newHistory.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.text
      }));

      const response = await fetch('https://cbg-io-git-main-abu-dardas-projects-912cd534.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let currentText = '';

      if (reader) {
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            currentText += chunk;

            // Update the last message
            setMessages(prev => {
              const updated = [...prev];
              const lastMsg = updated[updated.length - 1];
              lastMsg.text = currentText;
              return updated;
            });
          }
        }
      }
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages(prev => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];
        lastMsg.text = "Sorry, I encountered an error connecting to the server.";
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-neutral-800 text-white rotate-90' : 'bg-neutral-900 text-white'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <Icons.X size={24} /> : <Icons.MessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-xl h-[85vh] bg-white rounded-2xl shadow-2xl border border-neutral-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          <div className="bg-neutral-50 border-b border-neutral-100 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                <Icons.Bot size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
                <p className="text-xs text-neutral-500">Powered by AI</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, idx) => {
              // Parse <think> tags from text if they exist
              let displayText = msg.text;
              let displayReasoning = msg.reasoning || '';
              
              if (!displayReasoning && displayText.includes('<think>')) {
                const thinkMatch = displayText.match(/<think>([\s\S]*?)(?:<\/think>|$)/);
                if (thinkMatch) {
                  displayReasoning = thinkMatch[1];
                  displayText = displayText.replace(/<think>[\s\S]*?(?:<\/think>|$)/, '').trim();
                }
              }

              return (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-neutral-200 text-neutral-700' : 'bg-neutral-900 text-white'
                  }`}>
                    {msg.role === 'user' ? <Icons.User size={16} /> : <Icons.Bot size={16} />}
                  </div>
                  <div className={`max-w-[75%] flex flex-col gap-2`}>
                    {displayReasoning && (
                      <details className="group bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden">
                        <summary className="text-xs text-neutral-500 font-medium cursor-pointer p-2 hover:bg-neutral-100 transition-colors flex items-center gap-2 select-none">
                          <Icons.Brain size={12} className="text-neutral-400" />
                          <span>Thinking</span>
                          <Icons.ChevronDown size={12} className="ml-auto transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="p-3 pt-0 text-xs text-neutral-600 italic border-t border-neutral-100 bg-neutral-50/50 whitespace-pre-wrap">
                          {displayReasoning}
                        </div>
                      </details>
                    )}
                    {displayText && (
                      <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-neutral-100 text-neutral-800 rounded-tr-none' 
                          : 'bg-white border border-neutral-100 shadow-sm text-neutral-600 rounded-tl-none'
                      }`}>
                        {msg.role === 'user' ? (
                          displayText
                        ) : (
                          <div className="prose prose-sm max-w-none prose-neutral">
                            <Markdown remarkPlugins={[remarkGfm]}>{displayText}</Markdown>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {isLoading && messages[messages.length - 1]?.role !== 'model' && (
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
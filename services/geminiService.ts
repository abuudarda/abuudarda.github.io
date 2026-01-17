import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const API_KEY = process.env.API_KEY || '';

class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    if (API_KEY) {
      this.ai = new GoogleGenAI({ apiKey: API_KEY });
    } else {
      console.warn("Gemini API Key is missing. AI Chat features will be disabled.");
    }
  }

  async sendMessage(history: { role: string; text: string }[], newMessage: string): Promise<string> {
    if (!this.ai) {
      return "AI service is not configured (Missing API Key).";
    }

    try {
      // Use the recommended model for basic text chat
      const model = 'gemini-3-flash-preview'; 
      
      const contents = [
        ...history.map(msg => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }]
        }
      ];

      const response = await this.ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      return response.text || "I'm sorry, I couldn't generate a response at this time.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I encountered an error while processing your request. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
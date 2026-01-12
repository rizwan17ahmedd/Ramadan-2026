
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiReflection: React.FC = () => {
  const [reflection, setReflection] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReflection = async () => {
      setLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Give me a beautiful, short daily reflection or motivational quote for someone preparing for or observing Ramadan 2026. Keep it poetic and soul-stirring. Limit to 3 sentences.",
          config: {
            systemInstruction: "You are a wise, compassionate spiritual guide focused on the inner meaning of Ramadan.",
            temperature: 0.8,
          }
        });
        setReflection(response.text || "May your fast be a journey from the self to the Divine.");
      } catch (err) {
        setReflection("Patience is the key to paradise. May this Ramadan bring peace to your soul.");
      } finally {
        setLoading(false);
      }
    };

    fetchReflection();
  }, []);

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="text-yellow-400">
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      </div>
      <h4 className="text-emerald-200 uppercase tracking-widest text-sm font-bold">Daily AI Reflection</h4>
      {loading ? (
        <div className="animate-pulse flex flex-col items-center space-y-2">
          <div className="h-4 w-64 bg-emerald-800/50 rounded"></div>
          <div className="h-4 w-48 bg-emerald-800/50 rounded"></div>
        </div>
      ) : (
        <p className="text-xl md:text-2xl font-amiri italic text-white/90 leading-relaxed max-w-2xl">
          "{reflection}"
        </p>
      )}
    </div>
  );
};

export default GeminiReflection;

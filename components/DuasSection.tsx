
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const DuasSection: React.FC = () => {
  const [dailyDua, setDailyDua] = useState<{ arabic: string; translation: string; transliteration: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDailyDua = async () => {
      setLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Provide a beautiful, authentic daily Dua (supplication) from the Quran or Sunnah specifically for a day in Ramadan. Return the response in a structured format: Arabic text, English Transliteration, and English Translation. Keep it concise.",
          config: {
            systemInstruction: "You are a knowledgeable Islamic scholar. Provide Duas in a clear, formatted way. Always include the Arabic script.",
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                arabic: { type: "STRING" },
                transliteration: { type: "STRING" },
                translation: { type: "STRING" }
              },
              required: ["arabic", "transliteration", "translation"]
            }
          }
        });
        
        const data = JSON.parse(response.text);
        setDailyDua(data);
      } catch (err) {
        console.error("Error fetching Dua:", err);
        setDailyDua({
          arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
          transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar",
          translation: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire."
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDailyDua();
  }, []);

  const DuaCard = ({ title, arabic, transliteration, translation, iconColor }: any) => (
    <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${iconColor}`}>{title}</h4>
      <p className="text-2xl md:text-3xl font-amiri text-right mb-4 leading-loose text-white">{arabic}</p>
      <div className="space-y-2">
        <p className="text-sm italic text-emerald-200/80 leading-relaxed">{transliteration}</p>
        <p className="text-sm text-white/90 leading-relaxed font-medium">{translation}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-2xl font-amiri font-bold text-emerald-200">Sacred Supplications</h2>
        <div className="h-px flex-1 bg-emerald-500/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DuaCard 
          title="Sahoor Dua (Intention)"
          arabic="وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ"
          transliteration="Wa bisawmi ghadinn nawaiytu min shahri ramadan"
          translation="I intend to keep the fast for tomorrow in the month of Ramadan."
          iconColor="text-orange-300"
        />
        <DuaCard 
          title="Iftar Dua"
          arabic="اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ"
          transliteration="Allahumma inni laka sumtu, wa bika aamantu, wa 'alayka tawakkaltu, wa 'ala rizqika aftartu"
          translation="O Allah! I fasted for You and I believe in You and I put my trust in You and with Your sustenance I break my fast."
          iconColor="text-emerald-300"
        />
      </div>

      <div className="bg-emerald-800/20 border border-yellow-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-24 h-24 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.85,5 3.19,5.25 1.5,5.75V19.5C3.19,19 4.85,18.75 6.5,18.75C8.25,18.75 9.83,19.07 11.25,19.5V5.75C9.83,5.25 8.25,5 6.5,5M17.5,18.75C16.14,18.75 14.77,18.91 13.5,19.22V5.47C14.77,5.16 16.14,5 17.5,5C19.15,5 20.81,5.25 22.5,5.75V19.5C20.81,19 19.15,18.75 17.5,18.75Z" />
          </svg>
        </div>
        
        <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-yellow-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Daily Ramadan Dua
        </h4>
        
        {loading ? (
          <div className="space-y-4 py-4">
            <div className="h-8 bg-white/5 rounded-lg animate-pulse w-3/4 ml-auto"></div>
            <div className="h-4 bg-white/5 rounded-lg animate-pulse w-full"></div>
            <div className="h-4 bg-white/5 rounded-lg animate-pulse w-2/3"></div>
          </div>
        ) : dailyDua && (
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-amiri text-right mb-6 leading-loose text-white selection:bg-yellow-400 selection:text-emerald-900">
              {dailyDua.arabic}
            </p>
            <div className="space-y-3 border-l-2 border-yellow-500/30 pl-4">
              <p className="text-sm italic text-emerald-200/90 leading-relaxed">
                {dailyDua.transliteration}
              </p>
              <p className="text-base text-white/90 leading-relaxed font-medium">
                {dailyDua.translation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DuasSection;

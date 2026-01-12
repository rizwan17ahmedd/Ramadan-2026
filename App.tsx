
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Calendar from './components/Calendar';
import DuasSection from './components/DuasSection';
import Footer from './components/Footer';
import { DayData } from './types';

const RAMADAN_START_2026 = new Date('2026-02-18T00:00:00');

const App: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [calendarData, setCalendarData] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocationAndData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
            await fetchCalendar(latitude, longitude);
          },
          async () => {
            setLocation({ lat: 21.4225, lng: 39.8262 });
            await fetchCalendar(21.4225, 39.8262);
          }
        );
      } catch (err) {
        setError("Failed to initialize. Please check your connection.");
        setLoading(false);
      }
    };

    const fetchCalendar = async (lat: number, lng: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/calendar/2026/2?latitude=${lat}&longitude=${lng}&method=4`
        );
        const data = await response.json();
        
        if (data.status === 'OK') {
          const febData = data.data;
          const responseMarch = await fetch(
            `https://api.aladhan.com/v1/calendar/2026/3?latitude=${lat}&longitude=${lng}&method=4`
          );
          const dataMarch = await responseMarch.json();
          
          if (dataMarch.status === 'OK') {
            const fullYearData = [...febData, ...dataMarch.data];
            const ramadanDays = fullYearData.filter(
              (day: any) => day.date.hijri.month.number === 9
            );
            setCalendarData(ramadanDays);
          }
        }
      } catch (err) {
        setError("Error fetching prayer times.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocationAndData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#064e3b] via-[#065f46] to-[#042f2e] text-white selection:bg-yellow-400 selection:text-emerald-900">
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-4">
        <Header />
        
        <main className="space-y-12 md:space-y-16">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Countdown targetDate={RAMADAN_START_2026} />
          </section>

          <section id="calendar" className="scroll-mt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex flex-col mb-6 gap-2">
              <h2 className="text-2xl font-amiri font-bold text-emerald-200">
                Ramadan Calendar
              </h2>
              <div className="text-[10px] md:text-xs text-emerald-300 opacity-60 flex items-center gap-1.5 uppercase tracking-wider">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {location ? `${location.lat.toFixed(2)}, ${location.lng.toFixed(2)}` : 'Makkah'}
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-10 h-10 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-emerald-300 text-sm animate-pulse tracking-widest uppercase">Calculating...</p>
              </div>
            ) : error ? (
              <div className="bg-red-900/20 text-red-200 p-6 rounded-2xl border border-red-500/30 text-center text-sm">
                {error}
              </div>
            ) : (
              <Calendar data={calendarData} />
            )}
          </section>

          <section id="duas" className="scroll-mt-6">
            <DuasSection />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;

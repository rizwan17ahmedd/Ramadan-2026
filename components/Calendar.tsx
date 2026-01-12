
import React from 'react';
import { DayData } from '../types';

interface Props {
  data: DayData[];
  onDayClick: (day: number) => void;
  selectedDay: number;
}

const Calendar: React.FC<Props> = ({ data, onDayClick, selectedDay }) => {
  const cleanTime = (time: string) => time.split(' ')[0];

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-emerald-700/50 shadow-2xl bg-emerald-950/20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-900/60 text-emerald-100 border-b border-emerald-700/50">
              <th className="px-4 py-4 font-semibold text-center">Day</th>
              <th className="px-4 py-4 font-semibold">Date</th>
              <th className="px-4 py-4 font-semibold text-orange-300">Fajr</th>
              <th className="px-4 py-4 font-semibold text-emerald-100">Dhuhr</th>
              <th className="px-4 py-4 font-semibold text-emerald-100">Asr</th>
              <th className="px-4 py-4 font-semibold text-emerald-300">Maghrib</th>
              <th className="px-4 py-4 font-semibold text-emerald-100">Isha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-800/30">
            {data.map((day, idx) => {
              const hijriDay = parseInt(day.date.hijri.day);
              const isToday = new Date().toDateString() === new Date(day.date.readable).toDateString();
              const isSelected = selectedDay === hijriDay;

              return (
                <tr 
                  key={idx} 
                  onClick={() => onDayClick(hijriDay)}
                  className={`
                    transition-all cursor-pointer hover:bg-emerald-800/20
                    ${isSelected ? 'bg-emerald-700/40 border-l-4 border-l-yellow-400 shadow-inner' : ''}
                    ${isToday && !isSelected ? 'border-l-4 border-l-emerald-500/50' : ''}
                  `}
                >
                  <td className="px-4 py-4 font-amiri text-lg font-bold text-center">
                    {day.date.hijri.day}
                  </td>
                  <td className="px-4 py-4 text-sm text-emerald-100/80">
                    <div className="font-medium whitespace-nowrap">{day.date.readable.split(' 2026')[0]}</div>
                  </td>
                  <td className="px-4 py-4 font-mono font-bold text-orange-200">
                    {cleanTime(day.timings.Fajr)}
                  </td>
                  <td className="px-4 py-4 font-mono text-emerald-50/80">
                    {cleanTime(day.timings.Dhuhr)}
                  </td>
                  <td className="px-4 py-4 font-mono text-emerald-50/80">
                    {cleanTime(day.timings.Asr)}
                  </td>
                  <td className="px-4 py-4 font-mono font-bold text-emerald-200">
                    {cleanTime(day.timings.Maghrib)}
                  </td>
                  <td className="px-4 py-4 font-mono text-emerald-50/80">
                    {cleanTime(day.timings.Isha)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List View */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {data.map((day, idx) => {
          const hijriDay = parseInt(day.date.hijri.day);
          const isToday = new Date().toDateString() === new Date(day.date.readable).toDateString();
          const isSelected = selectedDay === hijriDay;

          return (
            <div 
              key={idx} 
              onClick={() => onDayClick(hijriDay)}
              className={`
                p-4 rounded-xl border transition-all active:scale-[0.98] cursor-pointer
                ${isSelected 
                  ? 'bg-emerald-800/80 border-yellow-400 shadow-lg shadow-yellow-900/30 ring-1 ring-yellow-400/20' 
                  : 'bg-emerald-900/30 border-emerald-700/50'
                }
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg w-10 h-10 flex items-center justify-center font-amiri text-xl font-bold border transition-colors ${isSelected ? 'bg-yellow-400 text-emerald-900 border-yellow-500' : 'bg-emerald-800 text-white border-emerald-600/50'}`}>
                    {day.date.hijri.day}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{day.date.readable}</div>
                    <div className="text-[10px] text-emerald-300 uppercase opacity-60">Ramadan 1447</div>
                  </div>
                </div>
                {isToday && <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold uppercase">Today</span>}
              </div>
              
              <div className="grid grid-cols-5 gap-1.5">
                <div className="bg-black/20 pt-2 pb-2 rounded-lg text-center border border-orange-500/10">
                  <div className="text-[8px] text-orange-300 uppercase mb-0.5 opacity-80">Fajr</div>
                  <div className="text-[11px] font-mono font-bold text-orange-100">{cleanTime(day.timings.Fajr)}</div>
                </div>
                <div className="bg-black/10 pt-2 pb-2 rounded-lg text-center border border-white/5">
                  <div className="text-[8px] text-emerald-100/60 uppercase mb-0.5">Dhuhr</div>
                  <div className="text-[11px] font-mono font-bold text-emerald-50">{cleanTime(day.timings.Dhuhr)}</div>
                </div>
                <div className="bg-black/10 pt-2 pb-2 rounded-lg text-center border border-white/5">
                  <div className="text-[8px] text-emerald-100/60 uppercase mb-0.5">Asr</div>
                  <div className="text-[11px] font-mono font-bold text-emerald-50">{cleanTime(day.timings.Asr)}</div>
                </div>
                <div className="bg-black/20 pt-2 pb-2 rounded-lg text-center border border-emerald-500/10">
                  <div className="text-[8px] text-emerald-300 uppercase mb-0.5 opacity-80">Maghrib</div>
                  <div className="text-[11px] font-mono font-bold text-emerald-100">{cleanTime(day.timings.Maghrib)}</div>
                </div>
                <div className="bg-black/10 pt-2 pb-2 rounded-lg text-center border border-white/5">
                  <div className="text-[8px] text-emerald-100/60 uppercase mb-0.5">Isha</div>
                  <div className="text-[11px] font-mono font-bold text-emerald-50">{cleanTime(day.timings.Isha)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

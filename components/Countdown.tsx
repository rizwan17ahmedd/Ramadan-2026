
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

interface Props {
  targetDate: Date;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setIsFinished(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-3 md:p-4 bg-emerald-900/60 rounded-xl border border-emerald-500/20 backdrop-blur-sm flex-1 min-w-0 transition-all active:scale-95 shadow-lg">
      <span className="text-xl md:text-4xl font-bold text-yellow-400 tabular-nums truncate w-full text-center">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-emerald-300 mt-1 opacity-80">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <h3 className="text-sm md:text-lg font-light mb-4 text-emerald-100/80 flex items-center gap-3 w-full justify-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/30"></span>
        <span className="whitespace-nowrap">{isFinished ? 'Ramadan is Here!' : 'Days until Ramadan'}</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/30"></span>
      </h3>
      <div className="flex gap-2 md:gap-4 w-full">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default Countdown;

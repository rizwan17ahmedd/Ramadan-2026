
export interface PrayerTimings {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Sunrise: string;
  Sunset: string;
}

export interface DayData {
  date: {
    readable: string;
    hijri: {
      day: string;
      month: { en: string; ar: string };
      year: string;
    };
    gregorian: {
      day: string;
      month: { en: string };
      year: string;
    };
  };
  timings: PrayerTimings;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

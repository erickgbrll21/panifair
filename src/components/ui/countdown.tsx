"use client";

import { useEffect, useState } from "react";
import { EVENT_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = EVENT_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const UNITS = [
  { key: "days" as const, label: "Dias" },
  { key: "hours" as const, label: "Horas" },
  { key: "minutes" as const, label: "Min" },
  { key: "seconds" as const, label: "Seg" },
];

const PLACEHOLDER: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(PLACEHOLDER);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="glass-card flex min-w-[72px] flex-col items-center rounded-2xl px-4 py-3 md:min-w-[88px] md:px-5 md:py-4"
        >
          <span
            className="text-2xl font-bold tabular-nums text-[#c4966a] md:text-3xl"
            suppressHydrationWarning
          >
            {mounted ? String(timeLeft[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-[#9a8b7a] md:text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { EVENT_DATE } from "@/lib/constants";

const UNITS = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
] as const;

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

function getSecondsLeft() {
  return Math.max(0, Math.floor((EVENT_DATE.getTime() - Date.now()) / 1000));
}

// No servidor não há relógio confiável do cliente; -1 renderiza os placeholders "--"
function getServerSnapshot() {
  return -1;
}

export function Countdown() {
  const secondsLeft = useSyncExternalStore(subscribe, getSecondsLeft, getServerSnapshot);

  const timeLeft =
    secondsLeft < 0
      ? null
      : {
          days: Math.floor(secondsLeft / 86400),
          hours: Math.floor(secondsLeft / 3600) % 24,
          minutes: Math.floor(secondsLeft / 60) % 60,
          seconds: secondsLeft % 60,
        };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="glass-card flex min-w-[58px] flex-col items-center rounded-xl px-2.5 py-2 md:min-w-[88px] md:rounded-2xl md:px-5 md:py-4"
        >
          <span className="text-lg font-bold tabular-nums text-[#7a5532] md:text-3xl">
            {timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-widest text-[#5c4d3e] md:mt-1 md:text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

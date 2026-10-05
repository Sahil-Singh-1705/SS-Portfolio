"use client";

import { useEffect, useState } from "react";
import { MapPin, Clock3, CalendarDays } from "lucide-react";

export default function LocalTime() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setCurrentDate(new Date());
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!currentDate) return null;

  const time = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(currentDate)
    .replace(/\b(am|pm)\b/i, (match) => match.toUpperCase());
        
  const date = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5" />
        Ahmedabad, India
      </span>

      <span className="hidden sm:block text-border">•</span>

      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="h-3.5 w-3.5" />
        {time}
      </span>

      <span className="hidden sm:block text-border">•</span>

      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" />
        {date}
      </span>
    </div>
  );
}
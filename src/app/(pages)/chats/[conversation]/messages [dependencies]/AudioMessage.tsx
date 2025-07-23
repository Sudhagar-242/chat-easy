"use client";
import React, { useState, useEffect } from "react";

type BarsContainerType = {
  height: number;
  opacity: number;
};

const generateBars = (): BarsContainerType[] =>
  Array.from({ length: 60 }, (_, i) => ({
    height: Math.floor(
      i < 20 ? Math.random() * 10 + 10 : Math.random() * 18 + 5
    ),
    opacity: i < 35 ? 0.4 : 0.4,
  }));

export default function AudioPlayer({ seconds }: { seconds: number }) {
  const [isPlays, setIsPlays] = useState(false);
  const [activeBar, setActiveBar] = useState<number>(-1);
  const [bars] = useState<BarsContainerType[]>([
    {
      height: 10,
      opacity: 0.4,
    },
    {
      height: 18,
      opacity: 0.4,
    },
    {
      height: 12,
      opacity: 0.4,
    },
    {
      height: 15,
      opacity: 0.4,
    },
    {
      height: 13,
      opacity: 0.4,
    },
    {
      height: 17,
      opacity: 0.4,
    },
    {
      height: 11,
      opacity: 0.4,
    },
    {
      height: 11,
      opacity: 0.4,
    },
    {
      height: 15,
      opacity: 0.4,
    },
    {
      height: 16,
      opacity: 0.4,
    },
    {
      height: 19,
      opacity: 0.4,
    },
    {
      height: 13,
      opacity: 0.4,
    },
    {
      height: 11,
      opacity: 0.4,
    },
    {
      height: 12,
      opacity: 0.4,
    },
    {
      height: 19,
      opacity: 0.4,
    },
    {
      height: 13,
      opacity: 0.4,
    },
    {
      height: 10,
      opacity: 0.4,
    },
    {
      height: 19,
      opacity: 0.4,
    },
    {
      height: 15,
      opacity: 0.4,
    },
    {
      height: 17,
      opacity: 0.4,
    },
    {
      height: 10,
      opacity: 0.4,
    },
    {
      height: 7,
      opacity: 0.4,
    },
    {
      height: 21,
      opacity: 0.4,
    },
    {
      height: 14,
      opacity: 0.4,
    },
    {
      height: 8,
      opacity: 0.4,
    },
    {
      height: 20,
      opacity: 0.4,
    },
    {
      height: 12,
      opacity: 0.4,
    },
    {
      height: 22,
      opacity: 0.4,
    },
    {
      height: 13,
      opacity: 0.4,
    },
    {
      height: 8,
      opacity: 0.4,
    },
    {
      height: 16,
      opacity: 0.4,
    },
    {
      height: 13,
      opacity: 0.4,
    },
    {
      height: 17,
      opacity: 0.4,
    },
    {
      height: 14,
      opacity: 0.4,
    },
    {
      height: 17,
      opacity: 0.4,
    },
    {
      height: 18,
      opacity: 0.4,
    },
    {
      height: 11,
      opacity: 0.4,
    },
    {
      height: 18,
      opacity: 0.4,
    },
    {
      height: 15,
      opacity: 0.4,
    },
    {
      height: 6,
      opacity: 0.4,
    },
    {
      height: 22,
      opacity: 0.4,
    },
    {
      height: 16,
      opacity: 0.4,
    },
    {
      height: 6,
      opacity: 0.4,
    },
    {
      height: 9,
      opacity: 0.4,
    },
    {
      height: 21,
      opacity: 0.4,
    },
    {
      height: 9,
      opacity: 0.4,
    },
    {
      height: 5,
      opacity: 0.4,
    },
    {
      height: 19,
      opacity: 0.4,
    },
    {
      height: 10,
      opacity: 0.4,
    },
    {
      height: 15,
      opacity: 0.4,
    },
    {
      height: 11,
      opacity: 0.4,
    },
    {
      height: 6,
      opacity: 0.4,
    },
    {
      height: 11,
      opacity: 0.4,
    },
    {
      height: 17,
      opacity: 0.4,
    },
    {
      height: 21,
      opacity: 0.4,
    },
    {
      height: 8,
      opacity: 0.4,
    },
    {
      height: 21,
      opacity: 0.4,
    },
    {
      height: 16,
      opacity: 0.4,
    },
    {
      height: 14,
      opacity: 0.4,
    },
    {
      height: 5,
      opacity: 0.4,
    },
  ]);
  console.log(bars);
  seconds = typeof seconds === "number" && !isNaN(seconds) ? seconds : 30;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlays) {
      interval = setInterval(() => {
        setActiveBar((prev) => {
          if (prev >= bars.length - 1) {
            setIsPlays(false);
            return -1;
          }
          return prev + 1;
        });
      }, (seconds / 60) * 1000);
    }

    return () => clearInterval(interval);
  }, [bars.length, isPlays, seconds]);

  return (
    <article className="flex items-center w-66 h-10 justify-around  bg-indigo-500 rounded-3xl shadow-md">
      <div
        className="bg-white rounded-full !w-8 !h-8 grid place-items-center cursor-pointer"
        onClick={() => setIsPlays((prev) => !prev)}
      >
        {isPlays ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-indigo-500"
            viewBox="0 0 320 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48s48-21.5 48-48V112c0-26.5-21.5-48-48-48zm224 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V112c0-26.5-21.5-48-48-48z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-indigo-500"
            viewBox="0 0 448 512"
          >
            <path d="M424.4 214.7L72.4 3.7C39.1-13.3 0 7.6 0 48v416c0 40.4 39.1 61.3 72.4 44.3l352-211C455.5 281.2 455.5 230.8 424.4 214.7z" />
          </svg>
        )}
      </div>

      <div className="flex justify-between w-44 h-8 items-end">
        {bars.map((bar, idx) => (
          <span
            key={idx}
            className="bg-white rounded-full transition-all duration-300"
            style={{
              height: `${bar.height}px`,
              width: "1.3px",
              opacity: idx <= activeBar ? 1 : 0.4,
            }}
          />
        ))}
      </div>

      <div className="bg-white text-indigo-500 text-xs font-normal w-9 h-4 text-center rounded-full">
        {`${parseInt(`${seconds / 60}`)}:${(seconds % 60)
          .toString()
          .padStart(2, "0")}`}
      </div>
    </article>
  );
}

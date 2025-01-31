"use client";
import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";

export default function MComponent() {
  const [bpm, setBpm] = useState(140); // Default BPM
  const [isPlaying, setIsPlaying] = useState(false);
  const tickSoundRef = useRef(null); // To hold the tick sound instance
  const clockRef = useRef(null); // To hold the clock instance

  useEffect(() => {
    // Load the clock tick sound
    const loadTickSound = async () => {
      const tickSound = new Tone.Player({
        url: "/tick.mp3",
        autostart: false,
        onload: () => console.log("Tick sound loaded successfully!"),
        onerror: (error) => console.error("Error loading tick sound:", error),
      }).toDestination();
      tickSoundRef.current = tickSound;

      // Initialize the clock
      const clock = new Tone.Clock((time) => {
        tickSound.start(time);
      }, 60 / bpm);
      clockRef.current = clock;
    };

    loadTickSound();

    // Cleanup
    return () => {
      if (clockRef.current) clockRef.current.dispose();
      if (tickSoundRef.current) tickSoundRef.current.dispose();
    };
  }, []);

  const startMetronome = () => {
    if (isPlaying || !tickSoundRef.current || !clockRef.current) return;

    Tone.start(); // Start AudioContext
    const clock = clockRef.current;
    clock.frequency.value = bpm / 60; // Adjust clock frequency to match BPM
    clock.start();
    setIsPlaying(true);
  };

  const stopMetronome = () => {
    if (!isPlaying || !clockRef.current) return;

    const clock = clockRef.current;
    clock.stop();
    setIsPlaying(false);
  };

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
    if (clockRef.current) {
      clockRef.current.frequency.value = newBpm / 60;
    }
  };

  return (
    <div className="pt-32">
      <div className="flex justify-center items-center gap-6 flex-col p-8">
        <h1 className="text-2xl font-bold">Metronome</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-4xl">{bpm}</h1>
            <span>BPM</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="rounded-full p-2 bg-blue-100 text-blue-500"
            onClick={() => handleBpmChange(Math.max(40, bpm - 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </button>
          <input
            id="default-range"
            min="40"
            max="240"
            value={bpm}
            onChange={(e) => handleBpmChange(Number(e.target.value))}
            type="range"
            className="lg:w-full w-1/2 h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <button
            className="rounded-full p-2 bg-blue-100 text-blue-500"
            onClick={() => handleBpmChange(Math.min(240, bpm + 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>

        <div className="flex gap-4">
          {isPlaying ? (
            <button
              onClick={stopMetronome}
              className="p-4 bg-red-400 text-white rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-pause"
                viewBox="0 0 16 16"
              >
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          ) : (
            <button
              onClick={startMetronome}
              className="p-4 rounded-lg bg-red-500 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-play"
                viewBox="0 0 16 16"
              >
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

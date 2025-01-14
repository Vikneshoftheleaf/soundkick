"use client"
import React, { useEffect, useRef, useState } from "react";
import Meyda from "meyda";

const notes = [
  { note: "C0", freq: 16.35 },
  { note: "C#0", freq: 17.32 },
  { note: "D0", freq: 18.35 },
  { note: "D#0", freq: 19.45 },
  { note: "E0", freq: 20.60 },
  { note: "F0", freq: 21.83 },
  { note: "F#0", freq: 23.12 },
  { note: "G0", freq: 24.50 },
  { note: "G#0", freq: 25.96 },
  { note: "A0", freq: 27.50 },
  { note: "A#0", freq: 29.14 },
  { note: "B0", freq: 30.87 },
  { note: "C1", freq: 32.70 },
  { note: "C#1", freq: 34.65 },
  { note: "D1", freq: 36.71 },
  { note: "D#1", freq: 38.89 },
  { note: "E1", freq: 41.20 },
  { note: "F1", freq: 43.65 },
  { note: "F#1", freq: 46.25 },
  { note: "G1", freq: 49.00 },
  { note: "G#1", freq: 51.91 },
  { note: "A1", freq: 55.00 },
  { note: "A#1", freq: 58.27 },
  { note: "B1", freq: 61.74 },
  { note: "C2", freq: 65.41 },
  { note: "C#2", freq: 69.30 },
  { note: "D2", freq: 73.42 },
  { note: "D#2", freq: 77.78 },
  { note: "E2", freq: 82.41 },
  { note: "F2", freq: 87.31 },
  { note: "F#2", freq: 92.50 },
  { note: "G2", freq: 98.00 },
  { note: "G#2", freq: 103.83 },
  { note: "A2", freq: 110.00 },
  { note: "A#2", freq: 116.54 },
  { note: "B2", freq: 123.47 },
  { note: "C3", freq: 130.81 },
  { note: "C#3", freq: 138.59 },
  { note: "D3", freq: 146.83 },
  { note: "D#3", freq: 155.56 },
  { note: "E3", freq: 164.81 },
  { note: "F3", freq: 174.61 },
  { note: "F#3", freq: 185.00 },
  { note: "G3", freq: 196.00 },
  { note: "G#3", freq: 207.65 },
  { note: "A3", freq: 220.00 },
  { note: "A#3", freq: 233.08 },
  { note: "B3", freq: 246.94 },
  { note: "C4", freq: 261.63 },
  { note: "C#4", freq: 277.18 },
  { note: "D4", freq: 293.66 },
  { note: "D#4", freq: 311.13 },
  { note: "E4", freq: 329.63 },
  { note: "F4", freq: 349.23 },
  { note: "F#4", freq: 369.99 },
  { note: "G4", freq: 392.00 },
  { note: "G#4", freq: 415.30 },
  { note: "A4", freq: 440.00 },
  { note: "A#4", freq: 466.16 },
  { note: "B4", freq: 493.88 },
  { note: "C5", freq: 523.25 },
  { note: "C#5", freq: 554.37 },
  { note: "D5", freq: 587.33 },
  { note: "D#5", freq: 622.25 },
  { note: "E5", freq: 659.26 },
  { note: "F5", freq: 698.46 },
  { note: "F#5", freq: 739.99 },
  { note: "G5", freq: 783.99 },
  { note: "G#5", freq: 830.61 },
  { note: "A5", freq: 880.00 },
  { note: "A#5", freq: 932.33 },
  { note: "B5", freq: 987.77 },
  { note: "C6", freq: 1046.50 },
  { note: "C#6", freq: 1108.73 },
  { note: "D6", freq: 1174.66 },
  { note: "D#6", freq: 1244.51 },
  { note: "E6", freq: 1318.51 },
  { note: "F6", freq: 1396.91 },
  { note: "F#6", freq: 1479.98 },
  { note: "G6", freq: 1567.98 },
  { note: "G#6", freq: 1661.22 },
  { note: "A6", freq: 1760.00 },
  { note: "A#6", freq: 1864.66 },
  { note: "B6", freq: 1975.53 },
  { note: "C7", freq: 2093.00 },
  { note: "C#7", freq: 2217.46 },
  { note: "D7", freq: 2349.32 },
  { note: "D#7", freq: 2489.02 },
  { note: "E7", freq: 2637.02 },
  { note: "F7", freq: 2793.83 },
  { note: "F#7", freq: 2959.96 },
  { note: "G7", freq: 3135.96 },
  { note: "G#7", freq: 3322.44 },
  { note: "A7", freq: 3520.00 },
  { note: "A#7", freq: 3729.31 },
  { note: "B7", freq: 3951.07 },
  { note: "C8", freq: 4186.01 },
];

const getFrequency = (amplitudeSpectrum, sampleRate) => {
  if (!amplitudeSpectrum || amplitudeSpectrum.length === 0) return 0;

  // Find the index of the maximum amplitude
  const maxIndex = amplitudeSpectrum.reduce(
    (maxIdx, val, idx, arr) => (val > arr[maxIdx] ? idx : maxIdx),
    0
  );

  // Convert index to frequency
  const frequency = (maxIndex * sampleRate) / (2 * amplitudeSpectrum.length);
  return frequency;
};

export default function SingingPitchDetector() {
  const [note, setNote] = useState(null);
  const [onKey, setOnKey] = useState(false);
  const [frequency, setFrequency] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [difference, setDifference] = useState(0);
  const audioContextRef = useRef(null);
  const analyserNodeRef = useRef(null);

  const startListening = async () => {
    if (isListening) return; // Prevent multiple starts
    setIsListening(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);
      const analyserNode = Meyda.createMeydaAnalyzer({
        audioContext,
        source,
        bufferSize: 2048,
        featureExtractors: ["amplitudeSpectrum"],
        callback: (features) => {
          if (features.amplitudeSpectrum) {
            const detectedFreq = getFrequency(features.amplitudeSpectrum, audioContext.sampleRate);
            if (detectedFreq > 0) {
              setFrequency(detectedFreq);

              // Find the closest note
              const closestNote = notes.reduce((prev, curr) =>
                Math.abs(curr.freq - detectedFreq) < Math.abs(prev.freq - detectedFreq) ? curr : prev
              );

              setNote(closestNote.note);

              // Check if the user is on key
              const onKeyStatus = Math.abs(closestNote.freq - detectedFreq) < 5;
              setOnKey(onKeyStatus);
            }
          }
        },
      });

      analyserNode.start();
      audioContextRef.current = audioContext;
      analyserNodeRef.current = analyserNode;
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopListening = () => {
    if (analyserNodeRef.current) {
      analyserNodeRef.current.stop();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsListening(false);
    setFrequency(null);
    setNote(null);
    setOnKey(false);
  };

  useEffect(() => {
    return () => {
      stopListening(); // Cleanup on component unmount
    };
  }, []);

  useEffect(() => {
    if (frequency !== null) {
      const closestNote = notes.reduce((prev, curr) =>
        Math.abs(curr.freq - frequency) < Math.abs(prev.freq - frequency)
          ? curr
          : prev
      );

      const diff = frequency - closestNote.freq;
      const scaledDiff = Math.max(-5, Math.min(5, (diff / closestNote.freq) * 100)); // Scale difference to -5 to 5
      setOnKey(Math.abs(diff) < closestNote.freq * 0.02); // Consider within 2% as "On Key"
      setDifference(scaledDiff.toFixed(1));
    }
  }, [frequency]);

  return (
    <div className="fixed top-40 left-0 right-0 w-full z-10 bg-gray-100">
    
      <div className="bg-gray-200 w-full h-[12rem] flex items-center justify-center">
      {(isListening)&&
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className={`text-${(onKey) ? "green" : "slate"}-500 text-4xl font-semibold`} >{note}</h1>
          <span>
            <ul className="flex gap-[9px] text-xl font-bold justify-between items-center">
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className={`text-${(onKey) ? "green" : "slate"}-500 text-xl font-semibold flex justify-between items-center`}>.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
              <li className="flex justify-between items-center">.</li>
            </ul>
          </span>
          <span className="flex flex-col justify-center items-center transition-all ease-in-out duration-5" style={{ translate: difference + "rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </span>
        </div>
}
      </div>
      


      <button className="fixed bottom-20 w-full flex justify-center">
        {
          (isListening)
            ? <button
              onClick={stopListening}
              className="border-b-4 border-r-4 border-red-500 active:border-b-0 active:border-r-0 p-6 rounded-lg text-white font-bold  bg-red-400 transition-all ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16">
                <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3" />
                <path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
              </svg>
            </button>
            : <button
              onClick={startListening}
              className="border-b-4 border-r-4 border-red-800 active:border-b-0 active:border-r-0 p-6 rounded-lg text-white font-bold bg-red-500 transition-all ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
              </svg>
            </button>
        }
      </button>

    </div>
  );
}


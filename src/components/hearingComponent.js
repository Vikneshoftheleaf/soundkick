"use client"

import React, { useState } from "react";
import { MidiNumbers } from "react-piano";
import SoundfontProvider from "@/util/soundProvider";
import Link from "next/link";
const HearingComponent = () => {
    const keys = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "Db4", "Eb4", "Gb4", "Ab4", "Bb4"]
    const [targetNote, setTargetNote] = useState(null);
    const [soundfont, setSoundfont] = useState(null);
    const [ans, setAns] = useState(null)

    const firstNote = MidiNumbers.fromNote("C4"); // C3 is the first note
    const lastNote = MidiNumbers.fromNote("C5"); // C5 is the last note

    const notes = Array.from({ length: lastNote - firstNote + 1 }, (_, i) =>
        MidiNumbers.getAttributes(firstNote + i)
    );

    const getRandomNote = () => {
        (ans!=null) && setAns(null)
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        setTargetNote(randomNote);

        if (soundfont) {
            soundfont.playNote(randomNote.midiNumber);
        }

    };

    function handleSubmit(key) {

        if(ans == null)
        {
            
        if (key == targetNote.note) {
            setAns(true)
        }
        else {
            setAns(false)
        }
        }


        

    }



    return (
        <div className="flex w-screen justify-center">

            <div className="lg:pt-48 p-36">
                <SoundfontProvider
                    instrumentName="acoustic_grand_piano"
                    hostname="https://d1pzp51pvbm36p.cloudfront.net"
                    render={({ isLoading, playNote, stopNote, instrument }) => {
                        if (!soundfont) setSoundfont({ playNote, stopNote });
                        return null; // No visual component for the SoundfontProvider
                    }}
                />
                <button onClick={getRandomNote} className="p-4 rounded-lg bg-blue-500 text-white ">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                            <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
                        </svg>
                    </span>
                </button>

            </div>


            <div className="fixed top-0 right-0 left-0 flex justify-start">
                {
                    (ans != null)
                        ? (ans) ? <div className="bg-green-100 text-green-800 w-full p-6 text-xl font-semibold flex flex-col gap-2 items-start justify-center">
                            <div className="flex gap-2 items-center justify-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                </span>
                                <h1>Correct</h1>

                            </div>
                            <div>
                                <p className="text-base font-normal">Corrrect key is  {(targetNote.note) && targetNote.note} </p>
                            </div>
                        </div>
                            : <div className="bg-red-100 text-red-800 w-full p-6 text-xl font-semibold flex flex-col gap-2 items-start justify-center">
                                <div className="flex gap-2 items-center justify-start">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                    </span>
                                    <h1>Wrong</h1>

                                </div>
                                <div>
                                    <p className="text-base font-normal">Corrrect key is  {(targetNote.note) && targetNote.note} </p>
                                </div>
                            </div>
                        : null
                }

            </div>


            <div className="fixed lg:bottom-40 bottom-10 left-0 right-0">
                <div className="flex flex-wrap gap-4 items-center justify-center p-4">
                    {
                        keys.map((item, index) => (
                            <button onClick={() => { handleSubmit(item) }} className="px-8 py-4 text-lg rounded-full bg-gray-100 outline-dashed outline-gray-200" key={index}>{item}</button>
                        ))
                    }
                    <Link href={'/piano'}> <u>Practise Piano</u></Link>
                </div>
            </div>

        </div>
    );
};

export default HearingComponent;

"use client"

import React, { useState, useEffect } from "react";
import { MidiNumbers } from "react-piano";
import SoundfontProvider from "@/util/soundProvider";
import Link from "next/link";
const HearingComponent = () => {
    const keys = ["C4", "Db4","D4","Eb4","E4","F4", "Gb4","G4","Ab4", "A4","Bb4", "B4","C5"]
    const [targetNote, setTargetNote] = useState(null);
    const [soundfont, setSoundfont] = useState(null);
    const [ans, setAns] = useState(null)
    const [loading, setLoading] = useState(true)

    const firstNote = MidiNumbers.fromNote("C4"); // C3 is the first note
    const lastNote = MidiNumbers.fromNote("C5"); // C5 is the last note

    const notes = Array.from({ length: lastNote - firstNote + 1 }, (_, i) =>
        MidiNumbers.getAttributes(firstNote + i)
    );

    const getRandomNote = () => {
        (ans != null) && setAns(null)
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        setTargetNote(randomNote);

        if (soundfont) {
            soundfont.playNote(randomNote.midiNumber);
        }

    };

    function handleSubmit(key) {
        if (targetNote && targetNote.note)
        {
            if (ans == null) {


                if (key == targetNote.note) {
                    setAns(true)
                }
                else {
                    setAns(false)
                }
            }

        }

        

    }
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    },[])

    return (
        <div className="flex w-screen justify-center">

{(loading)&&
            <div className="absolute z-10 bg-white h-screen w-screen flex justify-center items-center">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
}
            <div className="lg:pt-48 p-36">
                <SoundfontProvider
                    instrumentName="acoustic_grand_piano"
                    hostname="https://d1pzp51pvbm36p.cloudfront.net"
                    render={({ isLoading, playNote, stopNote, instrument }) => {
                        if (!soundfont) setSoundfont({ isLoading, playNote, stopNote });
                        return null; // No visual component for the SoundfontProvider
                    }}
                />

                <button onClick={getRandomNote} className="border-blue-800 active:border-b-0 active:border-r-0 transition-all ease-in-out  border-b-4 border-r-4 p-4 rounded-lg bg-blue-500 text-white ">
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


            <div className="fixed lg:bottom-40 bottom-10 left-0 right-0 flex flex-col items-center">
                <div className="flex flex-wrap gap-4 items-center justify-center p-4">
                    {
                        keys.map((item, index) => (
                            <button onClick={() => { handleSubmit(item) }} className="border-gray-200 border-b-4 border-r-4 active:border-b-0 active:border-r-0 transition-all ease-in-out px-8 py-4 text-lg rounded-full bg-gray-50 " key={index}>{item}</button>
                        ))
                    }
                </div>
                <Link href={'/piano'} className="text-cente"> <u>Practice Piano</u></Link>

            </div>

        </div>
    );
};

export default HearingComponent;

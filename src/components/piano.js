"use client"
import React, { useState, useEffect } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import SoundfontProvider from "@/util/soundProvider";

import styles from "@/app/piano/Practicepiano.module.css"

const PracticePiano = () => {
  const firstNote = MidiNumbers.fromNote("C3"); // Starting note
  const lastNote = MidiNumbers.fromNote("C5"); // Ending note
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });


  return (
    <div className={styles.container}>
      <div className={styles.pianoWrapper}>
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          hostname="https://d1pzp51pvbm36p.cloudfront.net"
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
            
              noteRange={{ first: firstNote, last: lastNote }}
              playNote={(midiNumber) => {
                playNote(midiNumber);
              }}
              stopNote={(midiNumber) => stopNote(midiNumber)}
              width={0} // Width will be handled via CSS
              keyboardShortcuts={keyboardShortcuts}
            />
          )}
        />
      </div>
    
    </div>
  );
};

export default PracticePiano;

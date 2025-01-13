import * as Tone from 'tone';

export const playNote = (key) => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(key, "4n");
};

"use client"

import React, { Component } from "react";
import Soundfont from "soundfont-player";

class SoundfontProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: null,
    };
  }

  componentDidMount() {
    this.loadInstrument();
  }

  componentDidUpdate(prevProps) {
    if (this.props.instrumentName !== prevProps.instrumentName) {
      this.loadInstrument();
    }
  }

  loadInstrument() {
    const { instrumentName, hostname } = this.props;

    Soundfont.instrument(new AudioContext(), instrumentName, {
      soundfont: "MusyngKite",
      format: "mp3",
      hostname,
    }).then((instrument) => {
      this.setState({ instrument });
    });
  }

  render() {
    return this.props.render({
      isLoading: !this.state.instrument,
      playNote: (midiNumber, gain = 10) => {
        if (this.state.instrument) {
          this.state.instrument.play(midiNumber, null, {
            gain, // Set the volume using the gain parameter
          });
        }
      },
      stopNote: (midiNumber) => {
        if (this.state.instrument) {
          this.state.instrument.stop(midiNumber);
        }
      },
      
    });
  }
}

export default SoundfontProvider;

// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

/**
 * External Library:
 *  https://youtu.be/z65DSP5jw8k
*/
import trumpet2 from '../img/trumpet5.jpg';


// project imports
import { Instrument, InstrumentProps } from '../Instruments';




/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface TrumpetKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octaves: number;
  index: number; // octaves + index together give a location for the piano key

}

export function PianoKey({
  note,
  synth,
  minor,
  index,
}: TrumpetKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-black gold h3': minor, // minor keys are black
        'black bg-gold h4': !minor, // major keys are gold
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>
  );
}

// eslint-disable-next-line


function TrumpetType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}
// for trumpet move all music notes by Bb (b-flat) 
// -2 for every value given??
/**
 * C = Bb
 * Db = B
 * D = C
 * Eb = C#(Db)
 * E = D
 * F = Eb
 * Gb = E
 * G = F
 * Ab = F#(Gb)
 * A = G
 * Bb = Ab
 * B = A
 *  
    //notes + index rework

    { note: 'D', idx: 0 },
    { note: 'Eb', idx: 0.5 },
    { note: 'E', idx: 1 },
    { note: 'F', idx: 2 },
    { note: 'Gb', idx: 1.5 },
    { note: 'G', idx: 3 },
    { note: 'Ab', idx: 3.5 },
    { note: 'A', idx: 4 },
    { note: 'Bb', idx: 4.5 },
    { note: 'B', idx: 5 },
    { note: 'C', idx: 6 },
    { note: 'Db', idx: 5.5 },
 */
    
 function Trumpet(): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'Db', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'Eb', idx: 1.5 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'Gb', idx: 3.5 },
    { note: 'G', idx: 4 },
    { note: 'Ab', idx: 4.5 },
    { note: 'A', idx: 5 },
    { note: 'Bb', idx: 5.5 },
    { note: 'B', idx: 6 },
  ]);
  //note modifications
  /**
   * reverb variables
   */
  const reverb = new Tone.Reverb({
    decay : 3 ,
    wet: 1
    }).toDestination();

  /**
   * vibrato variables
   */
  const vibrato = new Tone.Vibrato({
    maxDelay : 0.005 ,
    frequency : 4.5 ,
    depth: 0.4 ,
    type: 'triangle'
    }).toDestination();
  
  /**
   * pitch shift variables
   */
  const pitchShift = new Tone.PitchShift({
    pitch : -2,
    }).toDestination();
  /**
   * filter variables
   */
  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 90 ,

  }).toDestination();

  /**
   * main trumpet instrument
   */
  const trumpetInstrament = new Tone.Synth({
    oscillator: {
      type: 'fmsine',
      modulationType: "sine", //sawtooth
      volume: 0
    },
    envelope:{
      attack: 0.161,
      decay: 1.22,
      sustain: 0,
      release: 0.6,
    },}).toDestination();
    trumpetInstrament.connect(reverb).connect(filter).connect(vibrato).connect(pitchShift)

  return (
    <div className="pv4">
      <div className = "turmpet">
      <img src={ trumpet2 }/>
      </div>
      
      <div className="relative dib h4 w-100 ml4"> 
        {Range(2, 7).map(octaves =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octaves}`;
            return (
              <PianoKey
                key={note} //react key
                note={note}
                synth={trumpetInstrament} // new trumpet notes
                minor={isMinor}
                octaves={octaves}
                index={(octaves - 2) * 7 + key.idx}

              />
            );
          }),
        )}
        
      </div>
      
    </div>
  );
}



// change Piano to Trumpet??
export const Area_Turtle_Instrument = new Instrument('Area-Turtle_Instrument: Trumpet', Trumpet);


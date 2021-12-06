import * as Tone from "tone";
import { List } from "immutable";
import { Instrument, InstrumentProps } from "../Instruments";
import triangle from "../img/Triangle.png";

function Triangle({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: "C7", coords: "350,100,40" },
    { note: "Db7", coords: "450,100,40" },
    { note: "D7", coords: "500,100,40" },
    { note: "Eb7", coords: "550,100,40" },
    { note: "E7", coords: "600,100,40" },
    { note: "F7", coords: "650,100,40" },
    { note: "Gb7", coords: "700,100,40" },
    { note: "G7", coords: "750,100,40" },
    { note: "Ab7", coords: "800,100,40" },
    { note: "A7", coords: "870,100,40" },
    { note: "Ab6", coords: "730,180,40" },
    { note: "A6", coords: "650,250,40" },
    { note: "Gb8", coords: "400,140,40" },
    { note: "G8", coords: "420,160,40" },
    { note: "Ab8", coords: "440,180,40" },
    { note: "A8", coords: "460,200,40" },
    { note: "Ab8", coords: "480,220,40" },
    { note: "C8", coords: "500,240,40" },
    { note: "E8", coords: "520,260,40" },
    { note: "Db8", coords: "560,280,40" },
  ]);
  //   const setOscillator = (newType: Tone.ToneOscillatorType) => {
  //     setSynth(oldSynth => {
  //       oldSynth.disconnect();

  //       return new Tone.Synth({
  //         oscillator: { type: newType } as Tone.OmniOscillatorOptions,
  //       }).toDestination();
  //     });
  //   };

  function handleClick(event: any): void {
    event.preventDefault();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(event.target.title, "8n");
  }
  return (
    <div className="Triangle">
      <img
        src={triangle}
        alt="triangle"
        useMap="#triangle"
        width="1190"
        height="340"
      />
      <map id="triangle" name="triangle">
        {keys.map((key) => {
          return (
            <area
              key={key.coords}
              title={key.note}
              shape="circle"
              coords={key.coords}
              href=""
              onClick={handleClick}
            />
          );
        })}
      </map>
    </div>
  );
}
export const TriangleInstrument = new Instrument("Jackyqiu123-Triangle", Triangle);

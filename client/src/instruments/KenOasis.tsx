// 3rd party library imports
import * as Tone from "tone";
import React, { useState } from "react";
import { List } from "immutable";
import xylophone from "../img/xylophone.png";
// project imports

import { Instrument, InstrumentProps } from "../Instruments";

const Xylophone = ({ synth, setSynth }: InstrumentProps): JSX.Element => {
  const [sampler, setSampler] = useState(
    new Tone.Sampler({
      C4: `${process.env.PUBLIC_URL}/Xylophone/C4.mp3`,
      C5: `${process.env.PUBLIC_URL}/Xylophone/C5.mp3`,
      C6: `${process.env.PUBLIC_URL}/Xylophone/C6.mp3`,
      C7: `${process.env.PUBLIC_URL}/Xylophone/C7.mp3`,
      G3: `${process.env.PUBLIC_URL}/Xylophone/G3.mp3`,
      G4: `${process.env.PUBLIC_URL}/Xylophone/G4.mp3`,
      G5: `${process.env.PUBLIC_URL}/Xylophone/G5.mp3`,
      G6: `${process.env.PUBLIC_URL}/Xylophone/G6.mp3`,
    }).toDestination()
  );
  const keys = List([
    {
      id: 1,
      note: "F3",
      coords: "3, 175, 25, 323",
    },
    {
      id: 2,
      note: "F#3",
      coords: "17, 3, 40, 175",
    },
    {
      id: 3,
      note: "G3",
      coords: "32, 176, 54, 320",
    },
    {
      id: 4,
      note: "G#3",
      coords: "46.5, 7.5, 68, 175",
    },
    {
      id: 5,
      note: "A4",
      coords: "60, 175, 82, 316",
    },
    {
      id: 6,
      note: "A#4",
      coords: "75, 13, 87, 175",
    },
    {
      id: 7,
      note: "B4",
      coords: "90, 175, 111, 312",
    },
    {
      id: 8,
      note: "C4",
      coords: "118, 175, 140, 308",
    },
    {
      id: 9,
      note: "C#4",
      coords: "133, 22.5, 154, 175",
    },
    {
      id: 10,
      note: "D4",
      coords: "147, 175, 169, 305",
    },
    {
      id: 11,
      note: "D#4",
      coords: "161.5, 27.5, 183, 175",
    },
    {
      id: 12,
      note: "E4",
      coords: "175.5, 175, 198, 301.5",
    },
    {
      id: 13,
      note: "F4",
      coords: "204, 175, 226, 299",
    },
    {
      id: 14,
      note: "F#4",
      coords: "218.5, 35.5, 240, 175",
    },
    {
      id: 15,
      note: "G4",
      coords: "233, 175, 255, 296.5",
    },
    {
      id: 16,
      note: "G4#",
      coords: "248, 41, 270, 175",
    },
    {
      id: 17,
      note: "A5",
      coords: "262, 175, 284, 292",
    },
    {
      id: 18,
      note: "A#5",
      coords: "276.5, 45.5, 298, 175",
    },
    {
      id: 19,
      note: "B5",
      coords: "290, 175, 313, 290",
    },
    {
      id: 20,
      note: "C5",
      coords: "320, 178, 342, 287",
    },
    {
      id: 21,
      note: "C#5",
      coords: "334, 55.5, 356, 178",
    },
    {
      id: 22,
      note: "D5",
      coords: "348, 178, 370, 284",
    },
    {
      id: 23,
      note: "D#5",
      coords: "363, 61, 384.5, 178",
    },
    {
      id: 24,
      note: "E5",
      coords: "377.5, 178, 400, 280",
    },
    {
      id: 25,
      note: "F5",
      coords: "406, 178, 428, 277.5",
    },
    {
      id: 26,
      note: "F#5",
      coords: "420.5, 69, 442, 178",
    },
    {
      id: 27,
      note: "G5",
      coords: "435, 178, 456.5, 275",
    },
    {
      id: 28,
      note: "G#5",
      coords: "450, 74, 470, 178",
    },
    {
      id: 29,
      note: "A6",
      coords: "464, 178, 485.5, 271.5",
    },
    {
      id: 30,
      note: "A#6",
      coords: "477.5, 77.5, 500, 178",
    },
    {
      id: 31,
      note: "B6",
      coords: "493, 178, 515, 268",
    },
    {
      id: 32,
      note: "C6",
      coords: "521, 178, 543, 264",
    },
    {
      id: 33,
      note: "C#6",
      coords: "536, 84, 557.5, 178",
    },
    {
      id: 34,
      note: "D6",
      coords: "550, 178, 572, 260.5",
    },
    {
      id: 35,
      note: "D#6",
      coords: "564.5, 89.5, 586.6, 178",
    },
    {
      id: 36,
      note: "E6",
      coords: "579, 178, 601, 258",
    },
    {
      id: 37,
      note: "F6",
      coords: "608, 179, 629.5, 253.5",
    },
    {
      id: 38,
      note: "F#6",
      coords: "620, 99, 644, 179",
    },
    {
      id: 39,
      note: "G6",
      coords: "637, 179, 658, 251.5",
    },
    {
      id: 40,
      note: "G#6",
      coords: "651, 104, 672, 179",
    },
    {
      id: 41,
      note: "A7",
      coords: "665, 179, 687, 248",
    },
    {
      id: 42,
      note: "A#7",
      coords: "680, 108.5, 702, 179",
    },
    {
      id: 43,
      note: "B7",
      coords: "694, 179, 716, 245",
    },
    {
      id: 44,
      note: "C7",
      coords: "723, 174, 745, 240",
    },

    /* TODO */
  ]);
  const onClickHandler = (event: any) => {
    sampler.triggerAttackRelease(event.target.getAttribute("data-note"), "8n");
  };
  return (
    <div>
      <img
        src={xylophone}
        alt="xylophone"
        useMap="#xylophone"
        width="746"
        height="327"
      />
      <map id="xylophone" name="xylophone">
        {keys.map((key) => {
          return (
            <area
              key={key.note}
              data-note={key.note}
              shape="rect"
              coords={key.coords}
              onClick={onClickHandler}
              // onMouseUp={onMouseUpHandler}
              // onMouseDown={onMouseDownHandler}
              alt="map"
            />
          );
        })}
      </map>
    </div>
  );
};

export const XylophoneInstrument = new Instrument("Xylophone", Xylophone);

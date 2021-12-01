// 3rd party library imports
import * as Tone from 'tone';
import { List} from 'immutable';
import classNames from 'classnames';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

const  circle = {
    height: "150px",
    width: "150px",
    borderRadius:"50%",
    zIndex:0,
    left: "200px",
    top: "14px",
    border:"3px solid",
    backgroundColor:"rgb(128,128,128)"
    
}
const curve = {
    width: "700px",
    height: "700px",
    borderRadius:"50%",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor:"transparent",
    zIndex: -0,
    top: "-350px",
    left: "-250px",
    backgroundColor:"rgb(210,180,140)"
    
}
const second_curve ={
    width: "500px",
    height: "500px",
    borderRadius:"50%",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor:"transparent",
    top: "-190px",
    left: "250px",
    backgroundColor:"rgb(210,180,140)"
}
interface UkuleleKeyProps{
    note:string;
    duration?:string;
    synth?:Tone.Synth;
    index:number;
}
export function UkuleleKey({
    note,
    synth,
    index,
}:UkuleleKeyProps): JSX.Element {
    
    return (
    <div
      onMouseEnter={() => synth?.triggerAttack(`${note}`)}
      onMouseLeave={()=>synth?.triggerRelease(`+0.25`)}
      className = "ba absolute b--black hover-near-black"
      style ={{
          top:`${index * 35}px`,
          width:"1000px",
          left: "30px",
          zIndex: 10,
          border:"2px solid"
      }}
    >
    </div>

    );

}

function Ukulele({synth, setSynth}:InstrumentProps): JSX.Element{
    const keys = List([
        {note: "G4",idx:1},
        {note: "C4",idx:2},
        {note: "E4",idx:3},
        {note: "A4",idx:4},
    ])

    return(
        <div className="pv4">
            <div className="relative dib h5 w-100 ml4">
                <div className= "ba absolute dim" style ={{
                    top:"8px",
                    zIndex:2,
                    height:"10rem",
                    width:"3rem",
                    border:"3px solid",
                    backgroundColor:"rgb(48,0,0)",
                    
                }} >
            </div>
            <div className="ba absolute bb-ns br-ns"style={curve}></div>
            <div className="ba absolute  bb-ns br-ns" id="circle" style={second_curve}></div>
            <div className="ba absolute " id="circle" style={circle}></div>
            {keys.map(key => {
                return(
                    <UkuleleKey
                        key={key.note}
                        note={key.note}
                        synth={synth}
                        index={key.idx}
                    />
                )
            }
            )}
            </div>
            
        </div>
    )
}
export const UkuleleInstrument = new Instrument('Ukulele', Ukulele);
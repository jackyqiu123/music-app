// 3rd party library imports
import * as Tone from 'tone';
import { List,Range} from 'immutable';


// project imports
import { Instrument, InstrumentProps } from '../Instruments';

const  circle = {
    height: "180px",
    width: "180px",
    borderRadius:"50%",
    zIndex:0,
    left: "240px",
    border:"3px solid",
    backgroundColor:"rgb(64, 64, 64)"
    
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
    top: "-190px",
    left: "160px",
    backgroundColor:"rgb(210,180,140)",
    rotate:"-19deg"
}
const rect = {
    width:"500px",
    height:"120px",
    border:"2px solid black",
    zIndex:2,
    left:"530px",
    backgroundColor:"rgb(80,41,0)",
    top:"29px"

    
}
const Ukulele_chord ={
  chord_analysis(chord="none"){
      switch(chord){
        case "C":
            return List([
                {note: "G4",idx:1},
                {note: "C4",idx:2},
                {note: "E4",idx:3},
                {note: "C5",idx:4},
            ])
        case "Dm":
            return List([
                {note: "A4",idx:1},
                {note: "D4",idx:2},
                {note: "F4",idx:3},
                {note: "A4",idx:4},
            ])
        case "Em":
            return List([
                {note: "G4",idx:1},
                {note: "E4",idx:2},
                {note: "G4",idx:3},
                {note: "B4",idx:4},
            ])
        case "F":
            return List([
                {note: "A4",idx:1},
                {note: "C4",idx:2},
                {note: "F4",idx:3},
                {note: "A4",idx:4},
            ])
        case "G":
            return List([
                {note: "G4",idx:1},
                {note: "D4",idx:2},
                {note: "G4",idx:3},
                {note: "B4",idx:4},
            ])
        case "Am":
            return List([
                {note: "A4",idx:1},
                {note: "C4",idx:2},
                {note: "E4",idx:3},
                {note: "A4",idx:4},
            ])
        default:
            return List([
                {note: "G4",idx:1},
                {note: "C4",idx:2},
                {note: "E4",idx:3},
                {note: "A4",idx:4},
            ])
      }
    }

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
      onMouseDown={(event) =>{
          event.preventDefault();
          const html = event.target as Element;
          const data_note = html.getAttribute("data-note");
          synth?.triggerAttack(`${data_note}`)
        }}
      onMouseUp={()=>synth?.triggerRelease(`+0.25`)}
      className = "ba pointer absolute b--black"
      id={`${index}`}
      style ={{
          top:`${index * 35}px`,
          width:"1000px",
          left: "30px",
          zIndex: 4,
          border:"2px solid rgb(217, 217, 217)"
      }}
      data-note = {`${note}`}
    >
    </div>

    );

}
function clean_up_button_activate(){
    const buttons= document.getElementById("chord_type");
    const child_element = buttons?.childNodes as NodeListOf<ChildNode>;
    for(let i=0 ; i< child_element.length ; i++){
        const child = child_element[i] as Element;
        if(child.classList.contains("black")){
            child.classList.remove("b--black","black");
            child.classList.add("gray","b--light-gray");
        }
    }


}

function UkuleleChord({title}:any):JSX.Element{

    return (
        <button
          className='dim pointer gray b--light-gray '
          id ={title}
          style={{
              width:"70px",
              height:"50px"
          }}
          onClick={(event)=>{
            event.preventDefault();
            clean_up_button_activate()
            const html = event.target as Element;
            const id = html.id;
            html.classList.remove("gray","b--light-gray");
            html.classList.add("b--black","black");
            const chrod_list = Ukulele_chord.chord_analysis(id);
            chrod_list.map(string_obj=>{
                const uku_string = document.getElementById(`${string_obj.idx}`);
                uku_string?.setAttribute("data-note", string_obj.note);
                return string_obj;
            })
          }}
        >
          {title}
        </button>
      );
}


function Ukulele({synth, setSynth}:InstrumentProps): JSX.Element{

    const chord_type :List<string> = List([
        "C",
        "Dm",
        "Em",
        "F",
        "G",
        "Am",
        "none",
    ]) as List<string>;

    const keys = Ukulele_chord.chord_analysis()
    return(
        <div className="pv4">
            <div className="relative dib h5 w-100 ml4">
                <div className= "ba absolute " style ={{
                    top:"8px",
                    zIndex:2,
                    height:"10rem",
                    width:"3rem",
                    border:"3px solid",
                    backgroundColor:"rgb(80,41,0)",
                    
                }} >
            </div>
            <div className= "ba absolute " style={rect} ></div>
            {Range(0,10).map(line_num =>{
                const left_move =550+ line_num*50;
                return(
                    <div className= "ba absolute"
                        key = {left_move} 
                        style={{
                        height:"120px",
                        border:"3px solid rgb(77, 77, 77)",
                        zIndex:3,
                        left:`${left_move}px`,
                        top:"29px"
                    }} ></div>
                )
            })}
            <div className=" absolute "style={curve}></div>
            <div className=" absolute  " id="circle" style={second_curve}></div>
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
            <div className={'p14 pt4 flex absolute'}
                id={"chord_type"} 
                style={{
                    left:"600px"
                    }}>
                {chord_type.map(chord =>{
                   return <UkuleleChord
                        key={chord}
                        title={chord}
                        />
                })}
            </div>
        </div>
    )
}
export const UkuleleInstrument = new Instrument('ZhilingHuang21-Ukulele', Ukulele);
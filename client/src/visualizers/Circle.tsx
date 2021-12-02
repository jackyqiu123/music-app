// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// // project imports
// import { Visualizer } from '../Visualizers';


// export const Circle = new Visualizer(
//   'Circle',
//   (p5: P5, analyzer: Tone.Analyser) => {
//     const width = window.innerWidth;
//     const height = window.innerHeight / 2;
//     // const dim = Math.min(width, height);
//     p5.translate(width/2, height/2);
//     p5.background(0, 0, 0, 255);
//     p5.angleMode(p5.DEGREES);

//     // p5.strokeWeight(dim * 0.01);
//     p5.stroke(255);
//     p5.noFill();

//     const values = analyzer.getValue();
//     p5.beginShape();
//         for(let i = 0; i <= 360; i++){
//             let index = Math.floor(p5.map(values[i] as number, 0, 180,0,values.length -1));
//             let r = p5.map(values[index] as number, -1, 1, 150,350)
//             let x = r * Math.sin(i);
//             let y = r * Math.cos(i);
//             p5.vertex(x - 200,y)
//         }
//     p5.endShape();
//   },
// );
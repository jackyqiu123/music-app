import P5 from "p5";
import * as Tone from "tone";
import { StereoFeedbackEffect } from "tone/build/esm/effect/StereoFeedbackEffect";
import { SideNav } from "../SideNav";

// project imports
import { Visualizer } from "../Visualizers";

// export const TriangleVisualizer = new Visualizer(
//     'CylindricalWave',
//     (p5: P5, analyzer: Tone.Analyser) => {
//         const width = window.innerWidth;
//         const height = window.innerHeight / 2;
//         const dim = Math.min(width, height);

//         p5.background(0, 0, 0, 255);

//         p5.strokeWeight(dim * 0.01);
//         p5.stroke(255, 255, 255, 255);
//         p5.noFill();

//         const values = analyzer.getValue();
//         p5.beginShape();
//         for (let i = 0; i < 200; i++) {
//             const amplitude = values[i] as number;
//             for(let j = 0; j < 200; j++){
//                 // let x = p5.map(i, j, 199, 0,width)
//                 // let y = height / 2 + amplitude * height;
//                 let x = height / 2 + amplitude * width;
//                 let y = p5.map(i, j, 199, 0,height);

//                 p5.vertex(x+380,y);
//             }
//         }
//         p5.endShape();
//     },
// );
export const TriangleVisualizer = new Visualizer(
  "Tornado",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < 200; i++) {
      const amplitude = values[i] as number;
      for (let j = 0; j < 50; j++) {
        let x = height / 2 + amplitude * width;
        let y = p5.map(i, j, 199, 0, height);

        p5.vertex(x + 380, y);
      }
    }
    p5.endShape();
  }
);
export const Circle = new Visualizer(
  "Circle",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    // const dim = Math.min(width, height);
    p5.translate(width / 2, height / 2);
    p5.background(0, 0, 0, 255);
    p5.angleMode(p5.DEGREES);

    // p5.strokeWeight(dim * 0.01);
    p5.stroke(255);
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i <= 360; i++) {
      let index = Math.floor(
        p5.map(values[i] as number, 0, 180, 0, values.length - 1)
      );
      let r = p5.map(values[index] as number, -1, 1, 150, 350);
      let x = (r - 100) * Math.sin(i);
      let y = (r - 100) * Math.cos(i);
      p5.vertex(x - 150, y);
    }
    p5.endShape();
  }
);

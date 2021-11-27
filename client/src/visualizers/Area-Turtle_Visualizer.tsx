// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const Area_Turtle_Visualizer = new Visualizer(
  'Area-Turtle_Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    //const dim = Math.min(width, height);
    p5.background(153,153,0);
    //p5.strokeWeight(dim * 0.01);
    p5.noFill();

    const values = analyzer.getValue();
    for (var j = 0; j <55; j++){
      //var r = p5.map(p5.sin(j),-1,1,0,225);
      var r = p5.random(0,(p5.map(p5.sin(j),-1,1,0,225)));
      var g = p5.map(j,0,20,0,255);
      //var g = p5.random(0,(p5.map(j,0,20,0,255)));
      var b = p5.map(p5.cos(j),-1,1,225,0);
      //var b = p5.random(0,(p5.map(p5.cos(j),-1,1,225,0)));
      p5.stroke(r,g,b);
      let space_between_lines = width / 128;

      p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        p5.fill(r,g,b);
        let x = p5.map(i, 0, values.length - 1, 0, width);
        let y = (height + amplitude * height*p5.cos(i))-window.innerHeight/5;
        //let y = p5.map(amplitude, 0, 256, height/2, 0);
      // Place vertex
        //p5.vertex(x, y);
        p5.rect(width - (i * space_between_lines), height-y, space_between_lines, height - y);
      }
      p5.endShape();
    }
  },
);

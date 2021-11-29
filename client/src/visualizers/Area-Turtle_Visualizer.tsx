// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const Area_Turtle_Visualizer = new Visualizer(
  'Area-Turtle_Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    
    //function mousePressed(){}
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();

    p5.background(255);
    
    var inc = 0.01;
    let scl = 20;
    let cols = width/scl;
    let rows = height/scl;
    
    var y2 = 0;
    for(var y = 0; y <rows;y++){
      var x2 = 0
      for(var x = 0;x<cols;x++){
        var r = p5.noise(x2,y2)*255;
        var v = p5.createVector(0);
        x2 += inc;
        p5.stroke(0);
        p5.fill(r);
        p5.rect(x*scl,y*scl,scl,scl);
      }
    }
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
  
      p5.fill(p5.random(225),p5.random(225),p5.random(225))

      const Radius = height * amplitude/2;
      const beepSize = height * amplitude/2;
      
      p5.ellipse(p5.random(width), p5.random(height), Radius, Radius);
      p5.rect(p5.random(width), p5.random(height), beepSize, beepSize);
    p5.endShape()
    }
   
  },
);

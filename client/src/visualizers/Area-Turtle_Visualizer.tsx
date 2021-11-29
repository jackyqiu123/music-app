// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

let phase = 0
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
        var g = p5.noise(x2,y2)*255;
        var b = p5.noise(x2,y2)*255;
        var v = p5.createVector(0);
        x2 += inc;
        p5.stroke(0);
        p5.fill(r,g,b);
        p5.rect(x*scl,y*scl,scl,scl);
      }
    }
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
  
      p5.fill(p5.random(225),p5.random(225),p5.random(225))

      // const Radius = height * amplitude/4;
      // const Size = height * amplitude/4;

      // const bassX = p5.noise(p5.millis() / 1000) * width;
			// const bassY = p5.noise(i / 100) * height;

      // const beepX = p5.noise(p5.millis() / 500) * width;
			// const beepY = p5.noise(i / 50) * height;
      
      // p5.ellipse(p5.random(width), p5.random(height), Radius, Radius);
      // p5.rect(p5.random(width), p5.random(height), Size, Size);

      //p5.ellipse(bassX, bassY, Radius, Radius);
      //p5.rect(beepX, beepY, Size, Size);
    p5.endShape()
    }
    phase +=1
    const amplitude = values[0] as number;
    const Radius = height * amplitude;
    const Size = height * amplitude;

    const bassX = p5.noise(p5.millis() / 1000) * width;
		const bassY = p5.noise(phase / 100) * height;

    const beepX = p5.noise(p5.millis() / 500) * width;
		const beepY = p5.noise(phase / 50) * height;
      
    p5.ellipse(p5.random(width), p5.random(height), Radius, Radius);
    p5.rect(p5.random(width), p5.random(height), Size, Size);

    p5.ellipse(bassX, bassY, Radius, Radius);
    p5.rect(beepX, beepY, Size, Size);
    
  },
);

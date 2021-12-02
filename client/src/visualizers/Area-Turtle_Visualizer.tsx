// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

var phase = 0
var t = 0;

export const Area_Turtle_Visualizer = new Visualizer(
  'Area-Turtle_Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();

    p5.background(255);
    /**
     * background weird thing
     */
    var inc = 0.01;
    let scl = 20;
    let cols = width/scl;
    let rows = height/scl;

    var y2 = 0;
    for(var y = 0; y <rows;y++){
      var x2 = 0
      for(var x = 0;x<cols;x++){
        var r = p5.noise(x2,y2) * 255;
        var g = p5.noise(x2,y2) * 191;
        var b = p5.noise(x2,y2) * 0;
        var v = p5.createVector(0);
        x2 += inc;
        p5.stroke(0);
        p5.fill(r,g,b);
        p5.rect(x*scl,y*scl,scl,scl);
      }
    }
    /**
     * center rectangle wave
     */
    p5.beginShape();
    for (let j = 0; j < values.length; j++) {
      const amplitude = values[j] as number;
      const x2 = p5.map(j, 0, values.length - 1, 0, window.innerWidth);
      const y2 = height / 2 + amplitude * window.innerHeight/4;
      // Place vertex
      p5.fill(225);
      p5.stroke(0)
      p5.rect(x2, y2,10,20);

    }
    p5.endShape();
    /**
     * top and bottom wave motions
     */
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x1 = p5.map(i, 0, values.length - 1, 0, window.innerWidth);
      const y1 = height / 2 + amplitude * p5.cos(i)*window.innerHeight/4;
      // Place vertex
      p5.noFill();
      p5.stroke(p5.random(225),p5.random(225),p5.random(225))
      p5.vertex(x1, y1-window.innerHeight/4+window.innerHeight/3);
      
    }
    p5.endShape();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x1 = p5.map(i, 0, values.length - 1, 0, window.innerWidth);
      const y1 = height / 2 + amplitude * p5.cos(i)*window.innerHeight/4;
      p5.noFill();
      p5.stroke(p5.random(225),p5.random(225),p5.random(225))
      p5.vertex(x1, y1-window.innerHeight/3+window.innerHeight/4);
    }
    p5.endShape();
    /**
     * rectangles/ellipses
     */
    phase +=1
    const amplitude = values[0] as number;
    const Radius = height * amplitude/2;
    const Size = height * amplitude/2;

    const eliX = p5.noise(p5.millis() / 1000) * width;
		const eliY = p5.noise(phase / 100) * height;

    const rectX = p5.noise(p5.millis() / 500) * width;
		const rectY = p5.noise(phase / 50) * height;
    p5.fill(255,191,0)
    p5.ellipse(p5.random(width), p5.random(height), Radius, Radius);
    p5.rect(p5.random(width), p5.random(height), Size, Size);

    p5.ellipse(eliX, eliY, Radius, Radius);
    p5.rect(rectX, rectY, Size, Size);
    /**
     * weird string thing
     */
    var x1 = width * p5.noise(t + 15);
    var x2 = width * p5.noise(t + 25);
    var x3 = width * p5.noise(t + 35);
    var x4 = width * p5.noise(t + 45);
    var y1 = height * p5.noise(t + 55);
    var y2 = height * p5.noise(t + 65);
    var y3 = height * p5.noise(t + 75);
    var y4 = height * p5.noise(t + 85);
    //p5.stroke(0, 18);
    var r = p5.noise(x2,y2) * 255;
    var g = p5.noise(x2,y2) * 191;
    var b = p5.noise(x2,y2) * 0;
    p5.fill(r,g,b);
    p5.stroke(0,19)
    p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.005;

  // clear the background every 500 frames using mod (%) operator
    if (p5.frameCount % 500 == 0) {
	    p5.background(255);
    }
  },
);

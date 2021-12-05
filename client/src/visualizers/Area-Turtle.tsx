//3rd party library imports
import { SSL_OP_NO_QUERY_MTU } from 'constants';
import P5 from 'p5';
import * as Tone from 'tone';
import { couldStartTrivia } from 'typescript';

//project imports
import { Visualizer } from '../Visualizers';

let angle = 0;

//global variable 

let nDiv = 5; // must be an odd number
let step = 0.05;
let colors: any[];



export const Area_Turtle_Visualizer = new Visualizer(
  'Area-Turtle_Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    var r = p5.noise(1) * 255;
    var g = p5.noise(1) * 255;
    var b = p5.noise(1) * 255;
    var a = p5.map(p5.sin(p5.frameCount), -1, 1, 50, 255);
    var b = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 50, 191);
    var c = p5.map(p5.sin(p5.frameCount / 4), -1, 1, 50, 0);

    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();
    p5.noStroke();
    p5.noFill();


    colors = [p5.color(r,g,b), p5.color(0, 0, 0)];
    p5.rectMode(p5.CENTER)
    p5.angleMode(p5.DEGREES);
    p5.background(0);

    /**
     * background moving
     */
    let percent = (p5.frameCount / 500) % (2 * step);
    var x = 0;
    //for (let i = 1; i > 0; i -= step) {
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
      let alpha = p5.pow(i + percent, 5);
      drawRays(alpha * width*amplitude, alpha * height*amplitude, x);
      x++;
    //}
  }

    /**
     * moving sine circle
     */
    for (var k = 0; k < 200; k++) {

      p5.push();
      p5.noFill();
      p5.translate(width / 2 , height / 2);
      p5.rotate(p5.sin(p5.frameCount + k) * 100);
      p5.rectMode(p5.CENTER);
      var a = p5.map(p5.sin(p5.frameCount), -1, 1, 50, 255);
      var b = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 50, 191);
      var c = p5.map(p5.sin(p5.frameCount / 4), -1, 1, 50, 0);
      p5.stroke(a, b, c);
      //p5.square(0,0,100);
      p5.rect(0, 0, (600 - k * 3), (600 - k * 3), (200 - k));
      p5.pop();
    }
    for (let j = 0; j < values.length; j++) {
      const amplitude = values[j] as number;

      p5.push();
      p5.translate(width/2, height/2);
      p5.rotate(j + 2 * angle + amplitude * 10);
      p5.rectMode(p5.CENTER);
      var a = p5.map(p5.sin(p5.frameCount), -1, 1, 50, 255);
      var b = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 50, 191);
      var c = p5.map(p5.sin(p5.frameCount / 4), -1, 1, 50, 0);
      p5.stroke(a, b, c);
      p5.fill(a, b, c);
      p5.square(0, 0, amplitude*100);
      p5.noFill();
      p5.pop();
    }

    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      for (let l = 0; l < (360 * amplitude); l += (1)) {
        var r = p5.noise(1) * 255;
        var g = p5.noise(1) * 191;
        var b = p5.noise(1) * 0;

        //const amplitude2 = values[j] as number;
        p5.push();
        p5.translate(width / 2, height / 2);
        p5.rotate(l + 2 * angle + amplitude * 10);
        //p5.rotate(l);
        p5.translate(0, 200);
        p5.stroke(r, g, b);
        p5.fill(r, g, b);
        p5.rotate(angle);
        p5.rectMode(p5.CENTER);
        p5.rect(0, 0,amplitude*50,amplitude*100);
        p5.pop();
      }
    }

    angle += 1;
    console.log(p5.frameCount);

    function drawRays(w: number, h: number, x: number) {
      const width = window.innerWidth;
      const height = window.innerHeight / 2;
      let x0 = (width - w) / 2;
      let y0 = (height - h) / 2;
      //p5.translate(width/2,height/2)
      for (let i = 0; i < nDiv; i++) {
        p5.fill(colors[x % 2]);
        //top
        p5.triangle(x0 + i * w / nDiv, y0, 
                    x0 + (i + 1) * w / nDiv, 
                    y0, 
                    width / 2, 
                    height / 2);
        //bottom
        p5.triangle(x0 + i * w / nDiv, 
                    h + y0, x0 + (i + 1) * w / nDiv , 
                    h + y0, 
                    width / 2 , 
                    height / 2 );

        x++;
        p5.fill(colors[x % 2]);
        //left
        p5.triangle(x0, 
                    y0 + i * h / nDiv, 
                    x0, 
                    y0 + (i + 1) * h / nDiv, 
                    width / 2, 
                    height / 2);
        //right
        p5.triangle(w + x0, 
                    y0 + i * h / nDiv, 
                    w + x0, y0 + (i + 1) * h / nDiv, 
                    width / 2, 
                    height / 2);
      }
    }
  },

);

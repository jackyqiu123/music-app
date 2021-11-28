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
        //var index = (x+y*width)*4;
        var r = p5.noise(x2,y2)*255;
        var v = p5.createVector(0);
        x2 += inc;
        p5.stroke(0);
        p5.fill(r);
        p5.rect(x*scl,y*scl,scl,scl);
      }
      p5.beginShape();
    }
    
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      //p5.fill(255);
      //p5.noFill();
      p5.fill(p5.random(225),p5.random(225),p5.random(225))
      //let x = p5.map(i, 0, values.length - 1, 0, width);
      //let y = (height + amplitude * height * p5.cos(i)) - window.innerHeight / 5;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = (height + amplitude * height * p5.cos(i)) - window.innerHeight / 5;
    //Place vertex
      p5.vertex(x,y);
      
      //p5.vertex(p5.random(x-1,x),p5.random(y-1,y))
      //p5.text((amplitude),100,100);
      //p5.point(amplitude*100,amplitude*100)
      //p5.text(p5.point(p5.mouseX, p5.mouseY),300,100);
      //p5.vertex(x,p5.random(amplitude));
      //p5.point(x,p5.random(amplitude))
      //p5.vertex(x, p5.random(y));
      //p5.vertex(p5.random(x),y);
      //p5.line(x,y, width, height);
    }
    p5.endShape()


  
    //const dim = Math.min(width, height);
    //p5.strokeWeight(dim * 0.01);
    //p5.background(153, 153, 0);
    
    // p5.stroke(225);
    // p5.noFill();
    // //p5.angleMode(p5.DEGREES)
    // let scl = 20;
    // let cols = width/scl;
    // let rows = height/scl;
    // //p5.translate(width/2,height/2)
    // //p5.rotateX(p5.PI/3);
    // const values = analyzer.getValue();
    // for (let x = 0; x <cols; x++){
    //   p5.beginShape(p5.TRIANGLE_STRIP);
    //   for (let y = 0;y<rows; y++){
    //     //p5.vertex(x*scl,y*scl);
    //     //p5.vertex(x*scl,(y+1)*scl);
    //     const amplitude = values[y] as number;
    //     let i = p5.map(y, 0, values.length - 1, 0, width);
    //     let j = (height + amplitude * height * p5.cos(y)) - window.innerHeight / 5;
    //     p5.rect(x*scl,y*scl,scl,scl);
    //     //p5.vertex(p5.random(0,i),p5.random(0,j));
    //     p5.vertex(i,j);
    //   }
    //   p5.endShape();
    
    // for (var j = 0; j <55; j++){
    //   /**
    //    * rgb random colors
    //    */
    //   var r = p5.random(0, (p5.map(p5.sin(j), -1, 1, 0, 225)));
    // //var b = p5.random(0,(p5.map(p5.cos(j),-1,1,225,0)));
    // //var g = p5.random(0,(p5.map(j,0,20,0,255)));
    // /**
    //  * rgb non random colors
    //  * 
    //  */
    // //var r = p5.map(p5.sin(j),-1,1,0,225);
    //   var g = p5.map(j, 0, 20, 0, 255);
    //   var b = p5.map(p5.cos(j), -1, 1, 225, 0);

    //   p5.stroke(r, g, b);
    //   let space_between_lines = width / 128;

    //   p5.beginShape();
    //   for (let i = 0; i < values.length; i++) {
    //     const amplitude = values[i] as number;
    //     p5.fill(r, g, b);
    //     let x = p5.map(i, 0, values.length - 1, 0, width);
    //     let y = (height + amplitude * height * p5.cos(i)) - window.innerHeight / 5;
    //     //let y = p5.map(amplitude, 0, 256, height/2, 0);
    //   // Place vertex
    //     //p5.vertex(x, y);
    //     p5.rect(width - (i * space_between_lines), height - y, space_between_lines, height - y);
    //   }
    //   p5.endShape();
    //}
   
  },
);

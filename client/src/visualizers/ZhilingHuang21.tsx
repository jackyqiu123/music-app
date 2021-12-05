// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

const draw_heart = (p5:P5,x:number,y:number,hidden:boolean) =>{
    if(hidden){
        p5.fill('orange');
    }
    else{
        p5.fill('white')
    }
    p5.noStroke();
    p5.ellipse(x*7,y,20,20);
    p5.ellipse(x*7+16,y,20,20);
    p5.triangle(x*7+24,y+6,x*7+8,y+28,x*7-8,y+6);
    
}

export const HeartVisualizer = new Visualizer(
    'HeartWave',
    (p5:P5, analyzer: Tone.Analyser) =>{
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        // p5.strokeWeight(dim * 0.01);
        p5.background('black');
        p5.translate(width/2,height/2 )
        const values = analyzer.getValue();
        for (let i = 0; i < 360 ; i++) {
          const amplitude = values[i] as number;
          const r=p5.map(amplitude,0,1,90,300);
          const x = r*p5.cos(i);
          const y = r*p5.sin(i);
          const hidden = i%2 ===0;
          draw_heart(p5,x,y,hidden)
        }

    },

);

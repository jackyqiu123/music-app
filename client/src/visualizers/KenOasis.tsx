// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

// xelophone sound sample source xylophone   - VSO2 https://freesound.org

export const DynamicVisualizer = new Visualizer(
  "KenOasis-Bars",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    p5.angleMode(p5.DEGREES);
    p5.background(0);
    p5.noFill();
    analyzer.set({
      smoothing: 0.2,
    });
    const width_bar = width / 64;
    const fft = analyzer.getValue() as Float32Array;

    function transfer(fft: Float32Array) {
      const spectrum: number[] = [];
      for (let i = 0; i < fft.length; ++i) {
        const value = fft[i] as number;
        if (value !== -Infinity) {
          spectrum.push(value + 168);
        } else {
          spectrum.push(0);
        }
      }
      return spectrum;
    }

    const spectrum = transfer(fft);
    p5.stroke(255);
    p5.beginShape();
    for (let i = 0; i <= spectrum.length; i++) {
      const amplitude = spectrum[i];
      const y = p5.map(amplitude, 0, 256, height, 0);
      p5.rect(i * width_bar, y, width_bar, height - y);
    }
    p5.stroke(255);
    p5.endShape();
  },
  true
);

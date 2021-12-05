// 3rd party
import { List, Map } from "immutable";

// project dependencies
import { PianoInstrument } from "./instruments/Piano";
import { TriangleInstrument } from "./instruments/Jackyqiu123";
import { XylophoneInstrument } from "./instruments/KenOasis";
import { UkuleleInstrument } from './instruments/ZhilingHuang21';
import { HeartVisualizer } from './visualizers/ZhilingHuang21';
import { TriangleVisualizer } from "./visualizers/Jackyqiu123";
import { WaveformVisualizer } from "./visualizers/Waveform";
import { DynamicVisualizer } from "./visualizers/KenOasis";
import { Circle } from "./visualizers/Jackyqiu123";

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;


const instruments = List([
  PianoInstrument,
  TriangleInstrument,
  XylophoneInstrument,
  UkuleleInstrument
]);
const visualizers = List([
  WaveformVisualizer,
  TriangleVisualizer,
  Circle,
  DynamicVisualizer,
  HeartVisualizer
]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});

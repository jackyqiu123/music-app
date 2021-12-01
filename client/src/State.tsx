// 3rd party
import { List, Map } from "immutable";

// project dependencies
import { PianoInstrument } from "./instruments/Piano";
import { TriangleInstrument } from "./instruments/Jackyqiu123";
import { XylophoneInstrument } from "./instruments/Xylophone";
import { TriangleVisualizer } from "./visualizers/Jackyqiu123";
import { WaveformVisualizer } from "./visualizers/Waveform";
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
]);
const visualizers = List([WaveformVisualizer, TriangleVisualizer, Circle]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});

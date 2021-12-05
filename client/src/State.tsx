// 3rd party
import { List, Map } from "immutable";

// project dependencies

import { PianoInstrument } from "./instruments/Piano";
import { TriangleInstrument } from "./instruments/Jackyqiu123";
import { XylophoneInstrument } from "./instruments/KenOasis";
import { UkuleleInstrument } from "./instruments/ZhilingHuang21";
import { Area_Turtle_Instrument } from "./instruments/Area-Turtle";
import { HeartVisualizer } from "./visualizers/ZhilingHuang21";
import { TriangleVisualizer } from "./visualizers/Jackyqiu123";
import { WaveformVisualizer } from "./visualizers/Waveform";
import { DynamicVisualizer } from "./visualizers/KenOasis";
import { Circle } from "./visualizers/Jackyqiu123";
import { Area_Turtle_Visualizer } from "./visualizers/Area-Turtle";

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
  UkuleleInstrument,
  Area_Turtle_Instrument,
]);
const visualizers = List([
  WaveformVisualizer,
  TriangleVisualizer,
  Circle,
  DynamicVisualizer,
  HeartVisualizer,
  Area_Turtle_Visualizer,
]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});

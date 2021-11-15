// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { Area_Turtle_Instrument } from './instruments/Area-Turtle_Instrument';
import { WaveformVisualizer } from './visualizers/Waveform';
import {Area_Turtle_Visualizer} from './visualizers/Area-Turtle_Visualizer';

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

const instruments = List([PianoInstrument, Area_Turtle_Instrument]);
const visualizers = List([WaveformVisualizer, Area_Turtle_Visualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});

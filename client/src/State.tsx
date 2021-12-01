// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { UkuleleInstrument } from './instruments/Ukulele';
import { WaveformVisualizer } from './visualizers/Waveform';
import {HeartVisualizer} from './visualizers/ZhilingHuang21'

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

const instruments = List([PianoInstrument,UkuleleInstrument]);
const visualizers = List([WaveformVisualizer,HeartVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});

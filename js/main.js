import 'babel-polyfill';
import 'whatwg-fetch';
import {GameSettings} from './data/game.js';
import State from './data/state.js';
import Application from './application.js';

Application.init(new State(GameSettings.MAX_GAME_TIME));

// TODO: Исправить критерий Б19
// TODO: Исправить критерий Б29
// TODO: Исправить критерий Д10

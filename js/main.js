import 'babel-polyfill';
import 'whatwg-fetch';
import {initialState} from './data/game.js';
import Application from './application.js';

Application.init(initialState);

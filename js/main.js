// @TODO: Выполнить задание "#9 И ехать и шашечки!"

import {initialState} from './data/game.js';
import showScreen from './templates/show-screen.js';
import getScreenWelcome from './templates/screens/welcome/welcome.js';

showScreen(getScreenWelcome(initialState));

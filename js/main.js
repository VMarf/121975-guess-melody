// @TODO: Реализовать правильное склонение слов (требуется только на экране с результатом игрока)
// @TODO: Превратить шаблоны с результатом в один шаблон
// @TODO: Выполнить задание "#9 И ехать и шашечки!" (индикатор оставшегося времени)

import {initialState} from './data/game.js';
import showScreen from './templates/show-screen.js';
import getScreenWelcome from './templates/screens/welcome/welcome.js';

showScreen(getScreenWelcome(initialState));

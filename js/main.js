// @TODO: Таймер на игровых экранах должен работать
// @TODO: Реализовать мигание у таймера (ТЗ 3.7)

// @TODO: Написать тесты для модуля decline-word

import {initialState} from './data/game.js';
import showScreen from './templates/show-screen.js';
import getScreenWelcome from './templates/screens/welcome/welcome.js';

showScreen(getScreenWelcome(initialState));

// @TODO: Таймер на игровых экранах должен работать
// @TODO: Реализовать мигание у таймера (ТЗ 3.7)
// @TODO: Проверить, чтобы на экране с результатом выводилась вся информация (время и быстрые ответы)

// @TODO: Реализовать правильную форму склонения числительных (ТЗ 4.6)

import {initialState} from './data/game.js';
import showScreen from './templates/show-screen.js';
import getScreenWelcome from './templates/screens/welcome/welcome.js';

showScreen(getScreenWelcome(initialState));

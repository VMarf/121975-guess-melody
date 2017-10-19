// @TODO: Таймер на игровых экранах должен работать
// @TODO: Реализовать мигание у таймера (ТЗ 3.7)
// @TODO: Реализовать работу проигрывателя треков для двух типов игровых экранов
// @TODO: Проверить, чтобы на экране с результатом выводилась вся информация (количество быстрых ответов)

// @TODO: Возможно стоит доработать модуль get-player-result, так как логика модуля не полностью соотвествует техническому заданию (ТЗ 4.4)
// @TODO: Реализовать правильную форму склонения числительных (ТЗ 4.6)

import {initialState} from './data/game.js';
import showScreen from './templates/show-screen.js';
import getScreenWelcome from './templates/screens/welcome/welcome.js';

showScreen(getScreenWelcome(initialState));

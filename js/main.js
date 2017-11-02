import 'babel-polyfill';
import 'whatwg-fetch';
import {initialState} from './data/game.js';
import Application from './application.js';

Application.showWelcome(initialState);

// TODO: Внести правки из файла
// TODO: Проверить приватные методы и поля (должны начинаться с _)
// TODO: Доделать предварительную загрузку файлов
// TODO: Сделать последнее дополнительное задание

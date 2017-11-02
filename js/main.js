import 'babel-polyfill';
import 'whatwg-fetch';
import {initialState} from './data/game.js';
import Application from './application.js';

Application.showWelcome(initialState);

// TODO: Доделать предварительную загрузку файлов
// TODO: Внести правки
// TODO: Сделать дополнительное задание

import 'babel-polyfill';
import 'whatwg-fetch';
import {initialState} from './data/game.js';
import Application from './application.js';

Application.init(initialState);

// TODO: Статистику игроков надо брать с сервера
// TODO: Доделать предзагрузку файлов
// TODO: Сделать последнее доп. задание

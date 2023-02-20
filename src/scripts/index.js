import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';

const app = new App({
    button: document.querySelectorAll('a.open_close'),
    drawer: document.querySelector('.main-menu'),
    layer: document.querySelector('.layer'),
    header: document.querySelector('header'),
    scroll: document.querySelector('.to-top'),
});

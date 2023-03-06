import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/detail.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelectorAll('a.open_close'),
  drawer: document.querySelector('.main-menu'),
  layer: document.querySelector('.layer'),
  content: document.querySelector('#mainContent'),
  header: document.querySelector('header'),
  scroll: document.querySelector('.to-top'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

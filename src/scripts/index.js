import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/detail.scss';
import '../styles/responsive.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './views/templates/components/layouts/app-header';
import './views/templates/components/layouts/app-footer';
import './views/templates/components/layouts/loader';
import './views/templates/components/layouts/skip-content';
import App from './views/app';
import swRegister from './utils/sw-register';

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

window.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
  await swRegister();

  const loader = document.querySelector('loader-component');

  loader.classList.add('preloader-hidden');

  loader.addEventListener('transitionend', () => {
    document.body.removeChild(loader);
  });
});

import DrawerInitiator from '../utils/drawer-initiator';
import NavigatorInitiator from '../utils/navigator-initiator';
import ScrollInitiator from '../utils/scroll-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Error404 from './pages/not-found';

class App {
  constructor({
    button, drawer, layer, content, header, scroll,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._layer = layer;
    this._content = content;
    this._header = header;
    this._scroll = scroll;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      layer: this._layer,
    });

    NavigatorInitiator.init({
      header: this._header,
    });

    ScrollInitiator.init({
      scroll: this._scroll,
    });
  }

  async renderPage() {
    await this._checkRoute();
    await this._setHeaderClass();
  }

  async _setHeaderClass() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (url === '/favorite' || url === '/detail/:id' || !page) {
      this._header.classList.remove('header');
      this._header.classList.add('header_in');
    } else {
      this._header.classList.remove('header_in');
      this._header.classList.add('header');
    }
  }

  async _checkRoute() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (!page) {
      this._content.innerHTML = await Error404.render();
    } else {
      this._content.innerHTML = await page.render();
      await page.afterRender();

      const skipLink = document.querySelector('.skip-link');
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        this._content.focus();
      });
    }

    await this._closeDrawer();
  }

  async _closeDrawer() {
    this._drawer.classList.remove('show');
    this._layer.classList.remove('layer-is-visible');
  }
}

export default App;

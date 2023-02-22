import DrawerInitiator from '../utils/drawer-initiator';
import NavigatorInitiator from '../utils/navigator-initiator';
import ScrollInitiator from '../utils/scroll-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, layer, content, header, scroll }) {
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
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;

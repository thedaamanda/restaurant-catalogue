const DrawerInitiator = {
    init({ button, drawer, layer }) {
        button.forEach((menu) => {
            menu.addEventListener('click', (event) => {
                this._toggleDrawer(event, drawer, layer);
            });
        });
    },

    _toggleDrawer(event, drawer, layer) {
        event.stopPropagation();
        drawer.classList.toggle('show');
        layer.classList.toggle('layer-is-visible');
    },
};

export default DrawerInitiator;

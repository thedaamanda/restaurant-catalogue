const NavigatorInitiator = {
  init({ header }) {
    window.addEventListener('scroll', () => {
      this._stickyHeader(header);
    });
  },

  _stickyHeader(header) {
    // check if header has class sticky
    if (header.classList.contains('header')) {
      if (window.scrollY > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  },
};

export default NavigatorInitiator;

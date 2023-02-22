const NavigatorInitiator = {
  init({ header }) {
    window.addEventListener('scroll', () => {
      this._stickyHeader(header);
    });
  },

  _stickyHeader(header) {
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  },
};

export default NavigatorInitiator;

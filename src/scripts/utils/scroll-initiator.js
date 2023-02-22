const ScrollInitiator = {
  init({ scroll }) {
    window.addEventListener('scroll', () => {
      this._scrollToTop(scroll);
    });

    scroll.addEventListener('click', () => {
      this._smoothScroll();
    });
  },

  _scrollToTop(scroll) {
    if (window.scrollY >= 600) {
      scroll.classList.add('visible');
    } else {
      scroll.classList.remove('visible');
    }
  },

  _smoothScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  },
};

export default ScrollInitiator;

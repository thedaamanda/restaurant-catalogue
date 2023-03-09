class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<a href="javascript:void(0);" class="skip-link">Skip to content</a>';
  }
}

customElements.define('skip-content', SkipContent);

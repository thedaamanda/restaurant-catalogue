class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <p>Copyright © 2023 - Skuy App By <strong>Muhammad Theda Amanda</strong>. All rights reserved.</p>
        `;
  }
}

customElements.define('app-footer', AppFooter);

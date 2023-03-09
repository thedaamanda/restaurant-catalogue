class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="wrapper">
                <div class="layer"></div>
                <!-- Mobile App Bar -->
                <div class="menu-mobile">
                    <a href="javascript:void(0);" class="open_close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </a>
                    <a class="logo-mobile" href="#">
                        <img src="./images/logo.svg" width="162" height="50" alt="Logo Website" class="logo_normal">
                        <img src="./images/logo_sticky.svg" width="162" height="50" alt="Logo Website" class="logo_sticky">
                    </a>
                    <div>&nbsp;</div>
                </div>
                <!-- Desktop App Bar -->
                <nav class="main-menu">
                    <div class="header_menu">
                        <a href="javascript:void(0);" class="open_close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                            </svg>
                        </a>
                        <a href="#"><img src="./images/logo.svg" width="162" height="35" alt="Logo Website"></a>
                    </div>
                    <a class="logo" href="#">
                        <img src="./images/logo.svg" width="162" height="50" alt="Logo Website" class="logo_normal">
                        <img src="./images/logo_sticky.svg" width="162" height="50" alt="Logo Website" class="logo_sticky">
                    </a>
                    <ul class="nav-list">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#/favorite">Favorite</a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-theda-amanda-3ba6ab259/" target="_blank" rel="noreferrer">About Us</a></li>
                    </ul>
                </nav>
            </div>
        `;
  }
}

customElements.define('app-header', AppHeader);

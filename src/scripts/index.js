import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import restaurants from '../DATA.json';

const main = () => {
    // Main Content
    const restaurantList = document.querySelector('#restaurant-list');
    restaurants.restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += `
            <div class="item-list">
                <div class="strip">
                    <figure>
                        <img src="${restaurant.pictureId}" data-src="${restaurant.pictureId}" class="img-fluid lazy" alt="${restaurant.name}">
                        <a href="#" class="strip_info">
                            <small>Resto</small>
                            <div class="item_title">
                                <h3>${restaurant.name}</h3>
                            </div>
                        </a>
                    </figure>
                    <ul>
                        <li>
                            <span class="city">${restaurant.city}</span>
                        </li>
                        <li>
                            <span class="rating">${restaurant.rating}</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Menu
    const menuOpen = document.querySelectorAll('a.open_close');
    menuOpen.forEach((menu) => {
        menu.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.main-menu').classList.toggle('show');
            document.querySelector('.layer').classList.toggle('layer-is-visible');
        });
    });

    // Scroll to Top
    const toTop = document.querySelector('.to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 600) {
            toTop.classList.add('visible');
        } else {
            toTop.classList.remove('visible');
        }
    });

    toTop.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
};

main();

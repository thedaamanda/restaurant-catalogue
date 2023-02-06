import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import restaurants from '../DATA.json';

const main = () => {
  // Main Content
  const restaurantList = document.querySelector('#restaurant-list');
  restaurants.restaurants.forEach((restaurant) => {
    restaurantList.innerHTML += `
            <div class="item-list">
                <div class="strip">
                    <figure>
                        <img src="${restaurant.pictureId}" class="img-fluid lazy" alt="${restaurant.name}">
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

  // Top Rated Content
  const topRatedList = document.querySelector('#restaurant-top-rated-list');
  const topRated = restaurants.restaurants.sort((a, b) => b.rating - a.rating).slice(0, 6);
  let i = 0;

  topRated.forEach((restaurant) => {
    if (topRated.indexOf(restaurant) === 0 || topRated.indexOf(restaurant) === 3) {
      i = topRated.indexOf(restaurant) === 0 ? 1 : 2;

      topRatedList.innerHTML += `
                <div class="col-6">
                    <div class="list_top_rated">
                        <ul class="list_loop_${i}">
                        `;
    }

    document.querySelector(`.list_top_rated ul.list_loop_${i}`).innerHTML += `
            <li>
                <a href="#">
                    <figure>
                        <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="lazy" width="350" height="233">
                    </figure>
                    <span class="rating">${restaurant.rating}</span>
                    <em>${restaurant.city}</em>
                    <h3>${restaurant.name}</h3>
                    <small>${restaurant.description}</small>
                </a>
            </li>
        `;

    if (topRated.indexOf(restaurant) === 2 || topRated.indexOf(restaurant) === 5) {
      topRatedList.innerHTML += `
                        </ul>
                    </div>
                </div>
            `;
    }
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

  // Search Bar after click #btn-search
  const search = document.querySelector('#search');
  const btnSearch = document.querySelector('#btn-search');
  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = search.value.toLowerCase();
    const items = document.querySelectorAll('.item-list');
    items.forEach((item) => {
      const name = item.querySelector('.item_title h3').textContent.toLowerCase();
      if (name.indexOf(searchValue) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
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

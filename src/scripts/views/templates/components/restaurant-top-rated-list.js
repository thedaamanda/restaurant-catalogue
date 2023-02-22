import CONFIG from '../../../globals/config';

class RestaurantTopRatedList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    let i = 0;

    this._restaurants.forEach((restaurant) => {
        if (this._restaurants.indexOf(restaurant) === 0 || this._restaurants.indexOf(restaurant) === 3) {
            i = this._restaurants.indexOf(restaurant) === 0 ? 1 : 2;

            this.innerHTML += `
                      <div class="col-6">
                          <div class="list_top_rated">
                              <ul class="list_loop_${i}">
                              `;
          }

          document.querySelector(`.list_top_rated ul.list_loop_${i}`).innerHTML += `
                  <li>
                      <a href="/#/detail/${restaurant.id}">
                          <figure>
                              <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="lazy" width="350" height="233">
                          </figure>
                          <span class="rating">${restaurant.rating}</span>
                          <em>${restaurant.city}</em>
                          <h3>${restaurant.name}</h3>
                          <small>${restaurant.description}</small>
                      </a>
                  </li>
              `;

          if (this._restaurants.indexOf(restaurant) === 2 || this._restaurants.indexOf(restaurant) === 5) {
            this.innerHTML += `
                              </ul>
                          </div>
                      </div>
                  `;
          }
    });
  }
}

customElements.define('restaurant-top-rated-list', RestaurantTopRatedList);

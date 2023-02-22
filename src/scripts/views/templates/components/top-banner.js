import RestaurantApiSource from '../../../data/restaurant-api-source';

class TopBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div id="jumbotron" class="hero image">
                <div class="opacity-mask">
                    <div class="container">
                        <div class="row-center">
                            <div class="hero-title">
                                <h1>Skuy App</h1>
                                <p>Discover your next culinary adventure with the restaurant app finder.</p>
                                <div class="row-search no-gutters custom-search-input">
                                    <div class="col-input">
                                        <div class="forms">
                                            <input class="form-input no_border_r" type="text" name="query" id="search" placeholder="Search restaurant by name, category and menu" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-search">
                                        <button class="btn gradient" id="btn-search" type="submit">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  searchRestaurant() {
    const searchElement = document.querySelector('input[name=query]');
    const searchButtonElement = document.querySelector('#btn-search');

    searchButtonElement.addEventListener('click', async () => {
      const query = searchElement.value;
      const restaurants = await RestaurantApiSource.searchRestaurant(query);
      const restaurantListElement = document.querySelector('restaurant-list');
      restaurantListElement.classList.add('list');
      restaurantListElement.id = 'restaurant-list';
      restaurantListElement.restaurants = restaurants.restaurants;
    });
  }
}

customElements.define('top-banner', TopBanner);

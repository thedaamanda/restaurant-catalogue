import '../templates/components/favorite-restaurant-list';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
        <div class="page_header element_to_stick">
            <div class="container">
                <div class="row">
                    <div class="col-8 search-filter align_self_center">
                        <h1>Restaurant Favorite List</h1>
                    </div>
                    <div class="col-4 search-filter">
                        <div class="search_bar_list">
                            <input type="text" class="form-control" placeholder="Search Favorite Restaurant">
                            <button type="submit"><i class="icon_search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container margin_30_60">
            <favorite-restaurant-list></favorite-restaurant-list>
        </div>
    `;
  },

  async afterRender() {
    const favoriteResturants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteRestaurantListElement = document.querySelector('favorite-restaurant-list');
    favoriteRestaurantListElement.classList.add('list');
    favoriteRestaurantListElement.id = 'favorite-restaurant-list';
    favoriteRestaurantListElement.restaurants = favoriteResturants;
  },
};

export default Favorite;

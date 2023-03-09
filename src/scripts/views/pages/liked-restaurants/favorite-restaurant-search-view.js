import { createRestaurantItemTemplate, createEmptyRestaurantTemplate, createSkeletonRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
            <div class="page_header">
                <div class="container">
                    <div class="row">
                        <div class="col-8 search-filter align_self_center">
                            <h1>Restaurant Favorite List</h1>
                        </div>
                        <div class="col-4 search-filter">
                            <div class="search_bar_list">
                                <input type="text" name="query_favorite" class="form-control" placeholder="Search Favorite Restaurant">
                                <button type="submit" id="btn-search-favorite"><i class="icon_search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container margin_30_60" id="favorite-container">
                <favorite-restaurant-list class="list" id="favorite-restaurant-list">
                    ${createSkeletonRestaurantItemTemplate(20)}
                </favorite-restaurant-list>
            </div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('#btn-search-favorite').addEventListener('click', callback);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('#favorite-restaurant-list').innerHTML = html;

    document.querySelector('#favorite-restaurant-list').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return createEmptyRestaurantTemplate();
  }
}

export default FavoriteRestaurantSearchView;

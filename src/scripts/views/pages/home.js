import RestaurantApiSource from '../../data/restaurant-api-source';
import { createSkeletonRestaurantItemTemplate, createSkeletonRestaurantTopRatedItemTemplate } from '../templates/template-creator';
import '../templates/components/top-banner';
import '../templates/components/restaurant-list';
import '../templates/components/restaurant-top-rated-list';

const Home = {
  async render() {
    return `
            <top-banner></top-banner>
            <section id="content" class="restaurant-latest">
                <div class="container margin_30_60">
                    <div class="main_title center">
                        <span><em></em></span>
                        <h2 tabindex="0">Explore Restaurants</h2>
                        <p tabindex="0">Find the best restaurant in your country</p>
                    </div>
                    <restaurant-list class="list" id="restaurant-list">
                        ${createSkeletonRestaurantItemTemplate(9)}
                    </restaurant-list>
                </div>
                <div class="bg_gray">
                    <div class="container margin_60_40">
                        <div class="main_title">
                            <span><em></em></span>
                            <h2 tabindex="0">Top Rated Restaurants</h2>
                            <p tabindex="0">Discover Delicious - Find Your Top-Rated Restaurant Today!</p>
                        </div>
                        <restaurant-top-rated-list class="row-rated add_bottom_24" id="restaurant-top-rated-list">
                            ${createSkeletonRestaurantTopRatedItemTemplate()}
                        </restaurant-top-rated-list>
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurant();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurants;

    const topRatedRestaurants = restaurants.sort((a, b) => b.rating - a.rating).slice(0, 6);
    const restaurantTopRatedListElement = document.querySelector('restaurant-top-rated-list');
    restaurantTopRatedListElement.restaurants = topRatedRestaurants;

    const topBannerElement = document.querySelector('top-banner');
    topBannerElement.searchRestaurant();
  },
};

export default Home;

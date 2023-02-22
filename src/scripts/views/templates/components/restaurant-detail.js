import { createRestaurantDetailTemplate } from '../template-creator';

class RestaurantDetail extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = createRestaurantDetailTemplate(this._restaurant);
    }
}

customElements.define('restaurant-detail', RestaurantDetail);

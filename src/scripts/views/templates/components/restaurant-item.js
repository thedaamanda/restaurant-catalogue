import { createRestaurantItemTemplate } from '../template-creator';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = createRestaurantItemTemplate(this._restaurant);
  }
}

customElements.define('restaurant-item', RestaurantItem);

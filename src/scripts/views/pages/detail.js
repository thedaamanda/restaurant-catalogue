import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import { createNotificationTemplate } from '../templates/template-creator';
import '../templates/components/restaurant-detail';
import '../templates/components/review-item';

const Detail = {
  async render() {
    return `
            <restaurant-detail></restaurant-detail>
            <div class="favorite-button"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.restaurant = restaurant.restaurant;

    const reviews = restaurant.restaurant.customerReviews;
    const reviewContainer = document.querySelector('#reviews');
    reviews.forEach((review) => {
      const reviewElement = document.createElement('review-item');
      reviewElement.reviews = review;
      reviewContainer.appendChild(reviewElement);
    });

    const reviewForm = document.querySelector('#review-form');
    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitReview({
        id: url.id,
        name: reviewForm.querySelector('#input-name').value,
        review: reviewForm.querySelector('#input-review').value,
      });
    });
  },

  async _submitReview(review) {
    await RestaurantApiSource.addReview(review);
    const notification = document.querySelector('.notification');

    notification.innerHTML = createNotificationTemplate();
    notification.classList.add('show');
    notification.style.backgroundColor = '#8EC343';
    this._resetForm();
    this._refreshCustomerReviews();
  },

  async _refreshCustomerReviews() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const reviews = restaurant.restaurant.customerReviews;
    console.log(reviews);
    const reviewContainer = document.querySelector('#reviews');
    reviewContainer.innerHTML = '';
    reviews.forEach((review) => {
      const reviewElement = document.createElement('review-item');
      reviewElement.reviews = review;
      reviewContainer.appendChild(reviewElement);
    });
  },

  async _resetForm() {
    const reviewForm = document.querySelector('#review-form');
    reviewForm.querySelector('#input-name').value = '';
    reviewForm.querySelector('#input-review').value = '';
  },
};

export default Detail;

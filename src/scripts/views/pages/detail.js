import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import { createNotificationTemplate, createNotFoundTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../templates/components/restaurant-detail';
import '../templates/components/review-item';

const Detail = {
  async render() {
    return `
        <div class="detail-page"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const detailPage = document.querySelector('.detail-page');

    if (restaurant.error) {
      detailPage.innerHTML = createNotFoundTemplate();
    } else {
      detailPage.innerHTML = `
            <restaurant-detail></restaurant-detail>
            <div id="likeButtonContainer"></div>
        `;

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
          date: new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        });
      });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          pictureId: restaurant.restaurant.pictureId,
          city: restaurant.restaurant.city,
          rating: restaurant.restaurant.rating,
        },
      });
    }
  },

  async _submitReview(review) {
    await RestaurantApiSource.addReview({
      id: review.id,
      name: review.name,
      review: review.review,
    });

    const notification = document.querySelector('.notification');

    notification.innerHTML = createNotificationTemplate();
    notification.classList.add('show');
    notification.style.backgroundColor = '#8EC343';
    this._resetForm();
    this._addReviewToCustomerReviews(review);
  },

  async _addReviewToCustomerReviews(review) {
    const reviewContainer = document.querySelector('#reviews');
    const reviewElement = document.createElement('review-item');
    reviewElement.reviews = review;
    reviewContainer.appendChild(reviewElement);
  },

  async _resetForm() {
    const reviewForm = document.querySelector('#review-form');
    reviewForm.querySelector('#input-name').value = '';
    reviewForm.querySelector('#input-review').value = '';
  },
};

export default Detail;

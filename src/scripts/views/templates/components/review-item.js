import { createCustomerReviewTemplate } from '../template-creator';

class ReviewItem extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = createCustomerReviewTemplate(this._reviews);
  }
}

customElements.define('review-item', ReviewItem);

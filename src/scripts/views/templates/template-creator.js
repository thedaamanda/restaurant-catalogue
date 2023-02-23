import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurantItem) => {
  const {
    id, pictureId, name, city, rating,
  } = restaurantItem;

  return `
        <div class="item-list">
            <div class="strip">
                <figure>
                    <img src="${
  CONFIG.BASE_IMAGE_URL + pictureId
}" class="img-fluid lazy" alt="${name}">
                    <a href="/#/detail/${id}" class="strip_info">
                        <small>Resto</small>
                        <div class="item_title">
                            <h3>${name}</h3>
                        </div>
                    </a>
                </figure>
                <ul>
                    <li>
                        <span class="city">${city}</span>
                    </li>
                    <li>
                        <span class="rating">${rating}</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
};

const createRestaurantDetailTemplate = (restaurantDetail) => {
  const {
    pictureId,
    name,
    city,
    rating,
    address,
    description,
    categories,
    menus,
  } = restaurantDetail;

  return `
        <div class="hero_in detail_page background-image" style="background:#ededed url(${
  CONFIG.BASE_IMAGE_URL + pictureId
}) no-repeat center center; background-size:cover;">
            <div class="opacity-mask">
                <div class="container margin_30_60">
                    <div class="main_info">
                        <div class="row">
                            <div class="column">
                                <div class="head"><div class="rating-detail"><strong>${rating}</strong></div></div>
                                <h1>${name}</h1>
                                ${city} - ${address}
                                <ul class="tags">
                                    ${categories
    .map(
      (category) => `<li><div>${category.name}</div></li>`,
    )
    .join('')}
                                </ul>
                                <p>${description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg_gray">
            <div class="container margin_detail">
                <div class="row">
                    <div class="col-lg-8 list_menu">
                        <section id="section-1">
                            <h4>Food Menu</h4>
                            <div class="row">
                                ${menus.foods
    .map(
      (food) => `
                                    <div class="col-6">
                                        <a class="menu_item modal_dialog" href="#">
                                            <figure><img src="./images/image-unknown.jpg" alt="thumb" class="lazy"></figure>
                                            <h3>${food.name}</h3>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                            <strong>Rp. -</strong>
                                        </a>
                                    </div>
                                `,
    )
    .join('')}
                            </div>
                        </section>
                        <section id="section-2">
                            <h4>Drink Menu</h4>
                            <div class="row">
                                ${menus.drinks
    .map(
      (drink) => `
                                    <div class="col-6">
                                        <a class="menu_item modal_dialog" href="#">
                                            <figure><img src="./images/image-unknown.jpg" alt="thumb" class="lazy"></figure>
                                            <h3>${drink.name}</h3>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                            <strong>Rp. -</strong>
                                        </a>
                                    </div>
                                `,
    )
    .join('')}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="container margin_30_50">
            <div class="row">
                <div class="col-12 list_menu">
                    <section id="section-3">
                        <h4>Reviews</h4>
                        <div id="reviews"></div>
                    </section>
                    <section id="section-4">
                        <h4>Write a review</h4>
                        <div class="notification"></div>
                        <form id="review-form">
                            <div class="form-group">
                                <label>Your Name</label>
                                <input class="form-control" type="text" id="input-name" placeholder="Write your name" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label>Your Review</label>
                                <textarea class="form-control" style="height: 180px;" id="input-review" placeholder="Write your review to help others learn about this restaurant"></textarea>
                            </div>
                            <button type="submit" class="btn_1" id="submit-review">Submit review</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    `;
};

const createCustomerReviewTemplate = (customerReview) => {
  const { name, review, date } = customerReview;

  return `
        <div class="review_card">
            <div class="row">
                <div class="col-2 user_info">
                    <figure><img src="./images/avatar.jpg" alt="User Avatar"></figure>
                    <h5>${name}</h5>
                </div>
                <div class="col-10 review_content">
                    <h4>${date}</h4>
                    <p>${review}</p>
                </div>
            </div>
        </div>
    `;
};

const createLikeButtonTemplate = () => `
    <div class="favorite-button" id="likeButton"></div>
`;

const createLikedButtonTemplate = () => `
    <div class="favorite-button like" id="likeButton"></div>
`;

const createNotificationTemplate = () => `
        <h3>Thank you for taking the time to leave a review!</h3>
        <p>We really appreciate your feedback and we're glad that you enjoyed your experience with our restaurant. Your input helps us to continue improving and providing the best possible experience for our customers. Thanks again, and we hope to see you again soon!</p>
    `;

const createNotFoundTemplate = () => `
    <div class="bg-gray">
        <div id="error_page">
            <div class="container">
                <div class="row-center">
                    <figure><img src="./images/404.svg" alt="" class="img-fluid" width="550" height="234"></figure>
                    <p>We're sorry, but the page you were looking for doesn't exist.</p>
                </div>
            </div>
        </div>
    </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNotificationTemplate,
  createNotFoundTemplate,
};

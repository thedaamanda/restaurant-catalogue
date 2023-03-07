const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

// Scenario('showing empty favorite restaurants', async ({ I }) => {
//     I.seeElement('h1');
//     I.seeElement('#favorite-container');

//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');
// });

// Scenario('liking one restaurant', async ({ I }) => {
//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     I.amOnPage('/');

//     I.seeElement('#restaurant-list a');

//     const firstRestaurant = locate('#restaurant-list a').first();
//     const firstRestaurantTitle = await I.grabTextFrom(locate('.item_title h3').first());
//     I.click(firstRestaurant);

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/favorite');
//     I.seeElement('.item-list');

//     const likedRestaurantTitle = await I.grabTextFrom('.item_title h3');

//     assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
// });

// Scenario('liking one top rated restaurant', async ({ I }) => {
//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     I.amOnPage('/');

//     I.seeElement('.list_top_rated a');

//     const firstRestaurant = locate('.list_top_rated a').first();
//     const firstRestaurantTitle = await I.grabTextFrom(locate('.list_top_rated h3').first());
//     I.click(firstRestaurant);

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/favorite');
//     I.seeElement('.item-list');

//     const likedRestaurantTitle = await I.grabTextFrom('.item_title h3');

//     assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
// });

// Scenario('unliking one restaurant', async ({ I }) => {
//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     I.amOnPage('/');

//     I.seeElement('#restaurant-list a');

//     const firstRestaurant = locate('#restaurant-list a').first();
//     const firstRestaurantTitle = await I.grabTextFrom(locate('.item_title h3').first());
//     I.click(firstRestaurant);

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/favorite');
//     I.seeElement('.item-list');

//     const firstLikedRestaurantLink = locate('#favorite-restaurant-list a').first();
//     const firstLikedRestaurantTitle = await I.grabTextFrom('.item_title h3');

//     I.click(firstLikedRestaurantLink);

//     I.waitForElement('.favorite-button', 100);
//     I.seeElement('.favorite-button');

//     const unlikeButton = locate('#likeButton');

//     I.click(unlikeButton);

//     I.amOnPage('/#/favorite');

//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     const favoriteResturantIsEmpty = await I.grabTextFrom('#error_page p');

//     assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle);
//     assert.strictEqual('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', favoriteResturantIsEmpty);

// });

// Scenario('search one restaurant then like the restaurant', async ({ I }) => {
//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     I.amOnPage('/');

//     I.seeElement('input[name=query]');

//     const query = 'Melting Pot';

//     I.fillField('input[name=query]', query);
//     I.click('#btn-search');

//     I.seeElement('#restaurant-list a');

//     const firstRestaurantLink = locate('#restaurant-list a').first();
//     const firstRestaurantTitle = await I.grabTextFrom(locate('.item_title h3').first());

//     I.click(firstRestaurantLink);

//     I.waitForElement('.favorite-button', 100);
//     I.seeElement('.favorite-button');

//     const likeButton = locate('#likeButton');

//     I.click(likeButton);

//     I.amOnPage('/#/favorite');
//     I.seeElement('.item-list');;

//     const likedRestaurantTitle = await I.grabTextFrom('.item_title h3');

//     assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
// });

// Scenario('search for a restaurant then like the restaurant, after successfully liking, click cancel like', async ({ I }) => {
//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     I.amOnPage('/');

//     I.seeElement('input[name=query]');

//     const query = 'Melting Pot';

//     I.fillField('input[name=query]', query);
//     I.click('#btn-search');

//     I.seeElement('#restaurant-list a');

//     const firstRestaurantLink = locate('#restaurant-list a').first();
//     const firstRestaurantTitle = await I.grabTextFrom(locate('.item_title h3').first());

//     I.click(firstRestaurantLink);

//     I.waitForElement('.favorite-button', 100);
//     I.seeElement('.favorite-button');

//     const likeButton = locate('#likeButton');

//     I.click(likeButton);

//     I.amOnPage('/#/favorite');
//     I.seeElement('.item-list');;

//     const firstLikedRestaurantLink = locate('#favorite-restaurant-list a').first();
//     const firstLikedRestaurantTitle = await I.grabTextFrom('.item_title h3');

//     I.click(firstLikedRestaurantLink);

//     I.waitForElement('.favorite-button', 100);
//     I.seeElement('.favorite-button');

//     const unlikeButton = locate('#likeButton');

//     I.click(unlikeButton);

//     I.amOnPage('/#/favorite');

//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     const favoriteResturantIsEmpty = await I.grabTextFrom('#error_page p');

//     assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle)
//     assert.strictEqual('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', favoriteResturantIsEmpty);
// });

// Scenario('searching restaurants', async ({ I }) => {
//     I.seeElement('#favorite-container');
//     I.see('You don\'t have any favorite restaurants yet. Find your new favorite restaurant and like it as a favorite to easily access it later!', 'p');

//     I.amOnPage('/');

//     I.seeElement('#restaurant-list a');

//     const titles = [];

//     for (let i = 2; i <= 4; i++) {
//         I.click(locate('#restaurant-list a').at(i));
//         I.seeElement('.favorite-button');
//         I.click('#likeButton');
//         titles.push(await I.grabTextFrom('.main_info h1'));
//         I.amOnPage('/');
//     }

//     I.amOnPage('/#/favorite');
//     I.seeElement('input[name=query_favorite]');

//     const searchQuery = titles[0].substring(0, 2);

//     const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

//     I.fillField('input[name=query_favorite]', searchQuery);
//     I.click('#btn-search-favorite');

//     const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('#favorite-restaurant-list a');

//     assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

//     matchingRestaurants.forEach(async (title, index) => {
//         const visibleTitle = await I.grabTextFrom(locate('.item_title h3').at(index + 1));
//         assert.strictEqual(title, visibleTitle);
//     });
// });

const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing a review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#restaurant-list a');
  I.wait(0.3);
  I.click(locate('#restaurant-list a').first());
  I.retry(3).seeElement('#reviews');
});

Scenario('add a review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#restaurant-list a');
  I.wait(0.3);
  I.click(locate('#restaurant-list a').first());

  I.retry(3).seeElement('form#review-form');

  const name = 'Theda';
  const review = 'This restaurant so delicious';

  I.fillField('input[name="name"]', name);
  I.fillField('textarea[name="review"]', review);

  I.see('Submit review', 'button#submit-review');
  I.click('button#submit-review');

  I.see('Thank you for taking the time to leave a review!', 'h3');

  assert.strictEqual(name, await I.grabTextFrom(locate('.review_card h5').last()));
});

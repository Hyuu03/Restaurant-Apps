/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-unused-vars
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#tes');
  I.see('Tidak Ada Restorant yang di Favoritkan', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Restorant yang di Favoritkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-info');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.seeElement('.restaurant-name');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Restorant yang di Favoritkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-info');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.seeElement('.restaurant-name');

  const firstRestaurantLiked = locate('.restaurant-name').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak Ada Restorant yang di Favoritkan', '.resto-item__not__found');
});

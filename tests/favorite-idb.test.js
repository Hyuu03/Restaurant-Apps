/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteIdb from '../src/scripts/data/favorite-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteIdb.getAllFavorite()).forEach(async (restaurant) => {
      await FavoriteIdb.deleteFavorite(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteIdb);
});

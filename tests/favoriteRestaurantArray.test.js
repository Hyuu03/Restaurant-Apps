/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteMovieArray = {
  getFavorite(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteRestaurant.find((restaurant) => restaurant.id == id);
  },

  getAllFavorite() {
    return favoriteRestaurant;
  },

  putFavorite(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getFavorite(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteFavorite(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    // eslint-disable-next-line eqeqeq
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },

  searchRestaurant(query) {
    return this.getAllFavorite()
      .filter((restaurant) => {
        const loweredCaseRestaurantTitle = (restaurant.title || '-').toLowerCase();
        const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

        return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
      });
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteMovieArray);
});

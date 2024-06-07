/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putFavorite({ id: 1 });
    favoriteRestaurant.putFavorite({ id: 2 });

    expect(await favoriteRestaurant.getFavorite(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getFavorite(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getFavorite(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putFavorite({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllFavorite()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putFavorite({ id: 1 });
    favoriteRestaurant.putFavorite({ id: 2 });

    expect(await favoriteRestaurant.getAllFavorite()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putFavorite({ id: 1 });
    favoriteRestaurant.putFavorite({ id: 2 });
    favoriteRestaurant.putFavorite({ id: 3 });

    await favoriteRestaurant.deleteFavorite(1);

    expect(await favoriteRestaurant.getAllFavorite()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putFavorite({ id: 1 });
    favoriteRestaurant.putFavorite({ id: 2 });
    favoriteRestaurant.putFavorite({ id: 3 });

    await favoriteRestaurant.deleteFavorite(4);

    expect(await favoriteRestaurant.getAllFavorite()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };

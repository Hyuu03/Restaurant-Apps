import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteIdb from '../../src/scripts/data/favorite-idb';

const createLikeButtonPresenterWithRestaurant = async (data) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteIdb,
    data,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };

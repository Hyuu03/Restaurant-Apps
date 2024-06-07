import UrlParser from '../../routes/url-parser';
import sourceData from '../../data/source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteIdb from '../../data/favorite-idb';

const Detail = {
  async render() {
    return `
      <section class="restaurant-list">
        <div class="container">
          <h2>Detail Restoran</h1>
          <div class="detail-container" id="detail"></div>
          <div id="likeButtonContainer"></div>
        </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await sourceData.detailResto(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurant: FavoriteIdb,
      data: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        pictureId: data.restaurant.pictureId,
        rating: data.restaurant.rating,
        city: data.restaurant.city,
      },
    });
  },
};

export default Detail;

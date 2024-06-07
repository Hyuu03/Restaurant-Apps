import FavoriteIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="restaurant-list">
        <div class="container">
          <h2>Favorite Restaurant</h2>
          <div class="restaurant-container" id="tes"></div>
          <div class="resto-item__not__found"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await FavoriteIdb.getAllFavorite();
    const restoContainer = document.querySelector('#tes');

    if (resto.length === 0) {
      document.querySelector('.resto-item__not__found').innerHTML = 'Tidak Ada Restorant yang di Favoritkan';
    } else {
      resto.forEach((data) => {
        restoContainer.innerHTML += createRestaurantItemTemplate(data);
      });
    }
  },
};

export default Favorite;

import source from '../../data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="restaurant-list">
        <div class="container">
          <h2>Daftar Restoran</h2>
          <div class="restaurant-container" id="tes"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await source.listResto();
    const restoContainer = document.querySelector('#tes');
    resto.forEach((data) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Home;

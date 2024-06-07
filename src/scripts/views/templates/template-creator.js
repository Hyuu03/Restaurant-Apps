import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (data) => `
    <div class="restaurant-info">
        <a href="/#/detail/${data.id}">
            <img class="restaurant-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + data.pictureId}" alt="${data.name}" title="${data.name}">
            <div class="restaurant-city">${data.city}</div>
            <div class="restaurant-content">
                <p class="restaurant-rating">Rating : ${data.rating}</p>
                <h3 class="restaurant-name">${data.name}</h3>
                <div class="restaurant-description">${data.description.slice(0, 150)}...</div>
            </div>
        </a>
    </div>
`;

const createRestaurantDetailTemplate = (data) => `
    <div class="restaurant-info">
        <img class="restaurant-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + data.pictureId}" alt="${data.name}" title="${data.name}">
        <div class="city-detail">${data.city}</div>
        <div class="restaurant-content" style="text-align:left;">
            <h2 class="namaResto">${data.name}</h2>
            <p class="address">${data.address}</p>
            <p class="rating-detail">Rating : ${data.rating}</p>
            <div class="tag2" style="margin-top:10px;margin-bottom:20px">Kategori : ${data.categories.map((kategori) => `<div class="tag">${kategori.name}</div>`).join('')}</div>
            <div class="restaurant-desc-detail">${data.description}</div>
            <br>
            <h2 style="text-align: center">Menu</h2>
            <br>
            <div class="menu-list">
                <div class="food">
                    <h3>Makanan</h3>
                    <hr>
                    <ul class="detail-food">${data.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
                </div>
                <div class="drink">
                    <h3>Minuman</h3>
                    <hr>
                    <ul class="detail-drink">${data.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
                </div>
            </div>
            <br>
            <h2>Review</h2>
            <div class="review-card-container">
                <p style="text-align: justify">Apa kata mereka yang sudah pernah berkunjung ke sini?</p>
                <div style="margin-top:-15px;margin-bottom:20px; padding-top:20px;padding-bottom:20px">${data.customerReviews.map((review) => `<div class="review-card"><p><b>${review.name}</b> - ${review.date}</p><p>${review.review}</p></div>`).join('')}</div>
            </div>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

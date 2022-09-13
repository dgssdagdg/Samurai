let menuBtn = document.querySelector('.menu-button');
let menuBtnTwo = document.querySelector('.menu-button-two');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
});
menuBtnTwo.addEventListener('click', function(){
	menu.classList.toggle('active');
})


window.addEventListener('click', function(event) {
  let eventTarget = event.target;

  if(eventTarget.closest('.product-element')) {
    let elementContainer = eventTarget;
    let elementSubContainer = elementContainer.querySelector('.product-element-list');

    elementSubContainer.classList.toggle('element-open');
  }

  if(event.target.classList.contains('reviews-btn')) {
    getProducts(event.target); 
  }


})

async function getProducts(button) {
  if (!button.classList.contains('_hold')) {
      button.classList.add('_hold');
      const file = "../json/rewievs.json";
      let response = await fetch(file, {
          method: "GET"
      });
      if(response.ok) {
          let result = await response.json();
          loadProducts(result);
          button.classList.remove('_hold');
          button.remove();
      } else {
          alert("Fieled");
      }
  }
}
function loadProducts(data) {
  const productItems = document.querySelector('.reviews-body');

  data.products.forEach(item => {
    const productId = item.id;
    const productUserImage= item.userImg;
    const productUserName = item.userName;
    const productText = item.text;
    const productUserCity = item.userCity;
    const productImg = item.img;

      let productTemplateStartr = `<div data-id="${productId}" class="reviews-block">
        <div class="reviews-box">
            <div class="reviews-user">
                <div class="reviews-img">
                    <img src="../img/page-reviews/${productUserImage}" alt="">
                </div>
                <div class="reviews-user-texts">
                    <div class="reviews-user-name">${productUserName}, ${productUserCity}</div>
                    <div class="reviews-user-towar">Кресло Samurai S-2.04 плюс</div>
                </div>
            </div>
            <div class="reviews-star">
                <img src="../img/page-reviews/star.png" alt="">
            </div>
        </div>
        <div class="reviews-text">${productText}</div>
        <div class="reviews-images">
            <img src="../img/page-reviews/${productImg}" alt="reviews-img-block">
            <img src="../img/page-reviews/${productImg}" alt="reviews-img-block">
            <img src="../img/page-reviews/${productImg}" alt="reviews-img-block">
            <div class="reviews-images-block reviews-img-block">+2</div>
        </div>
      </div>`;
      productItems.insertAdjacentHTML('beforeend', productTemplateStartr);
  });
}





const swiper = new Swiper('.intro-sliders', {
    loop: true,
    speed: 800,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: '.intro-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.intro .intro-button-next',
      prevEl: '.intro .intro-button-prev',
    },
  });
  const swiperTwo = new Swiper('.hang-sliders', {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.hang-pagination',
    },

  });
  const swiperThree= new Swiper('.reviews-sliders', {
    loop: true,
    speed: 800,
    spaceBetween: 33,
    // If we need pagination
    breakpoints: {
      320: {
        slidesPerView: 1,

      },

      767: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    },

    navigation: {
      nextEl: '.reviews-row .intro-button-next',
      prevEl: '.reviews-row .intro-button-prev',
    },
  });
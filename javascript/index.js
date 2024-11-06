new Swiper('.cardWrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

const apiKey = 'a28e99c86c1d4f8c91aec86cfa69a75d';

async function fetchGameApi(){
  let response;
  let obj;
  response = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`).catch(err => console.error(err));
  obj = await response.json();
  console.log(obj);
}


function hoverAnimationIn() {
  ageRatingClasses = this.classList;
  let ageRating;
  if(ageRatingClasses.contains('age18')) {
    ageRating = 'https://upload.wikimedia.org/wikipedia/commons/2/2a/DJCTQ_-_18.svg'

  } else if(ageRatingClasses.contains('age16')) {
    ageRating = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/400px-DJCTQ_-_16.svg.png';

  } else if(ageRatingClasses.contains('age14')) {
    ageRating = 'https://logodownload.org/wp-content/uploads/2017/07/classificacao-14-anos-logo.png';

  } else if(ageRatingClasses.contains('age12')) {
    ageRating = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DJCTQ_-_12.svg/1024px-DJCTQ_-_12.svg.png';

  } else if(ageRatingClasses.contains('age10')) {
    ageRating = 'https://upload.wikimedia.org/wikipedia/commons/e/e7/DJCTQ_-_10.svg';

  } else {
    ageRating = 'https://logodownload.org/wp-content/uploads/2017/07/classificacao-livre-logo-1.png';
  }
  this.querySelector('.ageRatingContainer').innerHTML = '<img class="w-25" src="' + ageRating + '">';
  this.style = 'border: 2px solid #472BE0; border-radius: 12px; transition: 200ms ease;'
}

function hoverAnimationOut() {
  this.querySelector('.ageRatingContainer').innerHTML = '';
  this.style = 'border-radius: 12px; border: 2px solid transparent; transition: 200ms ease;'
}

const cardsJogoPop = document.querySelectorAll('.cardItem');
cardsJogoPop.forEach(function(elem){
  elem.addEventListener('mouseenter', hoverAnimationIn);
  elem.addEventListener('mouseleave', hoverAnimationOut);
})
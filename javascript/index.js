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

function addAgeClassificacao() {
  for(let i=0; i<cardsJogoPop.length; i++) {
    
  ageRatingClasses = cardsJogoPop[i].classList;
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
  cardsJogoPop[i].querySelector('.ageRatingContainer').innerHTML = '<img class="w-25" src="' + ageRating + '">';
  }
}

function explorarPageSwitch() {
  let showingCard = document.querySelector('.cardPage');
  let nextShowingCard;
  if (this.id == 'controlRight'){
    nextShowingCard = showingCard.nextElementSibling;
  } else {
    nextShowingCard = showingCard.previousElementSibling;
  }

  if (nextShowingCard != null) {
    showingCard.classList.remove('cardPage');
    showingCard.classList.add('cardPageHidden');
  
    nextShowingCard.classList.remove('cardPageHidden');
    nextShowingCard.classList.add('cardPage');
  }
}

function filtrarJogos() {
  let ageCheckFilter = document.querySelectorAll('.checkAge:checked');
  let explorarJogos = document.querySelectorAll('.explorarJogosContainer .cardItem');

  if (ageCheckFilter.length == 0) {
    for (let i=0; i<explorarJogos.length; i++) {
      explorarJogos[i].style.display = 'block';
    }
    document.querySelector('#filtrosBtnIcon').innerHTML = '<span class="material-symbols-outlined">filter_alt_off</span>';
    return 0;
  }
  
  document.querySelector('#filtrosBtnIcon').innerHTML = '<span class="material-symbols-outlined">filter_alt</span>';

  for (let i=0; i<explorarJogos.length; i++) {
    for (let j=0; j<ageCheckFilter.length; j++) {
      if (explorarJogos[i].classList.contains(ageCheckFilter[j].id)) {
        explorarJogos[i].style.display = 'block';
        break;
      } else {
        explorarJogos[i].style.display = 'none';
      }
    }
  }
}


const cardsJogoPop = document.querySelectorAll('.cardItem');

const explorarControls = document.querySelectorAll('.pageControl');
explorarControls.forEach(function(elem) {
    elem.addEventListener('click', explorarPageSwitch)
})

const filtrarBtnModal = document.getElementById('filtrarModal');
filtrarBtnModal.addEventListener('click', filtrarJogos);
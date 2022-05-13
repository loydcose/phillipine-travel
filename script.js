const sideNav = document.querySelector('.row-2__side-nav')
const headerMenu = document.querySelector('.header__menu')
const headerCloseMenu = document.querySelector('.header__nav-close-btn')
const headerUl = document.querySelector('nav ul')
const body = document.querySelector('body')

AOS.init()

headerMenu.addEventListener('click', toggleNav)
headerCloseMenu.addEventListener('click', toggleNav)

function toggleNav() {
  headerUl.classList.toggle('ul-transition')
  body.classList.toggle('cl__body-overflow')
}

const xhr = new XMLHttpRequest()
// console.log(xhr)
xhr.open('GET', 'data.json')
xhr.send()
xhr.onload = () => {
  const parsed = JSON.parse(xhr.responseText)
  outputResponse(parsed)
}

const rowOne = document.querySelector('.row-1')
const rowTwoContents = document.querySelector('.row-2__contents')
const mainDocument = document.querySelector('main')

function outputResponse(data) {
  const dataKeys = Object.keys(data)
  rowOne.innerHTML = `<div class="carousel"></div>`
  for (let i = 0; i < dataKeys.length - 1; i++) {
    rowTwoContents.innerHTML += `<div class="carousel"></div>`
  }

  const carousel = document.querySelectorAll('.carousel')

  outputCarousel()
  function outputCarousel() {
    for (let i = 0; i < carousel.length; i++) {
      const dataKeys = Object.keys(data)
      carousel[i].innerHTML = `<h2>${data[dataKeys[i]].title}</h2>
      <div class="cards__container">
        <div class="cards__left-btn cards__btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 65.74"> <g id="Layer_2" data-name="Layer 2"> <g id="Main"><path d="M26.77,32.66l-5.35-5.52q-10-10.28-20-20.54A4.1,4.1,0,0,1,.05,3.29,3.41,3.41,0,0,1,2.56.2,3.56,3.56,0,0,1,6.48,1.31C9.1,4,11.7,6.77,14.31,9.51Q24.14,19.81,34,30.13c1.39,1.47,1.67,2.7.93,4.25a5.09,5.09,0,0,1-1,1.32Q20.21,50.07,6.45,64.41a3.68,3.68,0,0,1-5.23.43,3.38,3.38,0,0,1-.67-4.45,6,6,0,0,1,.81-1.07q12.42-13,24.86-26.06C26.39,33.09,26.55,32.9,26.77,32.66Z" /></g> </g> </svg>
        </div>
        <div class="cards__right-btn cards__btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 65.74"> <g id="Layer_2" data-name="Layer 2"> <g id="Main"><path d="M26.77,32.66l-5.35-5.52q-10-10.28-20-20.54A4.1,4.1,0,0,1,.05,3.29,3.41,3.41,0,0,1,2.56.2,3.56,3.56,0,0,1,6.48,1.31C9.1,4,11.7,6.77,14.31,9.51Q24.14,19.81,34,30.13c1.39,1.47,1.67,2.7.93,4.25a5.09,5.09,0,0,1-1,1.32Q20.21,50.07,6.45,64.41a3.68,3.68,0,0,1-5.23.43,3.38,3.38,0,0,1-.67-4.45,6,6,0,0,1,.81-1.07q12.42-13,24.86-26.06C26.39,33.09,26.55,32.9,26.77,32.66Z" /></g> </g> </svg>
        </div>
        <div class="cards__overflow">
          <div class="cards__scroll-container"></div>
        </div>
      </div>`
      const locationsKeys = Object.keys(data[dataKeys[i]].locations)

      for (let n = 0; n < Object.keys(data[Object.keys(data)[i]].locations).length; n++) {
        const path = data[Object.keys(data)[i]].locations[Object.keys(data[Object.keys(data)[i]].locations)[n]].path.join(' ')

        carousel[i].querySelector('.cards__scroll-container').innerHTML += `<div class="card__img" data-path="${path}">
        <img src="${data[Object.keys(data)[i]].locations[Object.keys(data[Object.keys(data)[i]].locations)[n]].image}" alt="${data[Object.keys(data)[i]].locations[Object.keys(data[Object.keys(data)[i]].locations)[n]].name}" />
        <div class="card__info">
          <div class="card__location-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.09 56.12">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Main"><path d="M21,0A21.19,21.19,0,0,1,33.21,3.81a20.76,20.76,0,0,1,8.46,12.8,19.45,19.45,0,0,1-.86,10.92,55.48,55.48,0,0,1-5,10A163.91,163.91,0,0,1,24,54.51a3.49,3.49,0,0,1-3.25,1.59,3.57,3.57,0,0,1-2.5-1.55c-2.25-3-4.53-5.91-6.71-8.93a94.48,94.48,0,0,1-8.77-14.7A27.48,27.48,0,0,1,.08,22.21a18.19,18.19,0,0,1,.54-6.15A20.21,20.21,0,0,1,6.74,5.58,20.5,20.5,0,0,1,18.55.18L19.22.1ZM14,21.1a7,7,0,1,0,7-7A7.06,7.06,0,0,0,14,21.1Z" /></g>
              </g>
            </svg>
          </div>
          <h4>${data[Object.keys(data)[i]].locations[Object.keys(data[Object.keys(data)[i]].locations)[n]].name}</h4>
        </div>
      </div>`
      }
    }
  }

  const cardsContainer = document.querySelectorAll('.cards__container')

  visibility()
  window.addEventListener('resize', () => {
    visibility()
  })

  function visibility(parentWidth) {
    if (innerWidth <= 500) {
      divide(1)
    } else if (innerWidth <= 750) {
      divide(2)
    } else if (innerWidth <= 980) {
      divide(3)
    } else {
      divide(4)
    }
  }

  function divide(visibleBox) {
    for (let i = 0; i < cardsContainer.length; i++) {
      const cardsScrollContainer = cardsContainer[i].querySelector('.cards__scroll-container')
      cardsScrollContainer.style.left = '0px'
      const result = (cardsScrollContainer.children.length / visibleBox) * 100
      cardsScrollContainer.style.width = `${result}%`
    }
  }

  const cards = document.querySelectorAll('.card__img')
  cards.forEach((card, cardIndex) => {
    card.addEventListener('click', (e) => {
      body.classList.add('cl__body-overflow')

      const path = data[e.currentTarget.dataset.path.split(' ')[0]].locations[e.currentTarget.dataset.path.split(' ')[1]]

      const createModal = document.createElement('div')
      createModal.classList.add('main__modal-description')
      setTimeout(() => {
        createModal.classList.add('main__modal-transition')
      }, 100)

      createModal.innerHTML = `<div class="modal__header">
            <img src="${path.image}" alt="${path.name}" />
            <h2>Welcome to ${path.name}!</h2>
          </div>
          <div class="modal__description">
            <p>${path.description}</p>
          </div>`
      mainDocument.appendChild(createModal)

      console.log(window.innerHeight)
      console.log(createModal.clientHeight > window.innerHeight)

      document.documentElement.addEventListener('keyup', (e) => {
        if (e.keyCode === 27) {
          body.classList.remove('cl__body-overflow')

          createModal.classList.remove('main__modal-transition')
          setTimeout(() => {
            createModal.remove()
          }, 100)
        }
      })
    })
  })

  for (let i = 0; i < cardsContainer.length; i++) {
    const buttons = cardsContainer[i].querySelectorAll('.cards__btn')
    const cardsScrollContainer = cardsContainer[i].querySelector('.cards__scroll-container')
    const cards = cardsContainer[i].querySelector('.cards__scroll-container').children
    let clickCount = 0

    buttons.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (index == 0) {
          clickCount--
        } else {
          clickCount++
        }

        if (window.innerWidth <= 500) {
          slide(cards.length - 1)
        } else if (window.innerWidth <= 750) {
          slide(cards.length - 2)
        } else if (window.innerWidth <= 980) {
          slide(cards.length - 3)
        } else {
          slide(cards.length - 4)
        }
      })
    })

    function slide(length) {
      const position = cards[0].getBoundingClientRect().width + 5
      if (clickCount < 0 || clickCount > length) {
        clickCount = 0
        cardsScrollContainer.style.left = `-${position * clickCount}px`
      } else {
        cardsScrollContainer.style.left = `-${position * clickCount}px`
      }
    }
  }
}

const rowTwo = document.querySelector('.row-2')
const ctn = document.querySelector('.header__ctn')
ctn.addEventListener('click', () => {
  window.scrollTo(0, rowTwo.offsetTop)
})

window.addEventListener('scroll', () => {
  if (window.scrollY > rowTwo.offsetTop) {
    sideNav.style.backgroundColor = '#0d111f'
  } else {
    sideNav.style.backgroundColor = '#0f1626'
  }
})

const mapLocations = document.querySelectorAll('.locations')
mapLocations.forEach((location, locationIndex) => {
  location.addEventListener('click', () => {
    scrollOnRegions(parseInt(location.dataset.region))
  })
})

const regionLists = document.querySelectorAll('.row-2__side-nav ul li')
regionLists.forEach((region, regionIndex) => {
  region.addEventListener('click', (e) => {
    scrollOnRegions(regionIndex + 1)
  })
})

function scrollOnRegions(carouselItem) {
  const carousels = document.querySelectorAll('.carousel')
  const regionOffset = carousels[carouselItem].getBoundingClientRect().top + window.scrollY
  window.scrollTo(0, regionOffset - 50)
}

window.addEventListener('scroll', () => {
  const rowTwoCarousels = rowTwo.querySelectorAll('.carousel')
  rowTwoCarousels.forEach((carousel, carouselIndex) => {
    if (window.scrollY > carousel.getBoundingClientRect().top + window.scrollY - 100) {
      regionLists.forEach((region) => {
        region.classList.remove('side-nav__li-trans')
      })
      regionLists[carouselIndex].classList.add('side-nav__li-trans')
    } else {
      regionLists[carouselIndex].classList.remove('side-nav__li-trans')
    }
  })
})

const backToTopBtn = document.querySelector('.footer__to-top')
backToTopBtn.addEventListener('click', backToTop)
function backToTop() {
  window.scrollTo(0, 0)
}

const colOneCardsContainer = document.querySelector('.col-1__cards-container')
const mainDocument = document.querySelector('main')
const sideNav = document.querySelector('.col-2__side-nav')

AOS.init()

const xhr = new XMLHttpRequest()
console.log(xhr)
xhr.open('GET', 'data.json')
xhr.send()
xhr.onload = () => {
  const parsed = JSON.parse(xhr.responseText)
  outputData(parsed)
}

function outputData(data) {
  for (let i in data['popular'].locations) {
    colOneCardsContainer.innerHTML += `<div class="col-1__img">
      <img src="${data['popular'].locations[i].image}" alt=${data['popular'].locations[i].name} />
      <div class="col-1__card-info">
        <div class="col-1__location-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.09 56.12">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Main">
                <path
                  d="M21,0A21.19,21.19,0,0,1,33.21,3.81a20.76,20.76,0,0,1,8.46,12.8,19.45,19.45,0,0,1-.86,10.92,55.48,55.48,0,0,1-5,10A163.91,163.91,0,0,1,24,54.51a3.49,3.49,0,0,1-3.25,1.59,3.57,3.57,0,0,1-2.5-1.55c-2.25-3-4.53-5.91-6.71-8.93a94.48,94.48,0,0,1-8.77-14.7A27.48,27.48,0,0,1,.08,22.21a18.19,18.19,0,0,1,.54-6.15A20.21,20.21,0,0,1,6.74,5.58,20.5,20.5,0,0,1,18.55.18L19.22.1ZM14,21.1a7,7,0,1,0,7-7A7.06,7.06,0,0,0,14,21.1Z"
                />
              </g>
            </g>
          </svg>
        </div>
        <h4>${data['popular'].locations[i].name}</h4>
      </div>
    </div>`
  }
  const colOneCards = document.querySelectorAll('.col-1__img')
  colOneCards.forEach((card, cardIndex) => {
    card.addEventListener('click', (e) => {
      const locate = Object.keys(data['popular'].locations)[cardIndex]

      const createModal = document.createElement('div')
      createModal.classList.add('main__modal-description')
      setTimeout(() => {
        createModal.classList.add('main__modal-transition')
      }, 100)

      createModal.innerHTML = `<div class="modal__header">
          <img src="${data['popular'].locations[locate].image}" alt="${data['popular'].locations[locate].name}" />
          <h2>Welcome to ${data['popular'].locations[locate].name}!</h2>
        </div>
        <div class="modal__description">
          <p>${data['popular'].locations[locate].description}</p>
        </div>`
      mainDocument.appendChild(createModal)

      document.documentElement.addEventListener('keyup', (e) => {
        if (e.keyCode === 27) {
          createModal.classList.remove('main__modal-transition')
          setTimeout(() => {
            createModal.remove()
          }, 100)
        }
      })
    })
  })
}

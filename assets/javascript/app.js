// const DOM = {}

// DOM.country_backtomap     = document.querySelector('.single-country-backtomap')
// DOM.place_backtomap       = document.querySelector('.single-place-footer-backtomap')
// DOM.place_backtocountry   = document.querySelector('.single-place-backtocountry')
// DOM.country_place_choice  = document.querySelectorAll('.single-country-discover-element-content-discover')

// DOM.country               = document.querySelector('.single-country')
// DOM.place                 = document.querySelector('.single-place')


// DOM.country_backtomap.addEventListener('click', () => {
//     DOM.country.classList.remove('active')
// })

// DOM.place_backtomap.addEventListener('click', () => {
//     DOM.country.classList.remove('active')
//     DOM.place.classList.remove('active')
// })

// DOM.place_backtocountry.addEventListener('click', () => {
//     DOM.place.classList.remove('active')
// })

// DOM.country_place_choice.forEach(element => {
//     element.addEventListener('click', () => {
//         DOM.place.classList.add('active')
//     })
// })

/********
 * MENU
 * 
 */

const DOM = {}

DOM.singlePlaceVideo = document.querySelector('.single-place-video video')

window.onbeforeunload = () => { // Scroll to top when reload
  window.scrollTo(0, 0)
}

function isElementInViewport(el) { // Check if element is in viewport

  if (el != null) {
    const rect = el.getBoundingClientRect()

    return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
  }
}

function onVisibilityChange(el, callback) { // Check if visibility in viewport has change
  let oldVisible
  return function() {
    let visible = isElementInViewport(el)
    if (visible != oldVisible) {
      oldVisible = visible
      if (typeof callback == 'function') {
        callback()
      }
      return visible
    }
  }
}

const handler = onVisibilityChange(DOM.singlePlaceVideo, () => { // Handle the video
  if (isElementInViewport(DOM.singlePlaceVideo) == true) {
    DOM.singlePlaceVideo.play()
    DOM.singlePlaceVideo.volume = 0.5
  } else {
    DOM.singlePlaceVideo.pause()
  }

})

if (window.addEventListener) { // Event listener when viewport changing
  addEventListener('DOMContentLoaded', handler, false)
  addEventListener('load', handler, false)
  addEventListener('scroll', handler, false)
  addEventListener('resize', handler, false)
} else if (window.attachEvent) {
  attachEvent('onDOMContentLoaded', handler) // IE9+
  attachEvent('onload', handler)
  attachEvent('onscroll', handler)
  attachEvent('onresize', handler)
}


let menu = document.querySelector('.menu-hamburger')
let menu_content = document.querySelector('.menu-bg')
menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    menu_content.classList.remove('active')
  } else {
    menu.classList.add('active')
    menu_content.classList.add('active')
  }
})

window.sr = ScrollReveal()
sr.reveal('.single-place-description-title', { duration: 1000, origin: 'right' })
sr.reveal('.single-place-description-text', { duration: 1000, origin: 'right' })
sr.reveal('.single-place-video', { duration: 1000, viewFactor: 0.1 })
sr.reveal('.single-place-fact', { duration: 1000 })
sr.reveal('.single-place-fact-text', { duration: 1000 })

DOM.body = document.querySelector('body')
DOM.singleCountry = document.querySelector('.single-country')
DOM.singleCountryLifeButton = document.querySelector('.single-country-society-content-links-life')
DOM.singleCountryLifeButtonExit = document.querySelector('.single-country-life-backtocountry')
DOM.singleCountryLife = document.querySelector('.single-country-life')
DOM.singleCountryTransportsButton = document.querySelector('.single-country-society-content-links-transports')
DOM.singleCountryTransportsButtonExit = document.querySelector('.single-country-transports-backtocountry')
DOM.singleCountryTransports = document.querySelector('.single-country-transports')

DOM.singleCountryLifeButton.addEventListener('click', () => {
  countrySuppInfoActive(DOM.singleCountryLife, DOM.singleCountry, DOM.body)
})

DOM.singleCountryLifeButtonExit.addEventListener('click', () => {
  countrySuppInfoExit(DOM.singleCountryLife, DOM.singleCountry, DOM.body)
})

DOM.singleCountryTransportsButton.addEventListener('click', () => {
  countrySuppInfoActive(DOM.singleCountryTransports, DOM.singleCountry, DOM.body)
})

DOM.singleCountryTransportsButtonExit.addEventListener('click', () => {
  countrySuppInfoExit(DOM.singleCountryTransports, DOM.singleCountry, DOM.body)
})

function countrySuppInfoActive(containerElem, container, body) {
  if (containerElem.classList.contains('active')) {
    containerElem.classList.remove('active')
    container.classList.remove('active')
    body.classList.remove('active')
  } else {
    containerElem.classList.add('active')
    container.classList.add('active')
    body.classList.add('active')
  }
}

function countrySuppInfoExit(containerElem, container, body) {
  containerElem.classList.remove('active')
  container.classList.remove('active')
  body.classList.remove('active')
}
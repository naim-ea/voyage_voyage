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



DOM.body = document.querySelector('body')

// Country page selector
DOM.singleCountry = document.querySelector('.single-country')
DOM.singleCountryLifeButton = document.querySelector('.single-country-society-content-links-life')
DOM.singleCountryLifeButtonExit = document.querySelector('.single-country-life-backtocountry')
DOM.singleCountryLife = document.querySelector('.single-country-life')
DOM.singleCountryTransportsButton = document.querySelector('.single-country-society-content-links-transports')
DOM.singleCountryTransportsButtonExit = document.querySelector('.single-country-transports-backtocountry')
DOM.singleCountryTransports = document.querySelector('.single-country-transports')
DOM.singleCountryTranslatePlayer = document.querySelector('.single-country-sounds-translations-player')
DOM.singleCountryTranslateButton = document.querySelectorAll('.single-country-sounds-translations-element .other-language')
DOM.singleCountryVideo = document.querySelector('.single-country-famous-video')

// Place page selector
DOM.singlePlace = document.querySelector('.single-place')
DOM.singlePlaceVideo = document.querySelector('.single-place-video video')
DOM.singlePlaceStreetview = document.querySelector('.single-place-title-streetview')
DOM.singlePlaceButtonStreetview = document.querySelector('.single-place-title-button-content')
DOM.singlePlaceButtonStreetviewExit = document.querySelector('.single-place-title-button-content-exit')

// Country page
if (DOM.singleCountry != null) {
  // Scroll reveal
  window.sr = ScrollReveal()
  // Hero
  sr.reveal('.single-country-title', { duration: 1000, origin: 'right' })
  sr.reveal('.single-country-img', { duration: 1000, origin: 'right' })

  // Data
  sr.reveal('.single-country-data-first-row-flag', { duration: 700, origin: 'top' })
  sr.reveal('.single-country-data-first-row-population', { duration: 700, origin: 'top' })
  sr.reveal('.single-country-data-first-row-area', { duration: 700, origin: 'top' })
  sr.reveal('.single-country-data-second-row', { duration: 700, origin: 'top' })

  // Anthem
  sr.reveal('.single-country-sounds-anthem-title', { duration: 700, origin: 'left' })
  sr.reveal('.single-country-sounds-anthem-description', { duration: 700, origin: 'left' })

  // Translation
  sr.reveal('.single-country-sounds-translations-title', { duration: 500, origin: 'left' })
  sr.reveal('.single-country-sounds-translations-cta', { duration: 500, origin: 'left' })
  sr.reveal('.single-country-sounds-translations-element li', { duration: 700, origin: 'left' })
  sr.reveal('.single-country-sounds-img img', { duration: 700, origin: 'right', viewFactor: 0.1 })

  // Society
  sr.reveal('.single-country-society-content-title', { duration: 700, origin: 'left' })
  sr.reveal('.single-country-society-content-description', { duration: 500, origin: 'left' })
  sr.reveal('.single-country-society-content-links div', { duration: 500, origin: 'top' })
  sr.reveal('.single-country-society-img img', { duration: 700, origin: 'right' })

  // History
  sr.reveal('.single-country-history-content-title', { duration: 700, origin: 'left' })
  sr.reveal('.single-country-history-content-description', { duration: 500, origin: 'left' })
  sr.reveal('.single-country-history-img img', { duration: 700, origin: 'right' })

  // Famous
  sr.reveal('.single-country-famous-content-title', { duration: 700, origin: 'left' })
  sr.reveal('.single-country-famous-content-description', { duration: 500, origin: 'left' })
  sr.reveal('.single-country-famous-video', { duration: 700, origin: 'left', viewFactor: 0.1 })
  sr.reveal('.single-country-famous-img img', { duration: 700, origin: 'right' })

  // Visit
  sr.reveal('.single-country-visit-content-title', { duration: 700, origin: 'left' })
  sr.reveal('.single-country-visit-content-description', { duration: 500, origin: 'left' })
  sr.reveal('.single-country-visit-img img', { duration: 700, origin: 'right' })
  sr.reveal('.single-country-visit-img-content-content', { duration: 700, origin: 'top' })

  // Country other infos animations
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

  // Traduction button
  DOM.singleCountryTranslateButton.forEach((elTranslateButton, indexTranslateButton) => {
    elTranslateButton.addEventListener('click', () => {
      let slug = elTranslateButton.getAttribute('data-audio-link')
      DOM.singleCountryTranslatePlayer.src = slug
      DOM.singleCountryTranslatePlayer.play()
    })
  })

  const handlerSingleCountry = onVisibilityChange(DOM.singleCountryVideo, () => { // Handle the video
    if (isElementInViewport(DOM.singleCountryVideo) == true) {
      DOM.singleCountryVideo.play()
      DOM.singleCountryVideo.volume = 0.5
    } else {
      DOM.singleCountryVideo.pause()
    }

  })

  if (window.addEventListener) { // Event listener when viewport changing
    addEventListener('DOMContentLoaded', handlerSingleCountry, false)
    addEventListener('load', handlerSingleCountry, false)
    addEventListener('scroll', handlerSingleCountry, false)
    addEventListener('resize', handlerSingleCountry, false)
  } else if (window.attachEvent) {
    attachEvent('onDOMContentLoaded', handlerSingleCountry) // IE9+
    attachEvent('onload', handlerSingleCountry)
    attachEvent('onscroll', handlerSingleCountry)
    attachEvent('onresize', handlerSingleCountry)
  }
}

if (DOM.singlePlace != null) {
  // Scroll reveal
  window.sr = ScrollReveal()
  // Description
  sr.reveal('.single-place-description-title', { duration: 1000, origin: 'right' })
  sr.reveal('.single-place-description-text', { duration: 1000, origin: 'right' })

  // Video
  sr.reveal('.single-place-video', { duration: 1000, viewFactor: 0.1 })

  // Fact
  sr.reveal('.single-place-fact', { duration: 1000 })
  sr.reveal('.single-place-fact-img', { duration: 1000 })

  //Cooking
  sr.reveal('.single-place-cooking-img', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-cooking-text-title', { duration: 1000, origin: 'right' })
  sr.reveal('.single-place-cooking-text-subtitle', { duration: 1100, origin: 'right' })
  sr.reveal('.single-place-cooking-text-text', { duration: 1200, origin: 'right' })

  // Clothes
  sr.reveal('.single-place-clothes-title', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-clothes-content', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-clothes-text-title', { duration: 1000, origin: 'right' })
  sr.reveal('.single-place-clothes-text-text', { duration: 1100, origin: 'right' })

  // Climate
  sr.reveal('.single-place-climate-title', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-climate-content-seasons', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-climate-content-weather', { duration: 1000, origin: 'left' })

  const handlerSinglePlace = onVisibilityChange(DOM.singlePlaceVideo, () => { // Handle the video
    if (isElementInViewport(DOM.singlePlaceVideo) == true) {
      DOM.singlePlaceVideo.play()
      DOM.singlePlaceVideo.volume = 0.5
    } else {
      DOM.singlePlaceVideo.pause()
    }

  })

  if (window.addEventListener) { // Event listener when viewport changing
    addEventListener('DOMContentLoaded', handlerSinglePlace, false)
    addEventListener('load', handlerSinglePlace, false)
    addEventListener('scroll', handlerSinglePlace, false)
    addEventListener('resize', handlerSinglePlace, false)
  } else if (window.attachEvent) {
    attachEvent('onDOMContentLoaded', handlerSinglePlace) // IE9+
    attachEvent('onload', handlerSinglePlace)
    attachEvent('onscroll', handlerSinglePlace)
    attachEvent('onresize', handlerSinglePlace)
  }

  // Init streetview
  // let streetviewGps = { lat: elTranslateButton.getAttribute('data-lat'), lng: elTranslateButton.getAttribute('data-long') };
  // let streetview = new google.maps.Map(DOM.singlePlaceStreetview, {
  //   zoom: 3,
  //   streetViewControl: true,
  // });
  // let streetviewPanorama = map.getStreetView();
  // streetviewPanorama.setPosition(streetviewGps);
  // streetviewPanorama.setPov( /** @type {google.maps.StreetViewPov} */ ({
  //   heading: 265,
  //   pitch: 0
  // }));

  // // Event button ENTER street view
  // DOM.singlePlaceButtonStreetview.addEventListener('click', () => {
  //   streetviewPanorama.setPosition(streetviewGps);
  //   panorama.setVisible(true);
  //   DOM.singlePlaceStreetview.classList.add('active')
  // });

  // // Event button EXIT street view
  // DOM.singlePlaceButtonStreetviewExit.addEventListener('click', () => {
  //   DOM.singlePlaceStreetview.classList.remove('active')
  //   panorama.setVisible(false);
  // });
}
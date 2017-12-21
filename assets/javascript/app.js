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
DOM.singleCountrySpeaker = document.querySelector('.single-country-speaker')
DOM.singleCountrySpeakerAudio = document.querySelector('.single-country-speaker audio')
DOM.singleCountrySpeakerImg = document.querySelector('.single-country-speaker img')

// Place page selector
DOM.singlePlace = document.querySelector('.single-place')
DOM.singlePlaceVideo = document.querySelector('.single-place-video video')
DOM.singlePlaceStreetview = document.querySelector('.single-place-streetview-area')
DOM.singlePlaceStreetviewMap = document.querySelector('.single-place-streetview-area-map')
DOM.singlePlaceButtonStreetview = document.querySelectorAll('.single-place-streetview-button')
DOM.singlePlaceButtonStreetviewExit = document.querySelector('.single-place-streetview-area-backtoplace')
DOM.singlePlaceStreetviewAudio = document.querySelector('.single-place-streetview-area audio')
DOM.singlePlaceSpeaker = document.querySelector('.single-place-speaker')
DOM.singlePlaceSpeakerAudio = document.querySelector('.single-place-speaker audio')
DOM.singlePlaceSpeakerImg = document.querySelector('.single-place-speaker img')

// Menu
DOM.menuElementsBacktomap = document.querySelector('.menu-bg-content-elements-backToMap')
DOM.menuElementsBacktocountry = document.querySelector('.menu-bg-content-elements-backToCountry')
DOM.menuElementsBacktocontent = document.querySelector('.menu-backto-content')
DOM.menuElementsBacktolink = document.querySelector('.menu-backto-link')


// Country page
if (DOM.singleCountry != null) {
  // Menu 
  DOM.menuElementsBacktocountry.style.display = 'none'
  DOM.menuElementsBacktocontent.innerHTML = 'Carte'
  DOM.menuElementsBacktolink.setAttribute("href", "index.html")

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
      DOM.singleCountryVideo.volume = 0.9
      DOM.singleCountrySpeakerAudio.pause()
    } else {
      DOM.singleCountryVideo.pause()
      DOM.singleCountrySpeakerAudio.play()
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

  // Anthem player
  DOM.anthemPlayPause = document.querySelector('#playPause')
  DOM.anthemPlaypauseBtn = document.querySelector('.single-country-sounds-anthem-content-play')
  DOM.anthemProgress = document.querySelector('.single-country-sounds-anthem-content-bar-full')
  DOM.anthemSliders = document.querySelectorAll('.slider')
  DOM.anthemPlayer = document.querySelector('audio')
  DOM.anthemCurrentTime = document.querySelector('.current-time')

  let draggableClasses = ['pin']
  let currentlyDragged = null

  window.addEventListener('mousedown', function(event) {

    if (!isDraggable(event.target)) return false

    currentlyDragged = event.target
    let handleMethod = currentlyDragged.dataset.method

    this.addEventListener('mousemove', window[handleMethod], false)

    window.addEventListener('mouseup', () => {
      currentlyDragged = false
      window.removeEventListener('mousemove', window[handleMethod], false)
    }, false)
  })

  DOM.anthemPlaypauseBtn.addEventListener('click', togglePlay)
  DOM.anthemPlayer.addEventListener('timeupdate', updateProgress)
  DOM.anthemPlayer.addEventListener('canplay', makePlay)
  DOM.anthemPlayer.addEventListener('ended', function() {
    DOM.anthemPlayPause.attributes.d.value = "M18 12L0 24V0"
  })


  DOM.anthemSliders.forEach(slider => {
    let pin = slider.querySelector('.pin')
    slider.addEventListener('click', window[pin.dataset.method])
  })

  function isDraggable(el) {
    let canDrag = false
    let classes = Array.from(el.classList)
    draggableClasses.forEach(draggable => {
      if (classes.indexOf(draggable) !== -1)
        canDrag = true
    })
    return canDrag
  }

  function inRange(event) {
    let rangeBox = getRangeBox(event)
    let rect = rangeBox.getBoundingClientRect()
    let direction = rangeBox.dataset.direction
    if (direction == 'horizontal') {
      let min = rangeBox.offsetLeft
      let max = min + rangeBox.offsetWidth
      if (event.clientX < min || event.clientX > max) return false
    } else {
      let min = rect.top
      let max = min + rangeBox.offsetHeight
      if (event.clientY < min || event.clientY > max) return false
    }
    return true
  }

  function updateProgress() {
    let current = DOM.anthemPlayer.currentTime
    let percent = (current / DOM.anthemPlayer.duration) * 100
    DOM.anthemProgress.style.width = percent + '%'
  }

  function getRangeBox(event) {
    let rangeBox = event.target
    let el = currentlyDragged
    if (event.type == 'click' && isDraggable(event.target)) {
      rangeBox = event.target.parentElement.parentElement
    }
    if (event.type == 'mousemove') {
      rangeBox = el.parentElement.parentElement
    }
    return rangeBox
  }

  function getCoefficient(event) {
    let slider = getRangeBox(event)
    let rect = slider.getBoundingClientRect()
    let K = 0
    if (slider.dataset.direction == 'horizontal') {

      let offsetX = event.clientX - slider.offsetLeft
      let width = slider.clientWidth
      K = offsetX / width

    } else if (slider.dataset.direction == 'vertical') {

      let height = slider.clientHeight
      let offsetY = event.clientY - rect.top
      K = 1 - offsetY / height

    }
    return K
  }

  function rewind(event) {
    if (inRange(event)) {
      DOM.anthemPlayer.currentTime = DOM.anthemPlayer.duration * getCoefficient(event)
    }
  }

  function changeVolume(event) {
    if (inRange(event)) {
      DOM.anthemPlayer.volume = getCoefficient(event)
    }
  }

  function formatTime(time) {
    let min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)
    return min + ':' + ((sec < 10) ? ('0' + sec) : sec)
  }

  function togglePlay() {
    if (DOM.anthemPlayer.paused) {
      DOM.anthemPlayPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z"
      DOM.anthemPlayer.play()
      DOM.singleCountrySpeakerAudio.pause()
      DOM.anthemPlayer.volume = 0.4
    } else {
      DOM.anthemPlayPause.attributes.d.value = "M18 12L0 24V0"
      DOM.anthemPlayer.pause()
      DOM.singleCountrySpeakerAudio.play()
    }
  }

  function makePlay() {
    DOM.anthemPlaypauseBtn.style.display = 'block'
  }

  DOM.singleCountrySpeaker.addEventListener('click', () => {

    if (DOM.singleCountrySpeaker.classList.contains('active')) {
      DOM.singleCountrySpeaker.classList.remove('active')
      DOM.singleCountrySpeakerImg.src = 'img/speaker_off.svg'
      DOM.singleCountrySpeakerAudio.muted = true
    } else {
      DOM.singleCountrySpeaker.classList.add('active')
      DOM.singleCountrySpeakerImg.src = 'img/speaker.svg'
      DOM.singleCountrySpeakerAudio.muted = false
    }

  })

}

if (DOM.singlePlace != null) {
  // Menu
  // DOM.menuElementsBacktocountry.style.display = 'none'
  DOM.menuElementsBacktocontent.innerHTML = 'Inde'
  DOM.menuElementsBacktolink.setAttribute("href", "inde.html");

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
  sr.reveal('.single-place-climate-img', { duration: 1000, origin: 'right' })

  // Climate
  sr.reveal('.single-place-wildlife-title', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-wildlife-description', { duration: 1000, origin: 'left' })
  sr.reveal('.single-place-wildlife-img', { duration: 1000, origin: 'right' })

  const handlerSinglePlace = onVisibilityChange(DOM.singlePlaceVideo, () => { // Handle the video
    if (isElementInViewport(DOM.singlePlaceVideo) == true) {
      DOM.singlePlaceVideo.play()
      DOM.singlePlaceSpeakerAudio.pause()
      DOM.singlePlaceVideo.volume = 0.5
    } else {
      DOM.singlePlaceVideo.pause()
      DOM.singlePlaceSpeakerAudio.play()
    }
  })

  const handlerStreetViewButton = onVisibilityChange(DOM.singlePlaceButtonStreetview[0], () => { // Handle the video
    if (isElementInViewport(DOM.singlePlaceButtonStreetview[0]) == true) {
      DOM.singlePlaceButtonStreetview[0].classList.add('active')
      DOM.singlePlaceButtonStreetview[1].classList.remove('active')
    } else {
      DOM.singlePlaceButtonStreetview[0].classList.remove('active')
      DOM.singlePlaceButtonStreetview[1].classList.add('active')
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

  if (window.addEventListener) { // Event listener when viewport changing
    addEventListener('DOMContentLoaded', handlerStreetViewButton, false)
    addEventListener('load', handlerStreetViewButton, false)
    addEventListener('scroll', handlerStreetViewButton, false)
    addEventListener('resize', handlerStreetViewButton, false)
  } else if (window.attachEvent) {
    attachEvent('onDOMContentLoaded', handlerStreetViewButton) // IE9+
    attachEvent('onload', handlerStreetViewButton)
    attachEvent('onscroll', handlerStreetViewButton)
    attachEvent('onresize', handlerStreetViewButton)
  }

  // Init streetview
  let streetviewGps = { lat: Number(DOM.singlePlaceButtonStreetview[0].getAttribute('data-lat')), lng: Number(DOM.singlePlaceButtonStreetview[0].getAttribute('data-long')) }
  let streetview = new google.maps.StreetViewPanorama(DOM.singlePlaceStreetviewMap, {
    position: streetviewGps,
    streetViewControl: true,
  })

  // Event button ENTER street view
  DOM.singlePlaceButtonStreetview.forEach((elButtonStreetview, indexButtonStreetview) => {
    elButtonStreetview.addEventListener('click', () => {
      DOM.singlePlaceStreetview.classList.add('active')
      DOM.singlePlaceStreetviewAudio.play()
      DOM.singlePlaceStreetviewAudio.volume = 0.7
      DOM.singlePlaceSpeakerAudio.volume = 0.3
      // DOM.singlePlaceStreetviewMap.classList.add('active')
    })
  })

  // Event button EXIT street view
  DOM.singlePlaceButtonStreetviewExit.addEventListener('click', () => {
    DOM.singlePlaceStreetview.classList.remove('active')
    DOM.singlePlaceStreetviewAudio.pause()
    DOM.singlePlaceSpeakerAudio.volume = 1
    // DOM.singlePlaceStreetviewMap.classList.remove('active')
  })

  // Event button Play/Pause sound

  DOM.singlePlaceSpeaker.addEventListener('click', () => {

    if (DOM.singlePlaceSpeaker.classList.contains('active')) {
      DOM.singlePlaceSpeaker.classList.remove('active')
      DOM.singlePlaceSpeakerImg.src = 'img/speaker_off.svg'
      DOM.singlePlaceSpeakerAudio.muted = true
    } else {
      DOM.singlePlaceSpeaker.classList.add('active')
      DOM.singlePlaceSpeakerImg.src = 'img/speaker.svg'
      DOM.singlePlaceSpeakerAudio.muted = false
    }

  })
}
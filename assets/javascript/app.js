// const DOM = {};

// DOM.country_backtomap     = document.querySelector('.single-country-backtomap');
// DOM.place_backtomap       = document.querySelector('.single-place-footer-backtomap');
// DOM.place_backtocountry   = document.querySelector('.single-place-backtocountry');
// DOM.country_place_choice  = document.querySelectorAll('.single-country-discover-element-content-discover');

// DOM.country               = document.querySelector('.single-country');
// DOM.place                 = document.querySelector('.single-place');


// DOM.country_backtomap.addEventListener('click', () => {
//     DOM.country.classList.remove('active');
// });

// DOM.place_backtomap.addEventListener('click', () => {
//     DOM.country.classList.remove('active');
//     DOM.place.classList.remove('active');
// });

// DOM.place_backtocountry.addEventListener('click', () => {
//     DOM.place.classList.remove('active');
// });

// DOM.country_place_choice.forEach(element => {
//     element.addEventListener('click', () => {
//         DOM.place.classList.add('active');
//     })
// });

/********
 * MENU
 * 
 */

 let menu = document.querySelector('.menu-hamburger');
 let menu_content = document.querySelector('.menu-bg');
 menu.addEventListener('click', () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        menu_content.classList.remove('active');
    }
    else{
        menu.classList.add('active');
        menu_content.classList.add('active');
    }
 });

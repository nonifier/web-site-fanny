
import bulmaCarousel from '../node_modules/bulma-carousel/dist/js/bulma-carousel.js';

let options = {
    initialSlide: 0,
    navigation:	true, // Display navigation buttons 
    navigationKeys:	true, // Enable navigation with arrow keys
    loop: true,
    infinite: true,
    effect: 'translate', // translate/fade
    duration: 300, // Transition animation duration (in ms)
    timing: 'ease', // Transiation animation type 
    autoplay: true,
    autoplaySpeed: 3000, //	Time between each transition when autoplay is active (ms)	
    pauseOnHove: true,
};

// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#carousel-demo');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
}

// Events 
document.addEventListener('DOMContentLoaded', () => {
  console.log('Hey my dear Bulma!');
});

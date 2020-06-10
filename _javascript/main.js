
import bulmaCarousel from '../node_modules/bulma-carousel/dist/js/bulma-carousel.js';
import $ from "jquery";

let options = {
    initialSlide: 0,
    navigation:	true, // Display navigation buttons 
    navigationKeys:	true, // Enable navigation with arrow keys
    loop: true,
    infinite: true,
    effect: 'translate', // translate/fade
    duration: 300, // Transition animation duration (in ms)
    timing: 'ease', // Transiation animation type 
    autoplay: false,
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

function closeModal(){ $('div.is-active').removeClass('is-active'); }

$('#item-1-button').click(()=>{ $('#item-1-modal').addClass('is-active') });
$('#item-2-button').click(()=>{ $('#item-2-modal').addClass('is-active') });
$('#item-3-button').click(()=>{ $('#item-3-modal').addClass('is-active') });
$('#item-4-button').click(()=>{ $('#item-4-modal').addClass('is-active') });
$('#item-5-button').click(()=>{ $('#item-5-modal').addClass('is-active') });
$('#item-6-button').click(()=>{ $('#item-6-modal').addClass('is-active') });
$('#item-7-button').click(()=>{ $('#item-7-modal').addClass('is-active') });
$('.modal-background, button.modal-close').click(closeModal);


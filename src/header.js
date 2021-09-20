import { getObserverOptions } from "./utils.js";

const header = document.querySelector('header');
const sectionAboutMe = document.querySelector('section#about-me')
const headingMain = sectionAboutMe.querySelector('.heading-1')
const intro = sectionAboutMe.querySelector('.intro')
const btnScrollTop = document.querySelector('#btn-scroll-to-top');
const targetElems = [headingMain, intro]

function init() {
   targetElems.forEach(elem => elem.classList.add('u-hidden-down'));
   btnScrollTop.classList.add('u-hidden-left');
}

function toggleBtnScrollTop(bool) {
   btnScrollTop.classList[bool ? 'remove' : 'add']('u-hidden-left');
}

function toggleRevealIntro(bool) {
   targetElems.forEach(elem => 
      elem.classList[bool ? 'remove' : 'add']('u-hidden-down'));
}
function handleOberveHeader(entries, observer) {
   const [entry] = entries;
   toggleRevealIntro(!entry.isIntersecting)
   toggleBtnScrollTop(!entry.isIntersecting);
}

init();
const headerObserver = new IntersectionObserver(handleOberveHeader, getObserverOptions(0.5))
headerObserver.observe(header);
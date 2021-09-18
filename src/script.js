import { getObserverOptions, underlineHeading } from "./utils.js";

const sections = document.querySelectorAll('section:not(#about-me)')

function init() {
   sections.forEach(section => section.classList.add('u-hidden-down'))
   document
      .querySelector('#btn-scroll-to-top')
      .addEventListener('click', _ => window.scrollTo(0, 0))   
}
init();

function revealSections(entries, observer) {
   const [entry] = entries;
   const { target, isIntersecting } = entry;

   target.classList[isIntersecting ? 'remove' : 'add']('u-hidden-down')
   underlineHeading(target, isIntersecting)
}

const sectionObserver = new IntersectionObserver(revealSections, getObserverOptions(0.2))
sections.forEach(section => sectionObserver.observe(section));
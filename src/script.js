import './header.js';
import '../sass/main.scss';
import { getObserverOptions, underlineHeading } from './utils.js';
import './projects.js';

const sections = document.querySelectorAll(
   'section:not(#about-me, #myprojects)'
);

function init() {
   sections.forEach(section => section.classList.add('u-hidden-down'));
   document
      .querySelector('#btn-scroll-to-top')
      .addEventListener('click', _ => window.scrollTo(0, 0));
}

function revealSections(entries, observer) {
   const [entry] = entries;
   const { target, isIntersecting } = entry;

   target.classList[isIntersecting ? 'remove' : 'add']('u-hidden-down');
   underlineHeading(target, isIntersecting);
}

init();
const sectionObserver = new IntersectionObserver(
   revealSections,
   getObserverOptions(0.1)
);
sections.forEach(section => sectionObserver.observe(section));

import { getObserverOptions } from './utils.js';

const allProjects = document.querySelectorAll('.project');

function init() {
   allProjects.forEach(project => {
      project
         .querySelector('.project__details')
         .classList.add('project__details--hidden');
      project
         .querySelector('.project__details__actions')
         .classList.add('project__details__actions--hidden');
   });
}

async function loadVideo() {
   console.log('In loadVideo');
   const project = this;
   const projectVideo = project.querySelector('video');
   projectVideo.src = await projectVideo.dataset.src;
}

function revealProject(entries, observer) {
   const [entry] = entries;
   const { target: project, isIntersecting, intersectionRatio } = entry;
   const projectDetails = project.querySelector('.project__details');
   const projectActions = project.querySelector('.project__details__actions');
   const projectVideo = project.querySelector('video');
   const videoLoaded = projectVideo.src.includes(projectVideo.dataset.src);

   if (!videoLoaded) loadVideo.call(project);
   project.classList[isIntersecting ? 'add' : 'remove'](
      'project--tablet-rotated'
   );

   if (!isIntersecting) return;
   if (intersectionRatio >= 0.5) {
      projectDetails.classList.remove('project__details--hidden');
      projectActions.classList.remove('project__details__actions--hidden');
   }
}

init();
const projectObserver = new IntersectionObserver(
   revealProject,
   getObserverOptions(0.02, 0.5)
);
allProjects.forEach(project => projectObserver.observe(project));

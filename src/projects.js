import { getObserverOptions } from "./utils.js";

const allProjects = document.querySelectorAll('.project');

function init() {
   allProjects.forEach(project => {
      project.querySelector('.project__details').classList.add('project__details--hidden');
      project.querySelector('.project__details__actions').classList.add('project__details__actions--hidden')
   })
}

function revealProject(entries, observer) {
   const [entry] = entries;
   const {target: project, isIntersecting} = entry;
   const projectDetails = project.querySelector('.project__details');
   const projectActions = project.querySelector('.project__details__actions')

   project.classList[isIntersecting ? 'add' : 'remove']('project--tablet-rotated')

   if (!isIntersecting) return;
   projectDetails.classList.remove('project__details--hidden')
   projectActions.classList.remove('project__details__actions--hidden');
}

init();
const projectObserver = new IntersectionObserver(revealProject, getObserverOptions(0.5))
allProjects.forEach(project => projectObserver.observe(project))
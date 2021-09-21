export const getObserverOptions = (...threshold) => ({root: null, threshold: [...threshold]})

export const underlineHeading = (section, bool) => {
   section
      .querySelector('h2.heading-2')
      .classList[bool ? 'add' : 'remove']('u-underline')
}
export default ({ app }, inject) => {
  /* Inject $animateComponents in order to show the animation in all the components and pages in which the 
  class hide-animate is defined */
  inject('animateComponents', () => {
    const config = {
      threshold: 0.1,
    }
    const elems = document.getElementsByClassName('hide-animate')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animation-in')
          observer.unobserve(entry.target)
        }
      })
    }, config)
    elems.forEach((elem) => {
      observer.observe(elem)
    })
  })
  /* Inject $scrollToTop in order to scroll to the top of the page */
  inject('scrollToTop', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
  // Methods used for showing and hiding the navbar on small screen's devices
  inject('openNav', () => {
    const navBar = document.getElementById('navSmallScreen')
    console.log(navBar)
    if (navBar.classList.contains('block')) {
      navBar.classList.remove('fade-in')
      setTimeout(() => navBar.classList.remove('block'), 500)
    } else {
      navBar.classList.add('block')
      setTimeout(() => navBar.classList.add('fade-in'))
    }
  })
  // Methods used for showing and hiding the navbar on small screen's devices
  inject('closeNav', () => {
    const navBar = document.getElementById('navSmallScreen')
    navBar.classList.remove('fade-in')
    setTimeout(() => navBar.classList.remove('block'), 500)
  })
}

const documentationNavigationWrapper = document.querySelector('.documentationNavigationWrapper')
const mobileDocsNavOverlay = document.querySelector('#mobileDocsNavOverlay')
const gettingStartedMenu = document.querySelector('#gettingStartedMenu')
const communityMenu = document.querySelector('#gettingStartedMenu')
const mobileNavToggle = document.querySelector('#mobileDocsNavButton')

function toggleMenu() {
  console.log('toggle')
  documentationNavigationWrapper.classList.toggle('--mobileOpenNav')
  mobileDocsNavOverlay.classList.toggle('--showOverlay')
}

function addEventListeners() {
  mobileNavToggle.addEventListener('click', () => toggleMenu())
  mobileDocsNavOverlay.addEventListener('click', () => toggleMenu())
}

addEventListeners()

const mobileSettingsWrapper = document.querySelector('.mobileSettingsWrapper')

function addEventListeners() {
  // searchBar/button
  document.querySelector('#searchBar').addEventListener('click', () => alert('Search bar...'))
  // Mobile settings button
  document
    .querySelector('#mobileSettingsButton')
    .addEventListener('click', () => mobileSettingsWrapper.classList.remove('hidden'))
  document
    .querySelector('.mobileSettingsOverlay')
    .addEventListener('click', () => mobileSettingsWrapper.classList.add('hidden'))
}

function init() {
  addEventListeners()
}

init()

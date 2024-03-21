function initLocalStorage() {
  const localStorage = window.localStorage

  localStorage.setItem('theme', 'darkTheme')
}

function changeTheme() {
  console.log('theme change')
  const localStorage = window.localStorage
  const currentTheme = localStorage.getItem('theme')
  const settingsContainer = document.querySelector('.settings')
  const mobileSetingsContainer = document.querySelector('.mobileThemeSwitcher')

  if (currentTheme === 'darkTheme') {
    localStorage.setItem('theme', 'lightTheme')
    settingsContainer.classList.add('lightTheme')
    settingsContainer.classList.remove('darkTheme')
    mobileSetingsContainer.classList.add('lightTheme')
    mobileSetingsContainer.classList.remove('darkTheme')
  }

  if (currentTheme === 'lightTheme') {
    localStorage.setItem('theme', 'darkTheme')
    settingsContainer.classList.add('darkTheme')
    settingsContainer.classList.remove('lightTheme')
    mobileSetingsContainer.classList.add('darkTheme')
    mobileSetingsContainer.classList.remove('lightTheme')
  }
}

function toggleMobileNav() {
  const mobileSettingsContainer = document.querySelector('.mobileSettingsContainer')
  mobileSettingsContainer.classList.toggle('hidden')
}

function addEventListeners() {
  console.log(document.querySelector('#darkThemeSwitcher'))
  // searchBar/button
  document.querySelector('#searchBar').addEventListener('click', () => alert('Search bar...'))
  // settings - theme switchers
  document.querySelector('#darkThemeSwitcher').addEventListener('click', () => changeTheme())
  document.querySelector('#lightThemeSwitcher').addEventListener('click', () => changeTheme())
  document.querySelector('#mobileDarkThemeSwitcher').addEventListener('click', () => changeTheme())
  document.querySelector('#mobileLightThemeSwitcher').addEventListener('click', () => changeTheme())
  // settings - mobile settings
  document.querySelector('#mobileSettingsButton').addEventListener('click', () => toggleMobileNav())

  document
    .querySelector('.mobileSettingsContainer')
    .addEventListener('click', () => toggleMobileNav())
}

function init() {
  initLocalStorage()
  addEventListeners()
}

init()

function initLocalStorage() {
  const localStorage = window.localStorage

  localStorage.setItem('theme', 'darkTheme')
}

function changeTheme(theme) {
  const localStorage = window.localStorage
  const settingsContainer = document.querySelector('.settings')

  localStorage.setItem('theme', theme)

  if (theme === 'darkTheme') {
    settingsContainer.classList.remove('lightTheme')
  }

  if (theme === 'lightTheme') {
    settingsContainer.classList.remove('darkTheme')
  }

  settingsContainer.classList.add(theme)
}

function addEventListeners() {
  // searchBar/button
  document.querySelector('#searchBar').addEventListener('click', () => alert('Search bar...'))
  // theme switchers
  document
    .querySelector('#darkThemeSwitcher')
    .addEventListener('click', () => changeTheme('lightTheme'))
  document
    .querySelector('#lightThemeSwitcher')
    .addEventListener('click', () => changeTheme('darkTheme'))
}

function init() {
  initLocalStorage()
  addEventListeners()
}

init()

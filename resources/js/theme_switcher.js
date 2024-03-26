const localStorage = window.localStorage
const darkModeSwitches = document.querySelectorAll('#darkModeSwitch')
const darkModeSwitchButtons = document.querySelectorAll('#darkModeSwitchButton')

function setDarkMode(darkModeOn) {
  console.log('called with', darkModeOn)
  if (darkModeOn === true) {
    localStorage.setItem('darkMode', true)
    darkModeSwitches.forEach((darkmodeSwitch) => {
      darkmodeSwitch.checked = true
    })
  }

  if (darkModeOn === false) {
    localStorage.setItem('darkMode', false)
    darkModeSwitches.forEach((darkmodeSwitch) => {
      darkmodeSwitch.checked = false
    })
  }
}

const handleThemeSwitch = function () {
  darkModeSwitches.forEach((themeSwitch) => {
    themeSwitch.toggleAttribute('checked')
    localStorage.setItem('darkMode', themeSwitch.checked)
  })
}

function initTheme() {
  // Check if theme is already saved, if so, set it as default
  const darkModeOn = localStorage.getItem('darkMode')

  if (darkModeOn === 'false') {
    darkModeSwitches.forEach((themeSwitch) => {
      themeSwitch.toggleAttribute('checked')
    })
  }
}

function initEventListeners() {
  darkModeSwitchButtons.forEach((button) => {
    button.addEventListener('click', () => handleThemeSwitch())
  })
}

function init() {
  initEventListeners()
  initTheme()
}

init()

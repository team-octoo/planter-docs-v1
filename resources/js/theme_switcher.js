const localStorage = window.localStorage
const darkModeSwitches = document.querySelectorAll('#darkModeSwitch')
const darkModeSwitchButtons = document.querySelectorAll('#darkModeSwitchButton')

const list = document.querySelectorAll('#darkModeSwitchButton')

const handleThemeSwitch = function () {
  const darkMode = localStorage.getItem('darkMode')
  if (darkMode === 'true') {
    localStorage.setItem('darkMode', false)
    darkModeSwitches.forEach((darkmodeSwitch) => {
      darkmodeSwitch.checked = false
    })
  } else {
    localStorage.setItem('darkMode', true)
    darkModeSwitches.forEach((darkmodeSwitch) => {
      darkmodeSwitch.checked = true
    })
  }
}

// function initTheme() {
//   localStorage.setItem('darkMode', false)
// }

function initEventListeners() {
  darkModeSwitchButtons.forEach((button) => {
    button.addEventListener('click', () => handleThemeSwitch())
  })
}

function init() {
  // initTheme()
  initEventListeners()
}

init()

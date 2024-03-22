const gettingStartedMenu = document.querySelector('#gettingStartedMenu')
const communityMenu = document.querySelector('#gettingStartedMenu')

if (window.location.href.includes('docs')) {
  gettingStartedMenu.open = true
}

if (window.location.href.includes('community')) {
  communityMenu.open = true
}

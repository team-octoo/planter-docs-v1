const titles = document.querySelectorAll('h2, h3')
const scrollNavigationList = document.querySelector('.scrollNavigationList')
const pageNavigationContainer = document.querySelector('.pageNavigationContainer')

function getNavItem(navItems) {
  const itemArray = navItems.map(
    (item) => `<li><a href="${item.slug}" class="scrollNavItem">${item.label}</a></li>`
  )

  return itemArray.toString().split(',').join('')
}

function getPageNav(pageTitles) {
  const titleArr = []
  pageTitles.forEach((title) => {
    if (title.id) {
      titleArr.push({
        label: title.innerText,
        slug: '#' + title.id,
      })
    }
  })

  if (titleArr.length > 0) {
    scrollNavigationList.innerHTML = `
      <ul>
        ${getNavItem(titleArr)}
      </ul>
    `
  } else {
    pageNavigationContainer.innerHTML = ''
  }
}

getPageNav(titles)

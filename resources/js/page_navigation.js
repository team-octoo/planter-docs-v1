const titles = document.querySelectorAll('h2, h3')
const scrollNavigationList = document.querySelector('.scrollNavigationList')

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

  scrollNavigationList.innerHTML = `
    <ul>
      ${getNavItem(titleArr)}
    </ul>
  `
}

getPageNav(titles)

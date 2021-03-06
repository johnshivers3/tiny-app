Window.addEventListener('DomContentLoaded', ()=> {
  const appLink = document.getElementById('app-link')
  const blogLink = document.getElementById('blog-link')
  const storeLink = document.getElementById('store-link')
  const gameLink = document.getElementById('game-link')
  const noteLink = document.getElementById('note-link')
  const tinyPage = document.getElementById('tiny-page')

  const navLinks = [appLink, blogLink, storeLink, gameLink, noteLink]

  navLinks.forEach(link => link.addEventListener('click', () => {
    tinyPage.innerText = `${link.id}`
  }))
})

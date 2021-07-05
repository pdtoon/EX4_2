import book from './books.json'

import './main.css'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('cards')
    const aboutbook = book.data
    console.log(book);

    aboutbook.forEach(bookn => {
        let cardDOM = buildCardDOM(bookn)
        cards.insertAdjacentHTML('beforeend', cardDOM) 
      })
})
function buildCardDOM(bookn) {
    return (
        `<div class="roombook">
            <img src="${book.image_base_url.concat(`${bookn.ImageURL}`)}" alt="#">
            <h1>${bookn.Title}</h1>
            <h2>${bookn.Authors}</h2>
            <h3>${bookn.Format}</h3>
        </div>`
    )
}
// image_base_url: "https://images.bwbcovers.com/"
// Title: "I Am Watching You"
// Authors: ["Teresa Driscoll"]
// Format: "Paperback"
// ImageURL: "154/9781542046596.jpg"
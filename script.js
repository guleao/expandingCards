const cards = document.querySelectorAll('.card')
const txts = document.querySelectorAll('.txt')

cards.forEach(card => {
        card.addEventListener('click', () => {
            removeActiveClass()
            card.classList.add('active')
        })
})

function removeActiveClass () {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}


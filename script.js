addEventListener('DOMContentLoaded', () => {
    const question1 = document.querySelector('.question1')
    const question2 = document.querySelector('.question2')
    const gif = document.querySelector('.gif')
    const yesButton = document.querySelector('.yes')
    const noButton = document.querySelector('.no')

    yesButton.addEventListener('click', () => {
        question1.innerHTML = "yayy love u gwygwy"
        question2.innerHTML = "mwamwa"
        gif.src = "img/gif.webp";
    });


    noButton.addEventListener('mouseover', () => {
        const noButtonRect = noButton.getBoundingClientRect()
        const maxX = window.innerWidth - noButtonRect.width
        const maxY = window.innerHeight - noButtonRect.height

        const randomX = Math.floor(Math.random() * maxX)
        const randomY = Math.floor(Math.random() * maxY)

        noButton.style.left = randomX + "px"
        noButton.style.top = randomY + "px"
    });


    console.log("Project Loaded!")
})
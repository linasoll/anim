const button = document.querySelector(".button")
const container = document.querySelector(".container")

button.addEventListener("click", (e) => {
    e.preventDefault()
    container.classList.toggle("active")
})
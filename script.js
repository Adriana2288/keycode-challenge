const number = document.querySelector("#number")
const key = document.querySelector("#key")
const code = document.querySelector("#code")
const which = document.querySelector("#which")
const restart = document.querySelector("h3")


window.addEventListener("keydown", (event) => {
    number.textContent = event.key
    key.textContent = event.key
    code.textContent = event.code
    which.textContent = event.which
})

restart.addEventListener("click", () => {
    if (number.textContent != "" && key.textContent != "" && code.textContent != "" && which.textContent != "") {
        number.textContent = ""
        key.textContent = ""
        code.textContent = ""
        which.textContent = ""
    }
})
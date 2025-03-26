 
const login = document.getElementById("login")
const closeBtn = document.querySelector(".close")
const openBtn = document.getElementById("loginPageBtn")
const blur = document.getElementById("blur")

openBtn.addEventListener("click", () => {
    login.style.display = "block"
    openBtn.style.display = "none"
    blur.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    login.style.display = "none"
    openBtn.style.display = "block"
    blur.style.display = "none"
})

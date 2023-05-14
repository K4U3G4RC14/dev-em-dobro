const btn = document.getElementById("theme-change")
const body = document.querySelector("body")
const img_btn = document.querySelector(".image-button")

btn.addEventListener("click", () => {
    const check_dark_mode = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode")

    if (check_dark_mode) {
        
        img_btn.setAttribute("src", "./src/image/sun.png")
    } else {
    
        img_btn.setAttribute("src", "./src/image/moon.png")
    }
})



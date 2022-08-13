const toggle = document.querySelector(".toggle")
const navegacion = document.querySelector(".navegacion")

toggle.addEventListener("click", () => {
    navegacion.classList.toggle(".navegacion_visible");
})

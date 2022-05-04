function recomecarJogo() {
    window.location.href = "../index.html"
}
let restart = document.getElementById("restart")
restart.addEventListener("click", recomecarJogo)
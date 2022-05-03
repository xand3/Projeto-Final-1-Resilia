function recomecarJogo() {
    window.location.href = "../HTML/index.html"
}
let restart = document.getElementById("restart")
restart.addEventListener("click", recomecarJogo)
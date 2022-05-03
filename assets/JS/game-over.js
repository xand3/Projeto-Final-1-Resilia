function gameOver() {
    window.location.href = "../HTML/game-over.html"
}
let lose = document.getElementById("game-over")
lose.addEventListener("click", gameOver)

function continuarJogo() {
    window.location.href = "../HTML/pick-character.html"
}

let continuar = document.getElementById("continue")
continuar.addEventListener("click", continuarJogo)
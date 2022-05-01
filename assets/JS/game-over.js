function gameOver() {
    window.location.href = "../HTML/game-over.html"
}

lose = document.getElementById("game-over")
lose.addEventListener("click", gameOver)
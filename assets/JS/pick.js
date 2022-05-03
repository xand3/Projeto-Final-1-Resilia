function leeEscolhido() {
    window.location.href = "../HTML/lee-level1.html"
}
function eveEscolhido() {
    window.location.href = "../HTML/eve-level1.html"
}
function regEscolhido() {
    window.location.href = "../HTML/reg-level1.html"
}

let lee = document.getElementById("lee")
lee.addEventListener("click", leeEscolhido)

let eve = document.getElementById("eve")
eve.addEventListener("click", eveEscolhido)

let reg = document.getElementById("reg")
reg.addEventListener("click", regEscolhido)

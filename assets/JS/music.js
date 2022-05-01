import {gameOver} from '../JS/game-over.js'
function desligarMusica() {
    let choose;
    while(choose != 1 && choose != 2) {
        choose = prompt(`Deseja Desligar a música? 
        SIM: 1
        NÃO: 2`)
    } 
    if(choose == 2) {
        gameOver
    }
}
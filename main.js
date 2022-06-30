import tabuleiro from './dados/dados.js'
import {Exibir_tabuleiro, Verifica_vencedor, Realizar_jogada} from './funcoes/funcoes.js'

console.log("\n      JOGO DA VELHA! \n")
let jogador = 1
let jogada = 0

while((Verifica_vencedor(tabuleiro) == false) && jogada < 9){
        jogador = Realizar_jogada(jogador, tabuleiro)
        console.log("\n       Tabuleiro: \n")
        Exibir_tabuleiro(tabuleiro)
        console.log("\n")
        jogada ++
}
if (jogada == 9 && (Verifica_vencedor(tabuleiro) == false)){
    console.log("Empate!")
}
else if (jogador == 2 ){
    console.log("O jogador 1 saiu VITORIOSO!!!")
}else{
    console.log("O jogador 2 saiu VITORIOSO!!!")
}

console.log("\nO JOGO ACABOU")
    
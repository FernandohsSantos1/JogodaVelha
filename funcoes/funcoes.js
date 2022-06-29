import read from 'readline-sync'

const Exibir_tabuleiro = (tabuleiro) => {
    for (let i = 0; i < 3 ; i++){
        
        console.log("          "+tabuleiro[i][0]+"|"+tabuleiro[i][1]+"|"+tabuleiro[i][2])
    }
}
const Verfica_diagonal = (tabuleiro) =>{
    if(tabuleiro[0][0]+tabuleiro[1][1]+tabuleiro[2][2] == "XXX" || 
    tabuleiro[0][0]+tabuleiro[1][1]+tabuleiro[2][2] == "OOO" ||
    tabuleiro[0][2]+tabuleiro[1][1]+tabuleiro[2][0] == "XXX" ||
    tabuleiro[0][2]+tabuleiro[1][1]+tabuleiro[2][0] == "OOO"){
        return true
    } else {
        return false
    }
}
const Verfica_linha = (tabuleiro) =>{
    if(tabuleiro[0][0]+tabuleiro[0][1]+tabuleiro[0][2] == "XXX" || 
       tabuleiro[0][0]+tabuleiro[0][1]+tabuleiro[0][2] == "OOO" ||
       tabuleiro[1][0]+tabuleiro[1][1]+tabuleiro[1][2] == "XXX" ||
       tabuleiro[1][0]+tabuleiro[1][1]+tabuleiro[1][2] == "OOO" ||
       tabuleiro[2][0]+tabuleiro[2][1]+tabuleiro[2][2] == "XXX" ||
       tabuleiro[2][0]+tabuleiro[2][1]+tabuleiro[2][2] == "OOO"   ){
        return true
    } else {
        return false
    }
}
const Verfica_coluna = (tabuleiro) =>{
    if(tabuleiro[0][0]+tabuleiro[1][0]+tabuleiro[2][0] == "XXX" || 
       tabuleiro[0][0]+tabuleiro[1][0]+tabuleiro[2][0] == "OOO" ||
       tabuleiro[0][1]+tabuleiro[1][1]+tabuleiro[2][1] == "XXX" ||
       tabuleiro[0][1]+tabuleiro[1][1]+tabuleiro[2][1] == "OOO" ||
       tabuleiro[0][2]+tabuleiro[1][2]+tabuleiro[2][2] == "XXX" ||
       tabuleiro[0][2]+tabuleiro[1][2]+tabuleiro[2][2] == "OOO"   ){
        return true
    } else {
        return false
    }
}
const Realizar_jogada = (jogador, matriz) =>{
    console.log("Vez do: "+ jogador+" Jogador\n")
    let linha = Number(read.question("Digite a linha da jogada: "))
    let coluna = Number(read.question("Digite a coluna da jogada: "))
    while(matriz[linha][coluna] != " " || 2 < coluna < 0 || 2 < linha < 0){
        console.log("Jogada Inválida! Tente outro campo: ")
        linha = Number(read.question("Digite a linha da jogada: "))
        coluna = Number(read.question("Digite a coluna da jogada: "))
    }
    if (jogador == 1){
        matriz[linha][coluna] = "X"
        return jogador = jogador + 1
    }else{
        matriz[linha][coluna] = "O"
        return jogador = jogador - 1
    }
}

export {Exibir_tabuleiro, Verfica_diagonal, Verfica_linha, Verfica_coluna, Realizar_jogada};
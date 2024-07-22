let nomeHeroi = "Guts"
let quantidadeExperiencie = 5500
let nivelHeroi = "Sem Nível"

const CLASSE_HEROI = [
    [1000, "Ferro"],
    [2000, "Bronze"],
    [5000, "Prata"],
    [7000, "Ouro"],
    [8000, "Platina"],
    [9000, "Ascendente"],
    [10000, "Imortal"],
]

const CLASSE_MAXIMA_HEROI = "Radiante"

if(quantidadeExperiencie < CLASSE_HEROI[0][0]){
    nivelHeroi = CLASSE_HEROI[0][1]
} else if(quantidadeExperiencie < CLASSE_HEROI[1][0]){
    nivelHeroi = CLASSE_HEROI[1][1]
} else if(quantidadeExperiencie < CLASSE_HEROI[2][0]){
    nivelHeroi = CLASSE_HEROI[2][1]
} else if(quantidadeExperiencie < CLASSE_HEROI[3][0]){
    nivelHeroi = CLASSE_HEROI[3][1]
} else if(quantidadeExperiencie < CLASSE_HEROI[4][0]){
    nivelHeroi = CLASSE_HEROI[4][1]
} else if(quantidadeExperiencie < CLASSE_HEROI[5][0]){
    nivelHeroi = CLASSE_HEROI[5][1]
} else if(quantidadeExperiencie < CLASSE_HEROI[6][0]){
    nivelHeroi = CLASSE_HEROI[6][1]
} else {
    nivelHeroi = CLASSE_MAXIMA_HEROI
}

console.log("O Heroi de nome:", nomeHeroi, "está no nível de:", nivelHeroi)
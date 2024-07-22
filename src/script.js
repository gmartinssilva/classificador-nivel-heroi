let nomeHeroi = "Guts"
let quantidadeExperiencie = 4000
let nivelHeroi = "Sem Nível"

if(quantidadeExperiencie < 1000){
    nivelHeroi = "Ferro"
} else if(quantidadeExperiencie < 2000){
        nivelHeroi = "Bronze"
} else if(quantidadeExperiencie < 5000){
    nivelHeroi = "Prata"
} else if(quantidadeExperiencie < 7000){
    nivelHeroi = "Ouro"
} else if(quantidadeExperiencie < 8000){
    nivelHeroi = "Platina"
} else if(quantidadeExperiencie < 9000){
    nivelHeroi = "Ascendnete"
} else if(quantidadeExperiencie < 10000){
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log("O Heroi de nome:", nomeHeroi, "está no nível de:", nivelHeroi)
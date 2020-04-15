let spaceshipName = prompt("Qual o nome da Nave?")
let choosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não \n\nDigite o número correspondente a opção escolhida")
let spaceFold

if(choosenOption == "1") {
    spaceFold += 1
    while(choosenOption === "1") {
        prompt("Deseja realizar a próxima dobra? \n1- Sim \n2- Não")
        spaceFold += 1
    }
} else {
    alert("Nome da nave: " + spaceshipName + "\nNúmero de dobras realizadas: " + spaceFold)
}







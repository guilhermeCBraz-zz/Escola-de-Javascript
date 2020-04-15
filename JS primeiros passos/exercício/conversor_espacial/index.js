let distanceInLY = prompt("Digite a distância em anos-luz")

let choosenOption = prompt("Para qual unidade deseja converter?\n1. Parsec(pc)\n2. Unidade Astrônomica(AU)\n3. Quilômetros(km)\n\n" + "Digite o número da opção desejada")

let choosenUnity 
let convertedDistance

switch(choosenOption) { 
    case "1":
        choosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
    break
    case "2":
        choosenUnity = "Unidade Astrônomica"
        convertedDistance = distanceInLY * 63241.
    break
    case "3":
        choosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
    break
    default:
        choosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora de escopo"
}

alert("Distância em Anos-luz: " + distanceInLY + "\n" + choosenUnity + ": " + convertedDistance)
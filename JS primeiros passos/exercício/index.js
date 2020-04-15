let oldName = prompt("Qual o nome da pessoa mais velha?")
let oldAge = prompt("Qual a idade da pessoa mais velha?")

let newName = prompt("Qual o nome da pessoa mais nova?")
let newAge = prompt("Qual a idade da pessoa mais nova?")

let ageSubtration = oldAge - newAge

alert ("A pessoa mais velha se chama " + oldName + " e sua idade é " + oldAge)
alert("A pessoa mais nova se chama " + newName + " e sua idade é " + newAge)
alert("A diferença de idade entre " + oldName +  " e " + newName + " é de " + ageSubtration + " anos")
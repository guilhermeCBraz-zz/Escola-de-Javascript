let pilotName = prompt("Piloto, qual o seu nome?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar a nave?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma  boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto " + pilotName + ", a velocidade atual da nave é de " + velocity + "km/s")

function newFunction() {
    return "Estamos acelerando para "
}

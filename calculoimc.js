function calcularIMC(){

    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let imc = peso / (altura * altura)
    let classifi = ""
    if (imc < 18.5) {
        classifi = "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 24.9) {
        classifi = "Peso normal"
    } else if (imc >= 25 && imc < 29.9) {
        classifi = "Sobrepeso"
    } else if (imc >= 30 && imc < 34.9) {
        classifi = "Obesidade grau 1"
    } else if (imc >= 35 && imc < 39.9) {
        classifi = "Obesidade grau 2"
    } else {
        classifi = "Obesidade grau 3"
    }
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2)
    document.getElementById("classifi").textContent = "Classificação: " + classifi

    console.log(imc)
    console.log(peso)
    console.log(altura)
    console.log(classifi)
}

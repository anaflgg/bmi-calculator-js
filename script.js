function calcularIMC() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let imc = peso / (altura * altura)

    console.log(imc)

    if (imc <= 18.5) {
        document.getElementById('resultado').innerHTML = "Abaixo do peso"
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('resultado').innerHTML = "Peso normal"
    }

    else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('resultado').innerHTML = "Sobrepeso"
    }

    else if (imc >= 30) {
        document.getElementById('resultado').innerHTML = "Obesidade"
    }
}
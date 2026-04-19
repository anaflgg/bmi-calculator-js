function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)

    if (altura > 3) {
        altura = altura / 100
    }

    if (!peso || !altura || altura <= 0) {
        alert('Preencha peso e altura corretamente.')
        return
    }

    let imc = peso / (altura * altura)
    let emoji, categoria, classe

    if (imc < 18.5) {
        emoji = '🥗'
        categoria = 'abaixo do peso ideal'
        classe = 'abaixo-peso'
    } else if (imc < 25) {
        emoji = '💚'
        categoria = 'com o peso ideal'
        classe = 'peso-normal'
    } else if (imc < 30) {
        emoji = '⚠️'
        categoria = 'com sobrepeso'
        classe = 'sobrepeso'
    } else {
        emoji = '🔴'
        categoria = 'com obesidade'
        classe = 'obesidade'
    }

    document.getElementById('modal-emoji').textContent = emoji
    document.getElementById('modal-imc').textContent = 'Seu IMC é ' + imc.toFixed(1)

    document.getElementById('modal-resultado').textContent = 'então você está ' + categoria

    let box = document.querySelector('.modal-box')
    
    box.className = 'modal-box ' + classe

    document.getElementById('modal-overlay').classList.add('aberto')
}

function fecharModal() {
    document.getElementById('modal-overlay').classList.remove('aberto')
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target == this) fecharModal()
})


function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}  

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if  (0 >= quantidade) {
        alert('Não é possível continuar compra, ingressos desse tipo estão esgotados.');
    } else if (quantidade > qtdPista) {
        alert('Não é possível continuar compra, ingressos desse tipo estão esgotados.');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada. Ingressos disponíveis');
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if  (0 >= quantidade) {
        alert('Não é possível continuar compra, ingressos desse tipo estão esgotados.');
    } else if (quantidade > qtdSuperior) {
        alert('Não é possível continuar compra, ingressos desse tipo estão esgotados.');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada. Ingressos disponíveis');
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if  (0 >= quantidade) {
        alert('Não é possível continuar compra, ingressos desse tipo estão esgotados.');
    } else if (quantidade > qtdInferior) {
        alert('Não é possível continuar compra, ingressos desse tipo estão esgotados.');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada. Ingressos disponíveis');
    }
}
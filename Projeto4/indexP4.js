
function calculosDiversos() {
    let distanciaTotal = parseFloat(document.getElementById('distanciaTotal').value);
    let combustivel = parseFloat(document.getElementById('combustivel').value);

    if (!distanciaTotal) {
        alert('Preencha o primeiro número');
        return;
    }

    if (combustivel == '') {
        alert('Preencha o segundo número');
        return;
    }
    function gastoDeCombustivel(a, b) {
        return a/b;
    }

    document.getElementById('resultado').innerHTML = `${gastoDeCombustivel(distanciaTotal, combustivel)} KM/L`;
}
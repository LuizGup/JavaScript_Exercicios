
function aluno() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    [valor1, valor2] = [valor2, valor1];

    document.getElementById('resultado').innerHTML = ` Valor 1 = ${valor1} <br> Valor 2 = ${valor2}`

}
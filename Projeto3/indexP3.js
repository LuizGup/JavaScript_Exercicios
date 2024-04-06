function soma() {
    let numeroA = parseInt(document.getElementById('numeroA').value);
    let numeroB = parseInt(document.getElementById('numeroB').value);

    if (!numeroA) {
        alert('Preencha o primeiro número');
        return;
    }

    if (numeroB == '') {
        alert('Preencha o segundo número');
        return;
    }
    function somar(a, b) {
        return a + b;
    }
    function subtrair(a, b) {
        return a - b;
    }
    function multiplicar(a, b) {
        return a * b;
    }
    function dividir(a, b) {
        return a / b;
    }

    document.getElementById('resultado').innerHTML = `<br> Sua soma deu ${somar(numeroA, numeroB)}<br> Sua subtração deu ${subtrair(numeroA, numeroB)}<br> A multiplicação deu ${multiplicar(numeroA, numeroB)}<br> A divisão deu ${dividir(numeroA, numeroB)}`

}
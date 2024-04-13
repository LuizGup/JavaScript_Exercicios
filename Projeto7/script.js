
function aluno() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML = `${nomeDoAluno}, olá! Sua nota da prova 1 é ${nota1}, da prova 2 é ${nota2} e da prova 3 é ${nota3} <br><br> Sua média é ${dividir(somar(nota1, nota2, nota3), 3)}`

}
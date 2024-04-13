
function vendedor() {
    let nomeFuncionario = document.getElementById('nomeFuncionario').value;
    let salario = parseFloat(document.getElementById('salario').value);
    let vendas = parseFloat(document.getElementById('vendas').value);

    if (!nomeFuncionario) {
        alert('Preencha o nome');
        return;
    }
    if (!salario) {
        alert('Preencha o primeiro número');
        return;
    }

    if (vendas == '') {
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
    function br(a){
        return a.toLocateString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    document.getElementById('resultado').innerHTML = `O nome do Funcionário é ${nomeFuncionario}, o seu salario fixo é ${salario}, o seu salario final é ${br(somar(salario, multiplicar(vendas, 0.15)))}`

}
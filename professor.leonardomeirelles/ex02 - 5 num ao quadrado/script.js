var section = document.getElementById(`sectionResultado`);
var divResultado = document.createElement(`div`);
divResultado.setAttribute(`id`, `divResultado`);
function elevarQuadrado(n, p) {
    return (n[p] * n[p]);
}
function foco(){
    var input = document.getElementById(`numId_1`);
    input.focus();
}
function cleanAll() {
    cleanDivResultado();
    for (var i = 1; 5 >= i; i++) {
        var inputNum = document.getElementById(`numId_${i}`);
        inputNum.value = ``;
    }
}
function cleanDivResultado(){
    divResultado.innerHTML = ``;
}
function calcular() {
    divResultado.innerHTML = ``;
    var arrayNum = [];
    for (var i = 1; 5 >= i; i++) {
        var inputNum = Number(document.getElementById(`numId_${i}`).value);
        arrayNum.push(inputNum);
    }
    var pResultado = document.createElement(`p`);
    pResultado.setAttribute(`id`, `pResultado`);
    pResultado.innerHTML = `O quadrado dos números inseridos é: 
    <br><br> 1º = ${elevarQuadrado(arrayNum, 0)} 
    <br><br> 2º = ${elevarQuadrado(arrayNum, 1)}
    <br><br> 3º = ${elevarQuadrado(arrayNum, 2)}
    <br><br> 4º = ${elevarQuadrado(arrayNum, 3)}
    <br><br> 5º = ${elevarQuadrado(arrayNum, 4)}`;
    var limpar = document.createElement(`input`);
    limpar.setAttribute(`type`,`button`);
    limpar.setAttribute(`id`, `limpar`);
    limpar.setAttribute(`value`, `Limpar`);
    limpar.setAttribute(`class`, `inputButton`)
    limpar.setAttribute(`onclick`, `cleanAll()`);
    divResultado.appendChild(pResultado);
    divResultado.appendChild(limpar);
    section.appendChild(divResultado);
}


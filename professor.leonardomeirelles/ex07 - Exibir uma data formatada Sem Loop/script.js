// - - - - - - - | Criar elementos HTML | - - - - - - - // ✔️
var section = document.getElementById(`section`);
var hr = document.createElement(`hr`);
var pResultado = document.createElement(`p`);
pResultado.setAttribute(`id`, `pResultado`);
var divResultado = document.createElement(`div`);
divResultado.setAttribute(`id`, `divResultado`);
var buttonLimpar = document.createElement(`input`);
buttonLimpar.setAttribute(`value`, `Limpar`);
buttonLimpar.setAttribute(`id`, `buttonLimpar`);
buttonLimpar.setAttribute(`class`, `inputButton`);
buttonLimpar.setAttribute(`type`, `button`);
buttonLimpar.setAttribute(`onclick`, `limpar('divResultado')`);
buttonLimpar.setAttribute(`onmouseover`, `mouseOver('buttonLimpar')`);
buttonLimpar.setAttribute(`onmouseleave`, `mouseLeave('buttonLimpar')`);

function mouseOver(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.style.borderColor = 'slateGrey';
}
function mouseLeave(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.style.borderColor = 'honeydew';
}

function carregarPagina(elementId){
    var elemento = document.getElementById(`${elementId}`);
    elemento.focus();
}
function preenchendo(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    var elementoValue = elemento.value;
    var caractere = ``;
    if (elementoValue[2] == `d`) {
        caractere = elementoValue[0];
        elemento.value = caractere;
    } else if (elementoValue[14] != `` && elementoValue[13] == `a`) {
        caractere = elementoValue[10];
        elemento.value = caractere;
    }
    elemento.style.color = `black`;
    limparDivResultado();
}

function validarInput(input, data) {
    var numPossiveis = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    if (input == ``) {
        window.alert(`ERRO, nada foi inserido!`);
        foco(`inputData`);
        return false;
    }
    if (data[0] == `` || data[1] == `` || data[2] == ``) {
        window.alert(`ERRO, estão faltando dados!`);
        foco(`inputData`);
        return false;
    }
    if (data[0] * 0 != 0 || data[1] * 0 != 0 || data[2] * 0 != 0) {
        window.alert(`ERRO, dados foram inseridos incorretamente!`);
        foco(`inputData`);
        return false;
    }
    if ((data[0].length > 2) || (data[1].length > 2) || (data[2].length < 4)) {
        window.alert(`ERRO, os dados foram inseridos incorretamente!`);
        foco(`inputData`);
        return false;
    }    
    return true;
}
function limpar(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.innerHTML = ``;
    limparDivResultado();
    foco(`inputData`);
}
function limparDivResultado(){
    divResultado.innerHTML = ``;
}
function foco(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.value = ``
    elemento.focus();
}
function separarData(input) {
    input = input.split(`/`);
    var dia = Number(input[0]);
    var mes = Number(input[1]);
    var ano = Number(input[2]);
    return [dia, mes, ano]
}

function exibir() {
    // - - - - - - - | Salvar input | - - - - - - - // ✔️
    var inputData = document.getElementById(`inputData`);
    var inputDataValue = inputData.value;

    // - - - - - - - | Salvar dd / mm / aaaa | - - - - - - - // ✔️
    var data = separarData(inputDataValue);

    // - - - - - - - | Válidar input | - - - - - - - // ✔️
    if (validarInput(inputDataValue, data)) {
        // - - - - - - - | Mostrar elementos HTML | - - - - - - - // ✔️
        pResultado.innerHTML = `Dia: ${data[0]}<br><br>Mês: ${data[1]}<br><br>Ano: ${data[2]}`;
        divResultado.appendChild(hr);
        divResultado.appendChild(pResultado);
        divResultado.appendChild(buttonLimpar);
        section.appendChild(divResultado);
    }
}
// A proposta do exercicio era produzir o código sem usar nenhum laço de repetição.
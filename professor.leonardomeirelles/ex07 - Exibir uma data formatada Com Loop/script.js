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
buttonLimpar.setAttribute(`onclick`, `limpar('inputData','divResultado')`);
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
function separarData(inputDataValue) {
    var data = inputDataValue.split(`/`);
    if(data.length < 2){
        window.alert(`ERRO, insira uma data válida!`);
        limparValue(`inputData`);
        foco(`inputData`);
    }
    return data;
}
function foco(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.focus();
}
function preenchendo(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    var elementoValue = elemento.value;
    var caractere;
    if(elementoValue[2] == `d`){
        caractere = elementoValue[0];
        elemento.value = caractere;
    } else if(elementoValue[14] != `` && elementoValue[13] == `a`){
        caractere = elementoValue[14];
        elemento.value = caractere;
    }
    elemento.style.color = `black`;
    limparElemento(`divResultado`);
}
function limparElemento(elementId){
    var elemento = document.getElementById(`${elementId}`);
    elemento.innerHTML = ``;
}
function limparValue(elementId){
    var elemento = document.getElementById(`${elementId}`);
    elemento.value = ``;
}
function limpar(inputId,elementId){
    limparValue(`${inputId}`);
    limparElemento(`${elementId}`);
    foco(`${inputId}`);
}
function validarInput(inputDataValue, data) {
    var caracteresPossiveis = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `/`];
    // - | Limitar max e min de dias (0 a 31), meses (1 a 12) e anos (maior que 0, e com mais de 3 digitos) | - // ✔️
    if (data[0] <= 0 || data[0] > 31 || data[1] <= 0 || data[1] > 12 || data[2] <= 0 || data[2].length < 4) {
        window.alert(`ERRO, a data não é válida!`);
        limparValue(`inputData`);
        foco(`inputData`);
        return false;
    }
    for (var i in inputDataValue) {
        if (caracteresPossiveis.indexOf(inputDataValue[i]) == -1) {
            window.alert(`ERRO, insira caracteres válidos!`);
            limparValue(`inputData`);
            foco(`inputData`);
            return false;
        }
    }
    return true;
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
        pResultado.innerHTML = `Dia: ${Number(data[0])}<br><br>Mês: ${Number(data[1])}<br><br>Ano: ${Number(data[2])}`;
        divResultado.appendChild(hr);
        divResultado.appendChild(pResultado);
        divResultado.appendChild(buttonLimpar);
        section.appendChild(divResultado);
    }
}
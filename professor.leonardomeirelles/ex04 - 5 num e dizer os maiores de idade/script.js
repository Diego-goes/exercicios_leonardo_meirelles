// - - - - - - - - Criando Elementos HTML - - - - - - - - // ✔️
// - - Section - - //
var section = document.getElementById(`sectionResultado`);
// - - Div que exibe o reultado - - //
var divResultado = document.createElement(`div`);
divResultado.setAttribute(`id`, `divResultado`);

// - - Linha onde vai exibir o resultado - - //
var pResultado = document.createElement(`p`);
pResultado.setAttribute(`id`, `pRsultado`);
// - - Botão de Limpar - - //
var limparButton = document.createElement(`input`);
limparButton.setAttribute(`id`, `limpar`);
limparButton.setAttribute(`value`, `Limpar`);
limparButton.setAttribute(`type`, `button`);
limparButton.setAttribute(`class`, `inputButton`);
limparButton.setAttribute(`onclick`, `limpar()`);

function foco() {
    var input = document.getElementById(`inputIdades`);
    input.value = ``;
    input.focus();
}
function limpar() {
    divResultado.innerHTML = ``;
    foco();
}
function limparDiv() {
    divResultado.innerHTML = ``;
}
function arrayStringToNum(arrayString) {
    var possibleNumbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
    var arrayNum = [];
    var numEntreVirgulas = [];
    for (var i in arrayString) {
        if (arrayString[i] == possibleNumbers.indexOf(arrayString[i])) {
            numEntreVirgulas += arrayString[i];
        } else if (arrayString[i] == `;`) {
            arrayNum.push(Number(numEntreVirgulas));
            numEntreVirgulas = [];
        }
        if (arrayString.length == (Number(i) + 1)) {
            arrayNum.push(Number(numEntreVirgulas));
        }
    }
    return arrayNum;
}
function separarDeMaior(arrayNum) {
    console.log(`Separar de Maior:`);
    var maiorDeIdade = [];
    for (var i in arrayNum) {
        if (arrayNum[i] >= 18) {
            maiorDeIdade.push(arrayNum[i]);
        }

    }
    console.log(`maiorDeIdade: ${maiorDeIdade} | maiorDeIdade.length: ${maiorDeIdade.length}`)
    return maiorDeIdade;
}
function separarDeMenor(arrayNum) {
    var menorDeIdade = [];
    for (var i in arrayNum) {
        if (arrayNum[i] < 18) {
            menorDeIdade.push(arrayNum[i]);
        }
    }
    console.log(`menorDeIdade: ${menorDeIdade} | menorDeIdade.length: ${menorDeIdade.length}`)
    return menorDeIdade;
}
function validarInput(input) {
    if (input.length == 0) {
        window.alert(`Por favor insira alguma idade!`);
        limpar();
        return false;
    } else if (input.length > 0) {
        return true;
    }
}
function validarArrayText(inputIdades) {
    var possibleNumbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
    for (var i in inputIdades) {
        if (inputIdades[i] != possibleNumbers.indexOf(inputIdades[i])) {
            window.alert(`Por favor insira idades válidas!`);
            limpar();
            return false;
        } else {
            return true;
        }
    }
}
function mostrar() {
    // - - - - - - - - Limpar dados pResultado anterior - - - - - - - - // ✔️
    pResultado.innerHTML = ``;
    // - - - - - - - - Salvar array de idades - - - - - - - - // ✔️
    var inputIdades = document.getElementById(`inputIdades`).value;
    // - - - - - - - - Validar se houve um input - - - - - - - - // ✔️
    if (validarInput(inputIdades)) {
        // - - - - - - - - Validar se o input é válido - - - - - - - - // ✔️
        if (validarArrayText(inputIdades)) {
            // - - - - - - - - Converter arrayString em arrayNum - - - - - - - - // ✔️
            var arrayNum = arrayStringToNum(inputIdades);
            // - - - - - - - - Salvar quais idades são maiores de 18 - - - - - - - - // ✔️
            var maiorDeIdade = separarDeMaior(arrayNum);
            // - - - - - - - - Salvar quais idades são menores de 18 - - - - - - - - // ✔️
            var menorDeIdade = separarDeMenor(arrayNum);
            // - - - - - - - - Exibir resultado - - - - - - - - // ✔️
            if (maiorDeIdade.length > 0) {
                //pResultado.innerHTML = `As idades: [ ${maiorDeIdade} ] são maiores que 18 anos.`;
                //pResultado.innerHTML += `<br><br>`;
                pResultado.innerHTML += `Foram encontradas ${maiorDeIdade.length} pessoas maiores 18 anos. [ ${maiorDeIdade} ]`;
                pResultado.innerHTML += `<br><br>`;
            }
            if (menorDeIdade.length > 0) {
                pResultado.innerHTML += `Foram encontradas ${menorDeIdade.length} pessoas menores que 18 anos. [ ${menorDeIdade} ]`;
                //pResultado.innerHTML += `<br><br>`;
                //pResultado.innerHTML += `As idades: [ ${menorDeIdade} ] são menores que 18 anos.`;
            }
            divResultado.appendChild(pResultado);
            divResultado.appendChild(limparButton);
            section.appendChild(divResultado);
        }
    }
}
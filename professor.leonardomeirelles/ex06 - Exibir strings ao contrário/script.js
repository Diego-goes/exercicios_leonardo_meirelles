// - - - - - - | Criar elementos para exibir o resultado. | - - - - - - // ✔️
var section = document.getElementById(`section`);
var divResultado = document.createElement(`div`);
divResultado.setAttribute(`id`, `divResultado`);
var hr = document.createElement(`hr`);
var pResultado = document.createElement(`p`);
pResultado.setAttribute(`id`, `pResultado`);
var buttonLimpar = document.createElement(`input`);
buttonLimpar.setAttribute(`id`, `buttonLimpar`);
buttonLimpar.setAttribute(`value`, `Limpar`);
buttonLimpar.setAttribute(`class`, `inputButton`);
buttonLimpar.setAttribute(`onclick`, `limpar('divResultado')`);
buttonLimpar.setAttribute(`type`, `button`);
buttonLimpar.setAttribute(`onmouseover`, `mouseEmCima('buttonLimpar')`);
buttonLimpar.setAttribute(`onmouseleave`, `mouseSaiu('buttonLimpar')`);

function preenchimento(elementId) {
    var preenchimento = document.getElementById(`${elementId}`);
    var preenchimentoValue = preenchimento.value;
    if (preenchimento.value.indexOf(`Digite aqui...`) != -1) {
        if (preenchimentoValue[1] == `D`) {
            var caractere = preenchimento.value[0];
        } else if (preenchimentoValue[11] == `.`) {
            var caractere = preenchimento.value[14];
        }
        preenchimento.value = caractere;
    }
    limparDivResultado();
    preenchimento.style.color = `black`;
}
function foco(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.value = ``;
    elemento.focus();
}
function limparDivResultado() {
    divResultado.innerHTML = ``;
}
function limpar(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.innerHTML = ``;
    foco('inputNomes');
}
function onLoad(elementId) {
    var elemento = document.getElementById(`${elementId}`);
    elemento.focus();
}
function mouseEmCima(elementId) {
    var novaCor = document.getElementById(`${elementId}`);
    novaCor.style.borderColor = `slateGrey`;
}
function mouseSaiu(elementId) {
    var novaCor = document.getElementById(`${elementId}`);
    novaCor.style.borderColor = `white`;
}

function inverterOrdemArray(array) {
    var alfabeto = [` `, `a`, `ã`, `á`, `â`, `b`, `c`, `d`, `e`, `é`, `ê`, `f`, `g`, `h`, `i`, `í`, `j`, `k`, `l`, `m`, `n`, `ñ`, `o`,`ô`, `ó`, `õ`, `p`, `q`, `r`, `s`, `t`, `u`, `ú`, `v`, `w`, `x`, `y`, `z`];
    var arrayInverso = [];
    var letras = ``;
    var palavras = [];
    var palavraEmBranco = false;
    for (var i in array) {
        if (alfabeto.indexOf(array[i].toLowerCase()) != -1) {
            letras += array[i];
        } else if (array[i] == `,`) {
            palavras.push(letras);
            letras = [];
        } else {
            return `ERRO`;
        }
        if (array.length == (Number(i) + 1)) {
            palavras.push(letras);
            letras = null;
        }
    }
    for (var j = (palavras.length - 1); j != -1; j--) {
        if (palavras[j] == ` ` || palavras[j] == ``) {
            palavraEmBranco = true;
        } else {
            arrayInverso.push(palavras[j]);
        }
    }
    if (palavraEmBranco == true) {
        window.alert(`Nomes vazios foram desconsiderados!`);
    }
    return arrayInverso;
}

function validarInput(inputValue) {
    var alfabeto = [` `, `a`, `ã`, `á`, `â`, `b`, `c`, `d`, `e`, `é`, `ê`, `f`, `g`, `h`, `i`, `í`, `j`, `k`, `l`, `m`, `n`, `ñ`, `o`,`ô`, `ó`, `õ`, `p`, `q`, `r`, `s`, `t`, `u`, `ú`, `v`, `w`, `x`, `y`, `z`];
    // - - - - - - | Validar se o input está vazio. | - - - - - - // ✔️
    if (inputValue == `Digite aqui...` || inputValue == ``) {
        window.alert(`ERRO, estão faltando dados!`);
        foco();
        return false;
    }
    // - - - - - - | Validar se o valor do input é válido. | - - - - - - // ✔️
    for (var i in inputValue) {
        if (alfabeto.indexOf(inputValue[i].toLowerCase()) == -1 && inputValue[i] != `,`) {
            console.log(`inputValue[${i}]: ${inputValue[i]}`);
            window.alert(`ERRO, insira apenas caracteres válidos!`);
            return false;
        }
    }
    return true;
}
function exibir() {
    // - - - - - - | Previnir repetição de texto | - - - - - - // ✔️
    pResultado.innerHTML = ``;
    // - - - - - - | Salvar o valor do input. | - - - - - - // ✔️
    var elementInputNomes = document.getElementById(`inputNomes`);
    var elementInputNomesValue = document.getElementById(`inputNomes`).value;
    // - - - - - - | Validar input | - - - - - - // ✔️
    if (validarInput(elementInputNomesValue)) {
        // - - - - - - | Inverter ordem de exibição | - - - - - - // ✔️
        var inversoInputNomes = inverterOrdemArray(elementInputNomesValue);
        // - - - - - - | Exibir resultado | - - - - - - // ✔️
        pResultado.innerHTML = `A ordem do array foi invertida para: <br><br> 1º | ${inversoInputNomes[0]}`;
        for (var i = 1; inversoInputNomes.length > i; i++) {
            pResultado.innerHTML += `<br><br> ${i + 1}º | ${inversoInputNomes[i]}`;
        }
        divResultado.appendChild(hr);
        divResultado.appendChild(pResultado)
        divResultado.appendChild(buttonLimpar);
        section.appendChild(divResultado);
    }
}
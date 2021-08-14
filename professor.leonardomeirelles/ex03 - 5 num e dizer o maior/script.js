var sectionResultado = document.getElementById(`sectionResultado`);
var hr = document.createElement(`hr`);
var divResultado = document.createElement(`div`);
divResultado.setAttribute(`id`, `divResultado`);
var pResultado = document.createElement(`p`);
pResultado.setAttribute(`id`, `pResultado`);
function foco(){
    var input = document.getElementById(`arrayString`);
    input.value = ``;
    input.focus();
}
function arrayStringToNum(arrayString) {
    var possibleNumbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    var arrayNum = [];
    var numEntreVirgulas = []
    for (var i in arrayString) {
        if (arrayString[i] == `-`) {
            numEntreVirgulas = arrayString[i];
        } else if (arrayString[i] == (possibleNumbers.indexOf(arrayString[i]))) {
            numEntreVirgulas += Number(arrayString[i]);
        } else if (arrayString[i] == `.`) {
            numEntreVirgulas += (arrayString[i]);
        } else if (arrayString[i] == `;`) {
            arrayNum.push(parseFloat(numEntreVirgulas));
            numEntreVirgulas = [];
        }
        if (arrayString.length == (Number(i) + 1)) {
            arrayNum.push(parseFloat(numEntreVirgulas));
            numEntreVirgulas = [];
        }
    }
    return arrayNum;
}
function pegarMaiorArray(arrayNum) {
    var maior = arrayNum[0];
    for (var i in arrayNum) {
        if (maior < arrayNum[i]) {
            maior = arrayNum[i]
        }
    }
    return maior;
}
function limpar(item, foco) {
    item.innerHTML = ``;
    foco.value = ``;
    foco.focus();
}
function validarValor(arrayString) {
    var possibleNumbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    var validacao = true;
    for (var i in arrayString) {
        if (arrayString[i] == `-`) {
        } else if (arrayString[i] == (possibleNumbers.indexOf(arrayString[i]))) {
        } else if (arrayString[i] == `.`) {
        } else if (arrayString[i] == `;`) {
        } else{
            validacao = false
        }
    }
    return validacao;
}
function encontrar() {
    //✔️Limpar dados anteriores, para não serem duplicados.
    divResultado.innerHTML = ``;
    //✔️Conferir se o usuário não deixou o input em branco
    var arrayString = document.getElementById(`arrayString`).value;
    if (arrayString.length == 0) {
        window.alert(`Nenhum número foi inserido!`);
    } else {
        //✔️Conferir se um valor válido foi inserido
        var validacao = validarValor(arrayString);
        if (validacao == false) {
            window.alert(`Erro, insira os dados corretamente!`);
            foco();
        } else {
            //✔️ - - Transformar o array de strings em numbers - - //
            var arrayNum = arrayStringToNum(arrayString);
            //✔️ - - Pegar o maior valor em um array - - //
            var maior = pegarMaiorArray(arrayNum);
            //✔️ - - Criar o HTML para exibir o resultado - - //
            pResultado.innerHTML = `Os números inseridos foram: ${arrayNum}<br><br>`;
            pResultado.innerHTML += `O maior dentre eles foi: ${maior}`;
            divResultado.appendChild(pResultado);
            sectionResultado.appendChild(divResultado);
            //✔️ - - Criar botão limpar - - //
            var limpar = document.createElement(`input`);
            limpar.setAttribute(`type`, `button`);
            limpar.setAttribute(`value`, `Limpar`);
            limpar.setAttribute(`class`, `inputButton`);
            limpar.setAttribute(`onclick`, `limpar(divResultado,arrayString)`);
            divResultado.appendChild(limpar);
        }
    }
}
// - - - - - - - - | Criar HTML para exibir o resultado | - - - - - - - - //
var section = document.getElementById(`section`);
var divRsultado = document.createElement(`div`);
var hr = document.createElement(`hr`);
var pResultado = document.createElement(`p`);
var limparButton = document.createElement(`input`);
limparButton.setAttribute(`value`,`Limpar`);
limparButton.setAttribute(`class`, `inputButton`);
limparButton.setAttribute(`onclick`,`limpar()`);
limparButton.setAttribute(`type`,`button`);
function salvarInputs() {
    var inputAltura = [];
    var selectSexo = [];
    for (var i = 1; 5 >= i; i++) {
        inputAltura.push(document.getElementById(`inputAltura_id_${i}`).value);
        selectSexo.push(document.getElementById(`sexo_id_${i}`).value);
    }
    return [inputAltura, selectSexo];
}
function validarInputs(inputAltura, selectSexo) {
    var validacao = true;
    for (var i in inputAltura) {
        if (inputAltura[i] == 0) {
            window.alert(`Erro, estão faltando dados!`);
            limparDiv();
            return validacao = false;
        }
    }
    for (var i in selectSexo) {
        if (selectSexo[i] == `Selecionar`) {
            window.alert(`Erro, estão faltando dados!`);
            limparDiv();
            return validacao = false;
        }
    }
    return validacao;
}
function limpar(){
    limparDiv();
    foco();
}
function limparDiv() {
    divRsultado.innerHTML = ``;
}
function foco() {
    for (var i = 1; 5 >= i; i++) {
        var inputAltura = (document.getElementById(`inputAltura_id_${i}`));
        var selectSexo = (document.getElementById(`sexo_id_${i}`));
        inputAltura.value = ``;
        selectSexo.value = `Selecionar`;
    }
    var inputAltura = (document.getElementById(`inputAltura_id_1`));
    inputAltura.focus();
}
function qtdSexos(selectSexo){
    var qtdMasculino = 0;
    var qtdFeminino = 0;
    for(var i in selectSexo){
        if(selectSexo[i] == `masculino`){
            qtdMasculino += 1;
        } else if(selectSexo[i] == `feminino`){
            qtdFeminino += 1;
        }
    }
    return [qtdMasculino,qtdFeminino];
}
function pegarMaiorAltura(inputAltura){
    var maior = inputAltura[0];
    for(var i in inputAltura){
        if(maior < inputAltura[i]){
            maior = inputAltura[i];
        }
    }
    console.log(`maior: ${maior}`);
    return maior;
}
function pegarSexoMaiorAltura(inputAltura,maiorAltura,selectSexo){
    var index = inputAltura.indexOf(maiorAltura);
    return selectSexo[index];
}
function exibir() {
    // - - - - - - - - | Limpar divResultado | - - - - - - - - //
    divRsultado.innerHTML = ``;
    // - - - - - - - - | Função para salvar inputs | - - - - - - - - //
    var inputAltura = salvarInputs()[0];
    var selectSexo = salvarInputs()[1];
    // - - - - - - - - | Validar Inputs | - - - - - - - - //
    if (validarInputs(inputAltura, selectSexo)) {
        // - - - - - - - - | Calcacular qtd de cada sexo | - - - - - - - - //
        var qtdMasculino = qtdSexos(selectSexo)[0];
        var qtdFeminino = qtdSexos(selectSexo)[1];
        // - - - - - - - - | Calcular qual foi a maior altura e o sexo correspondente | - - - - - - - - //
        var maiorAltura = pegarMaiorAltura(inputAltura);
        var sexoMaiorAltura = pegarSexoMaiorAltura(inputAltura,maiorAltura,selectSexo);
        // - - - - - - - - | Mostrar divResultado | - - - - - - - - //
        pResultado.innerHTML = `Existem ${qtdMasculino} pessoas do sexo masculino, e ${qtdFeminino} do sexo feminino.<br><br>`;
        pResultado.innerHTML += `A maior altura é ${maiorAltura}, e é do sexo ${sexoMaiorAltura}`;
        divRsultado.appendChild(hr);
        divRsultado.appendChild(pResultado);
        divRsultado.appendChild(limparButton);
        section.appendChild(divRsultado);
    }
}
function criarInputs() {
    var qtdInputs = (document.getElementById('qtdInputs')).value;
    var newInputs = document.getElementById(`newInputs`);
    var novosInputs = document.createElement(`p`);
    newInputs.innerHTML = ``;
    novosInputs.innerHTML = `Insira as notas nos espaços abaixos:<br><br>`;
    for (var i = 1; qtdInputs >= i; i++) {
        novosInputs.innerHTML += `Insira a ${i}ª nota: <input type="number" id=notaId_${i}> <br>`
        newInputs.appendChild(novosInputs);
    }
    novosInputs.innerHTML += `<br><br> <input type="button" value = "calcular" onclick="calcular()">`
}
function salvarInputs() {
    var qtdInputs = (document.getElementById('qtdInputs')).value;
    var notas = [];
    for (var i = 1; qtdInputs >= i; i++) {
        var notasIds = Number(document.getElementById(`notaId_${i}`).value);
        notas.push(notasIds);
    }
    return notas;
}
function calcularMedia(notas) {
    var qtdInputs = (document.getElementById('qtdInputs')).value;
    var soma = 0;
    var media = 0;
    for (var i = 0; qtdInputs > i; i++) {
        soma += notas[i];
    }
    media = (soma / qtdInputs);
    return media
}
function mostrarResultado(media) {
    var div = document.getElementById(`resultado`);
    div.innerHTML = ``;
    var hr = document.createElement(`hr`)
    var p = document.createElement(`p`)
    p.innerHTML = `A média calculada foi: ${media}`;
    div.appendChild(hr);
    div.appendChild(p);
}
function calcular() {
    // - - - - - - - - - SALVAR INPUTS - - - - - - - - - //
    notas = salvarInputs();

    // - - - - - - - - - CALCULAR MÉDIA - - - - - - - - - //
    media = calcularMedia(notas);

    // - - - - - - - - - EXIBIR RESULTADO - - - - - - - - - //
    mostrarResultado(media.toFixed(1));
}

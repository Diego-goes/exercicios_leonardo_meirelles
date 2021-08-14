var inputIdades = `18;19;20`;

function arrayStringToNum(arrayString) {
    var possibleNumbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
    var arrayNum = [];
    var numEntreVirgulas = [];
    var j = 0;
    for (var i in arrayString) {
        if (arrayString[i] == possibleNumbers.indexOf(arrayString[i])) {
            numEntreVirgulas += arrayString[i];
            console.log(`1 - numEntreVirgulas: ${numEntreVirgulas} | tipo numEntreVirgulas[j]:${numEntreVirgulas[j]} `)
            j += 1;
        } else if (arrayString[i] == `;`) {
            numEntreVirgulas = Number(numEntreVirgulas);
            arrayNum.push(numEntreVirgulas);
            numEntreVirgulas = [];
            //console.log(`2 - arrayNum: ${arrayNum} | tipo arrayNum:${typeof arrayNum} `)
            j = 0;
        }
        if (arrayString.length == (Number(i) + 1)){
            numEntreVirgulas = Number(numEntreVirgulas);
            console.log(`3 - numEntreVirgulas: ${numEntreVirgulas}`)
            arrayNum.push(numEntreVirgulas);
        }
    }
    for(var l in arrayNum){
        console.log(`4 - arrayNum[l]: ${arrayNum[l]} | tipo arrayNum[l]:${typeof arrayNum[l]} `)
    }
    return arrayNum;
}

function separarDeMaior(arrayNum) {
    console.log(`Separar de Maior:`);
    var maiorDeIdade = [];
    for (var i in arrayNum) {
        console.log(`arrayNum[i]: ${arrayNum[i]} | validacao: ${arrayNum[i] >= 18}`);
        if (arrayNum[i] >= 18) {
            maiorDeIdade.push(Number(arrayNum[i]));
            console.log(`maiorDeIdade: ${maiorDeIdade} | validacao: ${arrayNum[i] >= 18}`);
        }
        
    }
    return maiorDeIdade;
}
function separarDeMenor(arrayNum) {
    var menorDeIdade = [];
    for (var i in arrayNum) {
        if (arrayNum[i] < 18) {
            menorDeIdade.push(Number(arrayNum[i]));
        }
    }
    return menorDeIdade;
}
var arrayNum = arrayStringToNum(inputIdades);
console.log(arrayNum);
// - - - - - - - - Salvar quais idades são maiores de 18 - - - - - - - - //
var maiorDeIdade = separarDeMaior(arrayNum);
// - - - - - - - - Salvar quais idades são menores de 18 - - - - - - - - //
var menorDeIdade = separarDeMenor(arrayNum);
// - - - - - - - - Exibir resultado - - - - - - - - //
console.log(`As idades: [ ${maiorDeIdade} ] são maiores que 18 anos.<br><br>`);
console.log(`As idades: [ ${menorDeIdade} ] são menores que 18 anos.`);
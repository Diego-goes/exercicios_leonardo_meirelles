///*
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

var arrayString = `-1.6;1`;
var arrayNum = arrayStringToNum(arrayString)
for (var i in arrayNum) {
    console.log(`arrayNum: ${arrayNum} | Tipo: ${typeof arrayNum[i]} | Length: ${arrayNum.length} | Loop: ${i}`);
}
var arrayString = `11,13,12,14,0`;
var arrayNum = arrayStringToNum(arrayString);
console.log(`arrayNum: ${arrayNum} | Tipo: ${typeof arrayNum[i]} | Length: ${arrayNum.length} | Loop: ${i}`);
console.log(arrayNum);
//Funcão tem que ver se o primeiro caractere é um numero
//Identificar a `,` entre os numeros `;`
//Identificar o `-` entre os numeros `;`
//Identificar os numeros entre os `;`
/*
console.log(`- - - - - - - `);
function arrayStringToNum(arrayString) {
    console.log(`Array type string to type number:`);
    var possibleNumbers = [``, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
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
var arrayNum = arrayStringToNum(`11,13,12,14,0`);
console.log(arrayNum);
console.log(`- - - - - - - `);
*/
function inverterOrdemArray(array) {
    console.log(`array: ${array} | Length: ${array.length}`);
    var alfabeto = [`a`, `á`, `â`, `b`, `c`, `d`, `e`, `é`, `ê`, `f`, `g`, `h`, `i`, `í`, `j`, `k`, `l`, `m`, `n`, `ñ`, `o`, `ó`, `õ`, `p`, `q`, `r`, `s`, `t`, `u`, `ú`, `v`, `w`, `x`, `y`, `z`];
    var arrayInverso = [];
    var letras = ``;
    var palavras = [];
    for (var i in array) {
        if (alfabeto.indexOf(array[i].toLowerCase()) != -1) {
            //console.log(`Letra detectada: ${array[i]}`);
            letras += array[i];
        } else if (array[i] == `,`) {
            //console.log(`Vírgula detectada!`)
            palavras.push(letras);
            letras = [];
        }
        //console.log(`array.length == i: ${array.length == i} | array.length: ${array.length} | i: ${i}`);
        if (array.length == (Number(i) + 1)) {
            palavras.push(letras);
            letras = null;
        }
        console.log(`array[${i}]: ${array[i]} | letras: ${letras} | palavras: ${palavras}`);
    }
    for (var j = (palavras.length - 1); j != -1; j--) {
        //console.log(`palavras.length: ${palavras.length} | j: ${j}`);
        arrayInverso.push(palavras[j]);
    }
    return arrayInverso;
}

// var array = `Diego,Rodrigues,Góes,353,;-;,@`;
var array = `Diego,Rodrigues,Góes`; // length == 15;
var arrayInverso = inverterOrdemArray(array);
console.log(`arrayInverso: ${arrayInverso}`);

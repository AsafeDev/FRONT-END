
function somar (num1,num2){ //function
    return num1+num2;
}
const somar = (num1,num2) => num1+num2; // arrow function


const resultado = somar(10,5);
console.log(resultado);

const valor1 = 11;
const valor2 = 2;

console.log('soma', valor1 + valor2);
console.log('subtração', valor1 - valor2);
console.log('multiplicação', valor1 * valor2);
console.log('divisão', valor1 / valor2);

if(valor1 > valor2){
    console.log(valor1, 'Maior que', valor2);
}else{
    console.log(valor1, 'Menor que', valor2);
}

switch(valor1){
    case  valor1 > 10:
        console.log('ok');
    break;
    case  valor1 < 10:
        console.log('Not');
    break;
}
const nome = Pablo;
let aprovado = true;
var nota = 8;
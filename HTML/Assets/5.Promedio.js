'use strict';

let num1=0;
let num2=0;
let num3=0;
let num4=0;
num1=prompt("Introduzca la primera Nota");
num2=prompt("Introduzca la Segunda Nota");
num3=prompt("Introduzca la Tercera Nota");
num4=prompt("Introduzca la Cuarta Nota");
function prom(num1, num2, num3, num4) {
    return (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4))/4; 
};
let result = 0;
result = prom(num1,num2,num3,num4);
alert(`Las notas son:${num1},${num2},${num3},${num4}.`);
alert("El promedio es:"+result,".");
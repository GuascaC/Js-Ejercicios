'use strict';
let radio = 0;
let arear = 0;
let perimetror = 0;
radio=prompt("Ingrese el radio: ");

function area(radio) {
    return Math.PI * Math.pow(radio,2)}
function perimetro(radio) {
    return 2 * Math.PI * radio}

 arear=area(radio);
 perimetror=perimetro(radio);
 alert("Area:"+arear);
 alert("Perimetro:"+perimetror);
 console.log(arear);
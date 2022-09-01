'use strict';
let lado = 0;
let arear = 0;
let perimetror = 0;
lado=prompt("Ingrese el lado del cuadrado: ");

function area(lado) {
    return Math.pow(lado,2)}
function perimetro(lado) {
    return lado * 4}

arear=area(lado);
perimetror=perimetro(lado);
alert("Area:"+arear);
alert("Perimetro:"+perimetror);


'use strict';
let lado = 0;
let arear = 0;
let perimetror = 0;
lado=prompt("Ingrese el lado del triangulo");

function area(lado) {
    return (Math.sqrt(3)*lado/4)}
function perimetro(lado) {
    return lado * 3}

 arear=area(lado);
 perimetror=perimetro(lado);
 alert("Area:"+arear);
 alert("Perimetro:"+perimetror);

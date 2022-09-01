'use strict';
let largo = 0;
let ancho = 0;
let arear = 0;
let perimetror = 0;
largo=prompt("Ingrese el largo");
ancho=prompt("Ingrese el ancho");

function area(largo,ancho) {
    return largo * ancho}
function perimetro(largo,ancho) {
    return largo * 2 + ancho * 2}

    arear=area(largo,ancho);
    perimetror=perimetro(largo,ancho);
    alert("Area:"+arear);
    alert("Perimetro:"+perimetror);
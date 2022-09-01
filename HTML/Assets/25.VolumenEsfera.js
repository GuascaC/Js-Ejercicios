'use strict';
let radio = 0;
let volumenr = 0;
radio=prompt("Introuzca el Radio:");
function volumen(radio){
    return (4/3)*(Math.PI)*Math.pow(radio,3)}
    volumenr = volumen(radio)
alert("El volumen de la esfera es:"+volumenr);
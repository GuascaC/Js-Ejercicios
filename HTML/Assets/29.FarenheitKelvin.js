'use strict';
let fare = 0;
let kelvr = 0;
let kelvv = 0;
fare=prompt("Ingrese Grados farenheit: ");
function kelv(fare){ 
    return ((fare-32)*5/9)+273.15}
kelvr = kelv(fare);
alert("Farenheit:"+fare);
alert("Kelvin:"+kelvr);
'use strict';
let temp = 0;
let tempfr = 0;
temp=prompt("Ingrese Grados Celcius");
function tempf(temp) {
    return temp * 1.8 + 32;}

alert("Celcius:"+temp);
tempfr=tempf(temp);
alert("Farenheit:"+tempfr);
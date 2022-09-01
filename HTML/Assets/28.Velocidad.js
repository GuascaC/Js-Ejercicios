'use strict';
let dist = 0;
let time = 0;
let velr = 0;
dist=prompt("Ingrese la distancia:");
time=prompt("Ingrese el tiempo: ");
function vel(time,dist){
    return dist/time;
}
velr = vel(time,dist);
alert("La velocidad es :"+velr);

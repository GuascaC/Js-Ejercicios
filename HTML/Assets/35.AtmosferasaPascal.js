'use strict';
let atm = 0;
let pascr = 0;
atm=prompt("Ingrese las Atmosferas:");
function pasc(atm){
    return atm * 101300;
}
pascr=pasc(atm);
alert("Atmosferas:"+atm);
alert("Pascales:"+pascr);
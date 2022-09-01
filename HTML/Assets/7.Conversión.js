'use strict'
let num = 0;
num=prompt("El valor en metros: ");
let Kmr = 0;
let Hmr = 0;
let Dmr = 0;
let dmr = 0;
let cmr = 0;
let mmr = 0;

function Km(num){
    return num / 1000;
}
function Hm(num){
    return num / 100;
}
function Dm(num){
    return num / 10;
}
function dm(num){
    return num * 10;
}
function cm(num){
    return num * 100;
}
function mm(num){
    return num * 1000;
}
Kmr = Km(num);
Hmr = Hm(num);
Dmr = Dm(num);
dmr = dm(num);
cmr = cm(num);
mmr = mm(num);
alert("El valor en Kilometros:"+Kmr);
alert("El valor en Hectometros:"+Hmr);
alert("El valor en Decametros:"+Dmr);
alert("El valor en Decimetros:"+dmr);
alert("El valor en Centimetros:"+cmr);
alert("El valor en Milimetros:"+mmr);
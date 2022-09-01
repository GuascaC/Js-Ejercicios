'use strict';
let notas = 0;
let suma = 0;
let nota = 0;
let notaf = 0;
let notadef = 0;
notas = prompt("Bienvenido Estudiante, Ingrese la Cantidad de Notas: ");
for(let i=0;i<notas;i++){
    nota = prompt("Ingrese la Nota");
    notaf = parseFloat(notaf) + parseFloat(nota) }
notadef = notaf / notas;
alert("Tu promedio es : "+notadef);
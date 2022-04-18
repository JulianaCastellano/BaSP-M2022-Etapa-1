//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log("Excercise 3-a");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[5] + " " + meses[11]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("Excercise 3-b");

var mesesDos = meses.sort();

console.log(mesesDos);

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log("Excercise 3-c");

mesesDos.unshift("INICIO");
mesesDos.push("FINAL");

console.log(mesesDos);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("Excercise 3-d");

mesesDos.shift();
mesesDos.pop();

console.log(mesesDos);

//Invertir el orden del array (utilizar reverse).
console.log("Excercise 3-e");

var reverse = mesesDos.reverse();

console.log(reverse);

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("Excercise 3-f");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses.join("-"));

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log("Excercise 3-g");

var mesesEspecificos = meses.slice(2,11);

console.log(mesesEspecificos);
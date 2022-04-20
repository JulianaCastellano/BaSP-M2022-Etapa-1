// //Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
// console.log("Excercise 6-a");

// function suma(a,b){
//     var resultado;
//     resultado = a + b;
//     console.log(resultado);
// }
// suma(3,5);

// //A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
// console.log("Excercise 6-b");

// function suma(a,b){
//     var resultado;
//     resultado = a + b;
//     if(typeof (a) !== "number" || typeof (b) !== "number" ){
//         alert("ERROR");
//         return resultado = NaN;
//     }else{
//         return console.log(resultado);
//     }
// }
// suma("3",5);

// //Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
// console.log("Excercise 6-c");

// function validate(c) {
//     return Number.isInteger(c);
// }
// console.log(validate(5));

// //A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
// console.log("Excercise 6-d");

// function suma(a,b){
//     var resultado;
//     resultado = a + b;
//     if(typeof (a) !== "number" || typeof (b) !== "number" ){
//         alert("ERROR");
//         return resultado = NaN;
//     }if(validate(a) == false) {
//         alert("ERROR, se redondea " + Math.round(a));
//         return resultado = NaN;
//     }if(validate(b) == false) {
//         alert("ERROR, se redondea " + Math.round(b));
//         return resultado = NaN;
//     } else{
//         return console.log(resultado);
//     }
// }
// suma(3.8,5);

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log("Excercise 6-e");

function chequearNum(a,b){
    if(typeof(a) != "number" || typeof(b) != "number"){
        alert("ERROR");
        return false;
    }else{
        return true;
    }
}
function chequearEn(a){
    return Number.isInteger(a)
}
function isInter(a){
    if(chequearEn(a) == false){
        alert("Este parametro tiene un error " + Math.round(a));
        return a = Math.round(a);
    }else{
        return a
    }
}
function sumaNueva(a,b){
    if(chequearNum(a,b) == false){
        return NaN;
    }
    a = isInter(a);
    b = isInter(b);
    return console.log(a + b);
}
sumaNueva(8,5);
sumaNueva(2.5,6);
sumaNueva("a",4);
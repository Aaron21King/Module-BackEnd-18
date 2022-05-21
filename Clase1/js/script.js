//Declaracion de la funcion
//DOnde describes lo que hace la funcion, como se llama y que recibe
function saludar(nombre){

    return `Hola ${nombre}, saludos`;
}


//Invocacion de la funcion (llamar, usar, ejecutar)
const saludo = saludar('Aaron');
console.log(saludo);
//Solo cambia el parametro de la funcion
const saludo2 = saludar('William');
console.log(saludo2);

//EL tipo de hola es funcion y el tipo de saludar('') es el valor de retorno
console.log(typeof saludar('Oscar'));
console.log(typeof saludar);

//otra Funcion guarda referencia de la funcion hola
const funcion = saludar;
console.log(funcion('Jose'));
console.log(funcion('Danny'));
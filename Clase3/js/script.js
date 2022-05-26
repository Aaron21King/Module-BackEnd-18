let numerosMayores = [101, 205, 175, 215, 278, 358, 78, 45];
function numM (arreglo, callback) {
    const nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        const elementFiltrado = callback (arreglo[i]);
        if (elementFiltrado > 100) {
            nuevoArreglo.push(elementFiltrado)
        }
    }
    return elementFiltrado
}
numM(nuevoArreglo)
console.log(nuevoArreglo);
/*------------------------------------------------------------------------------------------------*/

let arreglo = [1,2,3,4,5,6,7,8,9,10]
function find(arreglo, callback){
    for (let index = 0; index < arreglo.length; index++) {
        if(callback(arreglo[index])){
            return arreglo[index]
        }
    }
}

function callback(value){
    if(value %2 === 0 ){
        return true;
    }
}

let findF = find(arreglo, callback)
console.log(findF)

/*---------------------------------------------------------------------------------------*/
const arreglo2 = [1,2,3,4,5,6,7,8,9,10]

function every(array, callback) {
  let newArray =[]
  for (let i = 0; i < array.length; i++) {
   newArray.push(callback(array[i]))
  }if(newArray.includes(false)){ 
    return false
  } else{return true}
  
}
function callback (number) {
  return  number < 10; 
  } 

console.log(every(arreglo, callback))
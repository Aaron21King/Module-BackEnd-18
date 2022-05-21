let array = [1,2,3,4,5,6,7,8,9,10]
function numeroMayor(array){
    let numeroM = array[0];
    for(let i = 0; i < array.length; i++){
        if(numeroM<array[i]){
            numeroM= array[i];
        }
    }
    console.log("El numero mayor es: ",numeroM);
    return numeroM
}
numeroMayor(array)
 
/*-----------------------------------------------------------------------------------------------*/


/*let string = "Mi nombre es Aaron y soy un koder.";
let stringRevierto = "";
   
for(let i = string.length-1; i>=0; i--)
{
  
  stringRevierto += string[i];
}
console.log(stringRevierto);*/

/*-----------------------------------------------------------------------------------------------*/
function dividir(a,b){

   if(b==0){
     return 'Error'
   }else{
    return a/b;
  }

 }
console.log(dividir(20,0))


/*------------------------------------------------------------------------------------------------- */

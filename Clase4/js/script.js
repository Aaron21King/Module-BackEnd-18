//const fs = require('fs')

/*fs.writeFile('hola.txt', 'Mi primer archivo', (err)=>{
    if(err){
        console.error('Algo salio mal: ',err)
    }else{
        console.error('Se creo el archivo ')
    }
})*/

//callback aparte

/*function callback(horror){
    if(horror){
        console.error("Hay un horror");
    }else{
        console.log("Se creo el archivo con otro callback");
    }
}

fs.writeFile("otro.txt", "Otro archivo",callback)*/
/*-----------------------------------------------------------------------------------------------------*/
/*function crearArchivo(nombre, contenido){
    fs.writeFile(nombre, contenido,(err)=>{
        if(err){
            console.error('Algo salio mal: ',err)
        }else{
            console.error('Se creo el archivo ')
        }
    })
}
crearArchivo("hola.txt", "Mi primer archivo");*/

/*-------------------------------------------------------------------------------------------------------*/

/*function leerArchivo(nombre){
    fs.readFile(nombre,'utf8',(err, data)=>{
        console.log(data);
    })
    console.log('archivo leido')
}
leerArchivo("hola.txt")*/

/*--------------------------------------------------------------------------------------------------------*/
/*function borrarArchivo(nombre){
    fs.unlink(nombre, (err =>{
        if (err) console.log(err);
        else{
            console.log("Archivo eliminado");
        }
    }))
}
borrarArchivo("otro.txt")*/


function construir(muro,callback){
    console.log("Construyendo...");

    setTimeout(()=>{
        muro.construido=true;
        callback(muro)
    },500)
}
function construir(muro){
    console.log("Construyendo...");

    setTimeout(()=>{
        muro.construido=true;
    },500);
    callback(muro);
}
function aplanar(muro){
    console.log("Aplanando...");

    setTimeout(()=>{
        muro.aplanado=true;
    },200);
    callback(muro);
}
function pintar(muro){
    console.log("pintando...");

    setTimeout(()=>{
        muro.pintado=true;
    },100);
    callback(muro);
}

const muro ={
    construido : false,
    aplanado : false,
    pintado : false,
};

/*const muroConstruido = construir(muro);
console.log('Muro construido: ',muroConstruido)

const muroAplanado = aplanar(muroConstruido);
console.log('Muro Aplanado: ',muroAplanado)

const muroPintado = pintar(muroAplanado);
console.log('Muro Pintado: ',muroPintado)*/

construir(muro,(muroConstruido)=>{
    aplanar(muroConstruido, (muroAplanado)=>{
        pintar(muroAplanado,(muroPintado)=>{
            console.log("Muro terminado!",muroPintado)
        });
    });
});
const express = require("express");
const fs = require("fs/promises");

//const server = express();


server.use(express.json());

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.get("/koders", async (req, res) => {
  const archivo = await fs.readFile("koders.json", "utf8"); 
  console.log(archivo);
  const objeto = JSON.parse(archivo); 
  console.log(objeto);
  const koders = objeto.koders; 

  res.json(koders);
});

server.post("/koders", async (req, res) => {
 
  console.log("body:", req.body);
  const koder = req.body;
  const archivo = await fs.readFile("koders.json", "utf8"); 
  const objeto = JSON.parse(archivo);
  const koders = objeto.koders; 
  koders.push(koder);

 
  const nuevoArchivo = JSON.stringify(objeto, null, 2); 
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

 
  res.status(201); 
  res.json(koders);
});

server.patch("/koders/:nombre", async (req, res) => {
  const nombre = req.params.nombre;
  console.log("body:", req.body);
  const newKoder = req.body;

  
  const archivo = await fs.readFile("koders.json", "utf8"); 
  const objeto = JSON.parse(archivo); 
  const koders = objeto.koders; 

  for (let i = 0; i < koders.length; i++) {
    const oldKoder = koders[i];

    if (oldKoder.nombre === nombre) {
      oldKoder.edad = newKoder.edad;
      oldKoder.genero = newKoder.genero;
    }
  }
  const nuevoArchivo = JSON.stringify(objeto, null, 2); 
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  res.status(200); 
  res.json(koders);
});

server.delete("/koders/:nombre", async (req, res) => {
  const nombre = req.params.nombre;


  const archivo = await fs.readFile("koders.json", "utf8"); 
  const objeto = JSON.parse(archivo); 
  const koders = objeto.koders; 
  const newKoders = koders.filter((koder) => koder.nombre !== nombre);
  console.log(newKoders);

  const newObject = {
    koders: newKoders,
  };
  const nuevoArchivo = JSON.stringify(newObject, null, 2); 
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  res.status(200); 
  res.json(newKoders);
});

server.get("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui estan todos los koders",
  };

  res.json(respuesta);
});

server.post("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes crear koders",
  };

  res.json(respuesta);
});

server.put("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes sustituir un koder",
  };

  res.json(respuesta);
});

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
});


/*-------------------------------------------------------------------------------------------------------*/
const express = require('express');
const fs = require('fs/promises');

const server = express();
let jsonKoders = {
  "koders":[
    {"name":"Aaron","genero":"masculino"},
    {"name":"Jose","genero":"masculino"},
    {"name":"Alejandra","genero":"femenino"},
    {"name":"William","genero":"masculino"}]};

let jsonContent = JSON.stringify(jsonKoders);
fs.writeFile("koders.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("Un error ha ocurrido");
        return console.log(err);
    }
    console.log("Archivo JSON guardado");
});


server.get('/koders', async (req, res) =>{
    const archivo = await fs.readFile("koders2.json", "utf8")
    const objecto = JSON.parse(archivo)
    const koders = objecto.koders;
    res.json(koders)
})

server.listen(8001, () => {
    console.log('Servidor ejecutandose')
});
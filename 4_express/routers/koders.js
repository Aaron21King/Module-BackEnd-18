const express = require("express");
const fs = require("fs/promises");
const FILENAME = "koders.json";
const ENCODING = "utf8";
const router = express.Router();

router.get("/", async (req, res) => {
  const koders = await readKoders(); 
  const edad = Number(req.query.edad);
  const count = Number(req.query.count);

  let respuesta = koders;
  console.log("Respuesta inicial:", respuesta);
  if (!Number.isNaN(edad)) {
    console.log("La edad del parametro es:", edad);
    respuesta = koders.filter((koder) => koder.edad === edad); 
    console.log("La nueva respuesta es:", respuesta);
  }

  if (!Number.isNaN(count)) {
    console.log("El parametro count es:", count);
    respuesta = respuesta.slice(0, count);
    console.log("La nueva respuesta es:", respuesta);
  }

  res.json(respuesta);
});

router.post("/", async (req, res) => {
  
  console.log("body:", req.body);
  const koder = req.body;

 
  const koders = await readKoders(); 

  koders.push(koder);


  await writeKoders({ koders });

 
  res.status(201); 
  res.json(koders);
});

router.patch("/:nombre", async (req, res) => {
  const nombre = req.params.nombre;

  console.log("body:", req.body);
  const newKoder = req.body;

  const koders = await readKoders();
  for (let i = 0; i < koders.length; i++) {
    const oldKoder = koders[i];

    if (oldKoder.nombre === nombre) {
      oldKoder.edad = newKoder.edad;
      oldKoder.genero = newKoder.genero;
    }
  }
  await writeKoders({ koders });
  res.status(200); 
  res.json(koders);
});

router.delete("/:nombre", async (req, res) => {
  const nombre = req.params.nombre;
  const koders = await readKoders();
  const newKoders = koders.filter((koder) => koder.nombre !== nombre);
  console.log(newKoders);

  const newObject = {
    koders: newKoders,
  };

  await writeKoders(newObject);
  res.status(200); 
  res.json(newKoders);
});

async function readKoders() {
  const archivo = await fs.readFile(FILENAME, ENCODING);
  const objeto = JSON.parse(archivo); 
  const koders = objeto.koders; 

  return koders;
}
async function writeKoders(newObject) {
  const nuevoArchivo = JSON.stringify(newObject, null, 2); 
  await fs.writeFile(FILENAME, nuevoArchivo, ENCODING);
}

module.exports = router;
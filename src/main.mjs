/* ESM script example */
import { fstat } from 'fs';
import { dirname, isAbsolute, resolve, parse } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { mdLinks, read } from './util.mjs';


/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)); */
//funcion recibe path
/* console.log(dirnameFunction) */
const ruta = '../src'
function verificarRuta(ruta){
  if(isAbsolute(ruta)==false){
    mdLinks(resolve(ruta))
    .then((data) => { console.log(data) })
  }
  else{
    mdLinks(resolve(ruta))
    .then((data) => { console.log(data) })
  }
}
verificarRuta(ruta)
for(const type of verificarRuta(ruta)){
  console.log(`this file es ${type}`)
}

/*
read(resolve(ruta))
    .then((data) => console.log(data)) */

/* console.log(dirnameFunction) */
//ingresa nombre de archivo.md
//ruta relativa
/* mdLinks(dirnameFunction + '/archivo.md')
  .then((data) => console.log(data.toString('utf8')))
  ****exname
 */


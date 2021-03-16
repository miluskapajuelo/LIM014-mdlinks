/* ESM script example */
import { fstat, lstat, ReadStream, Stats } from 'fs';
import { dirname, isAbsolute, resolve, parse } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { mdLinks, read} from './util.mjs';


const dirnameFunction = dirname(fileURLToPath(import.meta.url));
//funcion recibe path
console.log(dirnameFunction)
const ruta = /* dirnameFunction + '/archivo.md'; */ /* '../practica' */'../src'
function verificarRuta(ruta){
  console.log(ruta)
  //isabsolute ask if not..is relative so is false
  if(isAbsolute(ruta)==false){
    if(parse(ruta).ext ==''){
      /* console.log(parse(ruta).ext) */
    mdLinks(resolve(ruta))
    .then((data) => {
      for(const type of data){
      if(parse(type).ext == ".md"){console.log(resolve(ruta) + `/${type}`),
       read(resolve(ruta) + `/${type}`).then((hola) => console.log(hola.toString('utf8')))}
      }})}
    else if(parse(type).ext == ".md"){console.log(resolve(ruta) + `/${type}`),
    read(resolve(ruta) + `/${type}`).then((hola) => console.log(hola.toString('utf8')))}

    else{console.log("no hay nada en esta ruta")}}

  else{
    if(parse(ruta).ext ==''){
      mdLinks(ruta)
      .then((data) => {
        for(const type of data){
        if(parse(type).ext == ".md"){console.log(ruta + `/${type}`),
         read(resolve(ruta) + `/${type}`).then((hola) => console.log(hola.toString('utf8')))}
        else{
          console.log("no encuentro archivos .md")
        }}})}
    else if(parse(ruta).ext == ".md"){console.log(ruta),
    read(ruta).then((hola) => console.log(hola.toString('utf8')))
      }
    else{console.log("no hay nada en esta ruta")}
    }};
verificarRuta(ruta)

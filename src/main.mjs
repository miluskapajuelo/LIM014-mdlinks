/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname  } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import {
    readFile,
    PathDirectory,
    convertPath,
    getText,
} from './util.mjs'
import { readdir,statSync } from 'fs'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
// dirnameFunction + '/archivo.md'
const regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim



function rutas(path){
  let array=[];
  let ruta = convertPath(path)
  statSync(ruta)
    if (PathDirectory(ruta)) {
        readdir(ruta, (err, files) => {
            if (files.length == 0) {
                return 'no hay información aquí'
            }
            else {
                files.forEach((file) => {
                    rutas(ruta + `/${file}`)
                })
            }
        })
    }

    if (extname(ruta).toLowerCase() == '.md') {
      let text = regexLinkFull.exec(readFile(ruta))
      if(text !== null){
        let href = getText(...text)
        let Data = {'href': href[1],'text': href[0].substring(0, 50),'file': path};
        array.push(Data)
        return array}

              }

            }
const ruta = '../practica'
console.log(rutas(ruta))


/* console.log(rutas(ruta)); */

/* const mdLinks = function (ruta) {
    let path = convertPath(ruta)
          rutas(path)}

mdLinks(ruta)
 */

/* ESM script example */
import { lstatSync } from 'fs'
import { dirname, isAbsolute, resolve, parse } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readDir, readFile } from './util.mjs'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
//funcion recibe path
/* console.log(dirnameFunction) */
const ruta = /* dirnameFunction + '/archivo.md' */ /* '../practica' */ '../src'

function readPath(ruta) {
    const AbsolutePath = isAbsolute(ruta) ? resolve(ruta) : ruta;
    let statsPath = lstatSync(AbsolutePath)
    if (statsPath.isDirectory()) {
        readDir(ruta).then((data) => {
            for (const type of data) {
                readPath(AbsolutePath + `/${type}`) //path
            }
        })
    } else if (parse(ruta).ext == '.md') {
            readFile(ruta).then((hola) => console.log(hola.toString('utf8')))
    }}

readPath(ruta)

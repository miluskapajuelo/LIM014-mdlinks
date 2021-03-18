/* ESM script example */
import { lstatSync } from 'fs'
import { dirname, isAbsolute, resolve, parse } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readDir, readFile } from './util.mjs'
import * as fs from 'fs'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const ruta = /* dirnameFunction + '/archivo.md' */ /* '../practica' */ '../practica'

  function readPath(ruta) {
    const AbsolutePath = isAbsolute(ruta) ?  ruta: resolve(ruta); // convertir a absoluta
    let statsPath = lstatSync(AbsolutePath) //
    if (statsPath.isDirectory()) {
        let data = readDir(AbsolutePath)
            for (const type of data) {
                readPath(AbsolutePath + `/${type}`)
            }}
    else if(parse(AbsolutePath).ext == '.md'){
                console.log(readFile(AbsolutePath))}}

readPath(ruta)
















/*  */

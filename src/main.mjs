/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { reader, Finder } from './util.mjs'
import { readdirSync, statSync } from 'fs'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
// dirnameFunction + '/archivo.md'
const ruta = '../practica'

console.log(Finder(ruta))


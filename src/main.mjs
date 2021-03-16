/* ESM script example */
import { fstat, lstat, ReadStream, Stats } from 'fs'
import { dirname, isAbsolute, resolve, parse } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readDir, readFile } from './util.mjs'

const dirnameFunction = dirname(fileURLToPath(import.meta.url))
//funcion recibe path
console.log(dirnameFunction)
const ruta = /* dirnameFunction + '/archivo.md' */ /* '../practica' */ '../src'

function readPath(ruta) {
    const isRelative = isAbsolute(ruta) ? resolve(ruta) : ruta
    //isabsolute ask if not..is relative so is false
    if (isAbsolute(ruta) == false) {
        if (parse(ruta).ext == '') {
            readDir(isRelative).then((data) => {
                for (const type of data) {
                    if (parse(type).ext == '.md') {
                        console.log(resolve(ruta) + `/${type}`),
                            readFile(isRelative + `/${type}`).then((hola) =>
                                console.log(hola.toString('utf8'))
                            )
                    }
                }
            })
        } else if (parse(type).ext == '.md') {
            console.log(resolve(ruta) + `/${type}`),
                readFile(isRelative + `/${type}`).then((hola) =>
                    console.log(hola.toString('utf8'))
                )
        } else {
            console.log('no hay nada en esta ruta')
        }
    } else {
        if (parse(ruta).ext == '') {
            readPath(ruta).then((data) => {
                for (const type of data) {
                    if (parse(type).ext == '.md') {
                        console.log(ruta + `/${type}`),
                            readFile(isRelative + `/${type}`).then((hola) =>
                                console.log(hola.toString('utf8'))
                            )
                    } else {
                        console.log('no encuentro archivos .md')
                    }
                }
            })
        } else if (parse(ruta).ext == '.md') {
            console.log(ruta),
                readFile(ruta).then((hola) =>
                    console.log(hola.toString('utf8'))
                )
        } else {
            console.log('no hay nada en esta ruta')
        }
    }
}
readPath(ruta)

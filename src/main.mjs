/* ESM script example */
import { rejects } from 'assert'
import { link, lstatSync } from 'fs'
import { dirname, isAbsolute, resolve, extname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readDir, readFile, itExtist, PathDirectory,convertPath } from './util.js'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
const ruta = '../src' // dirnameFunction + '/archivo.md'

function mdLinks(ruta){
  /* return new Promise((resolve, reject)=>{ */
    let path = convertPath(ruta)
    if(itExtist(path)){
        if (PathDirectory(path)) {
          let data = readDir(path)
          for (const type of data) {
            mdLinks(path + `/${type}`)}}
        else if(extname(ruta) == '.md') //parse(AbsolutePath).ext
          {console.log(readFile(path))}}
    else{"no existe la ruta"}}

mdLinks(ruta)

 /*  mdLinks(ruta).then(links => {console.log(mdLinks(links))}).catch(error =>{console.log(error)}) */
















/*  */

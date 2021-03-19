/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readDir, readFile, itExtist, PathDirectory,convertPath } from './util.mjs'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
const ruta = '../src' // dirnameFunction + '/archivo.md'
const regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
let array = []

function mdLinks(ruta){
  /* return new Promise((resolve, reject)=>{ */
    let path = convertPath(ruta)
    if(itExtist(path)){
        if (PathDirectory(path)) {
          let data = readDir(path)
          for (const type of data) {
            mdLinks(path + `/${type}`)}}
        else if(extname(ruta) == '.md'){ //parse(AbsolutePath).ext
          let text = readFile(path).match(regexLinkFull)
          for (let link of text) {
              let href = link.match(regexLink)
              array.push({
                'href':href[1],
                'text': href[0],
                'file': ruta
              })}console.log(array)
            }
          }


    else{"no existe la ruta"}}

mdLinks(ruta)

 /*  mdLinks(ruta).then(links => {console.log(mdLinks(links))}).catch(error =>{console.log(error)}) */
















/*  */

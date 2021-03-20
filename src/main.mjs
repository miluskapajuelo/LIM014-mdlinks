/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readDir, readFile, itExtist, PathDirectory,convertPath } from './util.mjs'
import {stat, readdir, Stats} from 'fs'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
const ruta = '../src' // dirnameFunction + '/archivo.md'
const regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
let array = []

const mdLinks = function(ruta) {
      let path = convertPath(ruta)
      stat(path, function(err, stat) {
        if(err == null) {
          if (PathDirectory(path)) {
            readdir(path, (err, files) => {
              if (err){
                return("no hay información aquí")} //no funciona
              else {
                files.forEach(file => {
                  mdLinks(path + `/${file}`)
                })
              }
            })}
          else if(extname(ruta) == '.md'){

            let text = readFile(ruta).match(regexLinkFull)

            if(text){
            for (let link of text) {
                let href = link.match(regexLink)
                array.push({
                  'href':href[1],
                  'text': href[0],
                  'file': path
                })};
                console.log(array)
                return array

              }}}
        else if(err.code === 'ENOENT') {
            // file does not exist
            return ('La ruta no existe');
        }
       /*  else {
          return ('Some other error: ', err.code);
        } */
    })}

 mdLinks(ruta)


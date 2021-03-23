/* ESM script example */
//Import modules
import { count } from 'console';
import { text } from 'express';
import {readdirSync, readFileSync, statSync, existsSync } from 'fs'
import{isAbsolute, resolve, extname, normalize} from 'path';

//Regular Expressions
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
const regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim

//Short functions
const itExist = (path) => existsSync(path)
const PathDirectory = (path) => statSync(path).isDirectory()
const readDir = (path) => readdirSync(path)
const readFile = (path) =>readFileSync(path).toString('utf8')
const getText =(text) => text.match(regexLink)

//Convert path and normalize
const convertPath = (path) =>{

  let normalizePath = normalize(path);
  let result;

  if (!isAbsolute(normalizePath))   {
    result = resolve(normalizePath);
  }
  result = path;

  return result;
}

//Read path
const reader =(path) => {
  let array=[];
  if (extname(path)== '.md') {
  let text = regexLinkFull.exec(readFile(path))
    if(text !== null){
    let href = getText(...text)
    let Data = {'href': href[1],'text': href[0].substring(0, 50),'file': path};
    array.push(Data)
    }
  }
  return array}

//Find .md files
 function Finder(path) {
  let array2 = []
  let ruta = convertPath(path)
  if (PathDirectory(ruta)) {
      const routes = readDir(ruta)
      if (routes.length == 0) {
          return 'no hay información aquí'
      }
      routes.forEach((file) => {
          const route = Finder(ruta + `/${file}`)
          array2 = array2.concat(ruta + `/${file}`)
      })
  }

  return array2
}

//Export functions
export{reader, Finder };



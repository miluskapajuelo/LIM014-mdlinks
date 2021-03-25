/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { reader, Finder, itExist, convertPath } from './util.mjs'
import { readdirSync, statSync } from 'fs'
import { response } from 'express';
import fetch from 'node-fetch';

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
// dirnameFunction + '/archivo.md'

const validate = (info) =>{
  let array = [];
  for (let i=0; i < info.length;i++){
    function statu(res) {
      if(res.ok){
           let statusLink = {'file': info[i].file.slice(35), 'href':info[i].href, 'status': res.status, 'statusText':res.statusText, 'text':info[i].text}
           return statusLink
       } else {
            throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
       }
    }

  let fetchLink = fetch(info[i].href)
        .then(statu)
        .catch((error) => {
          if (error instanceof Error) {console.log(`HTTP ${error.status} ${error.statusText}`)}})
  array.push(fetchLink)

}
return array}

/* function noOption(hola) {
    hola.forEach(element => {return ({'href': element.href,'text':element.text,'file': element.file})})}
 */
export default function mdLinks(path, options) { //como colocar un valor por defecto
    return new Promise((resolve, reject) => {
        let pathConverted = convertPath(path)
        if (itExist(pathConverted)) {
          let FilesFinded = Finder(pathConverted)
            if (FilesFinded) {
                let FilesReader =reader(FilesFinded)

                if(options.validate)resolve(validate(FilesReader))
                else
                console.log(resolve(FilesReader))


            } else {
                reject('no hay archivos')
            }
        } else {
            reject('no existe el path')
        }
    })
}

/* resolve(noOption(FilesReader))  */


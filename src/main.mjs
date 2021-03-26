/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { reader, Finder, itExist, convertPath } from './util.mjs'
import { readdirSync, statSync } from 'fs'
import { response } from 'express';
import fetch from 'node-fetch';
import chalk from 'chalk'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const cwd = pathToFileURL(`${process.cwd()}/`).href
// dirnameFunction + '/archivo.md'
let statusLinksFiles;
const validate = (info) =>{
/*   console.log(info) */
  return new Promise((resolve, reject)=>{
    statusLinksFiles = info.map(link => {return fetch(link.href).then(res => {
      if(res.ok){
        let statusLink = {'file': link.file, 'href':link.href, 'status': res.status, 'statusText':res.statusText, 'text':link.text}
        console.log(statusLink)

    } else {
         throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
 })})})}

 Promise.all(statusLinksFiles)
 .then(res => res) //{resolve(info)}
 .catch((error) => {if (error instanceof Error){`HTTP ${error.status} ${error.statusText}`}})

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
                console.log(resolve(chalk.bold.white(FilesReader)))


            } else {
                reject(chalk.bold.red('Not files'))
            }
        } else {
            reject(chalk.bold.red('Path doesnt exist'))
        }
    })
}

/* resolve(noOption(FilesReader))  */


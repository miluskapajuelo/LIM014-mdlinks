/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { findePaths, propertiesLink, itExist, convertPath, findLinks } from './util.mjs'
import { readdirSync, statSync } from 'fs'
import { response } from 'express';
import fetch from 'node-fetch';
import chalk from 'chalk'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
/* const cwd = pathToFileURL(`${process.cwd()}/`).href */
// dirnameFunction + '/archivo.md'
let statusLinksFiles;
let status;
const validate = (info) =>{
let array = []
  return new Promise((resolve, reject)=>{

    statusLinksFiles = info.map(link => {return fetch(link.href).then(res => {
      status = res.status
      if(res.ok){
        let statusLink = {'file': link.file, 'href':link.href, 'status': status, 'statusText':'OK', 'text':link.text}
        resolve(statusLink)

    } else {
      let statusLink = {'file': link.file, 'href':link.href, 'status': status, 'statusText':'fail', 'text':link.text}
      reject(statusLink)

    }
 }).catch(err => {
  console.error({'file': link.file, 'href':link.href, 'status': 'fail', 'statusText':'not exist','text':link.text})})
 })})}

 Promise.all(statusLinksFiles)
 .then(res => res)
 .catch(error => error)

export default function mdLinks(path, options) { //como colocar un valor por defecto
    return new Promise((resolve, reject) => {
        let pathConverted = convertPath(path)
        if (itExist(pathConverted)) {
          let FilesFinded = findePaths(pathConverted)
            if (FilesFinded) {
                let filesReader =findLinks(FilesFinded)

                let linksFinder = propertiesLink(filesReader)
                if(options.validate)resolve(validate(linksFinder))
                else
                resolve(white(FilesReader))

            } else {
                reject(red('Not files'))
            }
        } else {
            reject(red('Path doesnt exist'))
        }
    })
}



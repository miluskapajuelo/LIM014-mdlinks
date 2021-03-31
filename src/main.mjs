/* ESM script example */
import { rejects } from 'assert'
import { dirname, extname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { findePaths, itExist, convertPath, findLinks/* , propertiesLink, getpath */} from './util.mjs'
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



 /* const stats = (info) =>{
  let  dataArray = new Set(info);
  let result = [...dataArray]

  console.log(dataArray+'/n Total: '  + info.length)}

  getUniqueListBy(aaa)


  function getUniqueListBy(info) {
    let a =  [...new Map(info.map(item => [item, item])).values()]
    console.log(a) */

  /* for (let i=0; i < info.length;i++){ */
    /* array.push(info[i].href) */
/*     const dataArray = new Set(array);
    total = info.length
 */


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

              if(options == ''){
                resolve(filesReader)
              }
              else{
              if(options.validate){resolve(validate(filesReader))}
              else {resolve(filesReader)}}
          }  else {
              reject('Not files')
          }
      } else {
          reject(red('Path doesnt exist'))
      }
  })
}

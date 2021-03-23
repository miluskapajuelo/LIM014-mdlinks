import { response } from 'express';
import fetch from 'node-fetch';

const ruta = '../src'
const info = [
  {
    href: 'http://www.google.com.pe/',
    text: 'google',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\src/archivo.md'
  },
  {
    href: 'http://www.google.com.pe/',
    text: 'google',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\src/archivo.md'
  }]

const theSame = () =>{
  for (let i=0; i < info.length;i++){
      console.log(info[i].file.slice(35), info[i].href, info[i].text)
}}
//theSame()

const validate = () =>{
  for (let i=0; i < info.length;i++){
    function checkResponseStatus(res) {
      if(res.ok){
           console.log(info[i].file.slice(35), info[i].href, res.status + " " +res.statusText, info[i].text)
       } else {
            throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
       }
    }

    fetch(info[i].href)
        .then(checkResponseStatus)
        .catch((error) => {
          if (error instanceof Error) {console.log(`HTTP ${error.status} ${error.statusText}`)}})

}}

//super fija 200-299

validate()

const stat = () =>{
  let array = []
  let result
  let total
  for (let i=0; i < info.length;i++){
      array.push(info[i].href)
      const dataArray = new Set(array);
      total = info.length
      result = [...dataArray]
}
console.log('Unique: ' + result.length)
console.log('Total: ' + info.length)}

//stat()


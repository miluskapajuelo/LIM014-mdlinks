import { response } from 'express';
import fetch from 'node-fetch';

const ruta = '../src'


const validate = () =>{
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
    }
  ]
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

import { response } from 'express';
import fetch from 'node-fetch';

const ruta = '../src'


let url = 'http://www.google.com.pe/';


//super fija 200-299
 function checkResponseStatus(res) {
  if(res.ok){
       console.log(res.status + " " +res.statusText)
   } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
   }
}

fetch(url)
    .then(checkResponseStatus)
    .catch((error) => {
      if (error instanceof Error) {console.log(`HTTP ${error.status} ${error.statusText}`)}})


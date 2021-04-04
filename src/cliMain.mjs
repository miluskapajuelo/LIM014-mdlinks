import mdLinks from './main.mjs'
import chalk from 'chalk'


const ruta = '../src'
mdLinks(ruta,{validate:true})
/* mdLinks(ruta,'') */
    .then(result => console.log(result))
    .catch((err) => console.log(err))

















/*
const stat = () =>{
  let array = []
  let result
  let total
  }
 */



#!/usr/bin/env node
const colors = require('colors')
const args = process.argv;
let path = args[2];
let things = args[3];
let options = {
    'validate':false,
    'stats':false,
    'statsValidate':false
}

if (args.length === 5) {
    if (args.includes('--stats' && '--validate')) {
            options.statsValidate = true //cambiar por validate necesito el valor de validate para obtener los broken links
        }}
if (args.length === 4) {
        if(things === '--validate'|| things === 'validate'){
    options.validate = true
}
if(things === '--stats' || things === 'stats'){
    options.stats = true
}}





/* process.cwd() */

const {mdLinks} = require('./api.js');
const  chalk = require('chalk');

if (!path) {
    console.log(colors.red('Ingrese la ruta de un directorio o archivo'));
  } else {
    mdLinks(path,options)
    .then(array => { if (!options.stats && !options.validate){
        array.forEach(element =>console.log(`${element.file}\t ${element.href}\t ${element.text}`))}
    else if (options.validate){
        array.forEach(element =>console.log(`${element.file}\t ${element.href}\t ${element.text}\t ${element.status}\t ${element.statusText}`))
    }
    else if (options.stats){console.log(`quantity: ${array[0]}\t unique: ${array[1]}`)
    }
    else if (options.statsValidate){console.log(`holii: ${array[0]}\t chauu: ${array[1]}`)}})
    .catch((err) => console.log(err))
  }
console.log(args.length )

/* 
  mdLinks(path,options)
  .then(result => console.log(result))
  .catch((err) => console.log(err)) */

  
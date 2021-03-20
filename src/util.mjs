/* ESM script example */
import { count } from 'console';
import {readdirSync, readFileSync, lstatSync, existsSync } from 'fs'
import{isAbsolute, resolve} from 'path';


const convertPath = (path) => {if(isAbsolute(path)){return path}else{return resolve(path)}}
const itExtist = (path) => {return existsSync(path)}
const PathDirectory = (path) => {return lstatSync(path).isDirectory()}
const readDir = (path) => {return readdirSync(path)}
const readFile = (path) =>{return readFileSync(path).toString('utf8')}




 export{ readDir, readFile, itExtist, PathDirectory,convertPath };



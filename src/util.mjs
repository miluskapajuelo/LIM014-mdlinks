/* ESM script example */
import { count } from 'console';
import { text } from 'express';
import {readdirSync, readFileSync, lstatSync, existsSync } from 'fs'
import{isAbsolute, resolve} from 'path';

const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim


const convertPath = (path) => isAbsolute(path) ? path : resolve(path)
const itExtist = (path) => existsSync(path)
const PathDirectory = (path) => lstatSync(path).isDirectory()
const readDir = (path) => readdirSync(path)
const readFile = (path) =>readFileSync(path).toString('utf8')
const getText =(text) => text.match(regexLink)

 export{ readDir, readFile, itExtist, PathDirectory,convertPath, getText };



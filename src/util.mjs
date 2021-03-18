/* ESM script example */
import { count } from 'console';
import {readdirSync, readFileSync, stat } from 'fs';

const readDir = (path) => {return readdirSync(path)}
const readFile = (path) =>{return readFileSync(path).toString('utf8')}




 export{ readDir, readFile };



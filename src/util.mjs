/* ESM script example */
import {readdirSync, readFileSync } from 'fs';

const readDir = (path) => {return readdirSync(path)}
const readFile = (path) =>{return readFileSync(path).toString('utf8')}




 export{ readDir, readFile };


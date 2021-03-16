/* ESM script example */
import * as fs from 'fs';
/* const fs = require('fs'); */

// reading folder
const readDir = (path) => {
    return new Promise((resolve, reject)=>{
      fs.readdir(path,(err, data)=>{
      resolve(data)}
      )}
    )}

const readFile = (path) =>{
      return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
             /* if(err) throw err;
            console.error("already") */
             resolve(data)})})}


 export{ readDir, readFile };


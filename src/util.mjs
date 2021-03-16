/* ESM script example */
import * as fs from 'fs';

// reading folder
const mdLinks = (path) => {
    return new Promise((resolve, reject)=>{
      fs.readdir(path,(err, data)=>{
      resolve(data)}
      )}
    )}

const read = (path) =>{
      return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
             /* if(err) throw err;
            console.error("already") */
             resolve(data)})})}

 export{ mdLinks, read };


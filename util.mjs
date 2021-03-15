/* ESM script example */
import * as fs from 'fs',

export const mdLinks =(path)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
          /*   if(err) throw err;
            console.error("already") */
            resolve(data)
        })
    })}

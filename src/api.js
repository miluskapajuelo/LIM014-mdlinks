const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./apiFunctions.js");
const fetch = require("node-fetch");
const paths = require("path");
const {table, getBorderCharacters} = require("table");

const config = {
  singleLine: true
};


/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
/* const cwd = pathToFileURL(`${process.cwd()}/`).href */
// dirnameFunction + '/archivo.md'
let statusLinksFiles;
let status;
const validate = (info) => {
  statusLinksFiles = info.map((link) => {
    return fetch(link.href)
      .then((res) => {
        status = res.status;
        if (status < 400 && status >= 200) {
          let statusLink = {
            file: link.file,
            href: link.href,
            status: status,
            statusText: "OK",
            text: link.text,  
          };
          return statusLink;
        } else {
          let statusLink = {
            file: link.file,
            href: link.href,
            status: status,
            statusText: "fail",
            text: link.text,
          };
          return statusLink;
        }
      })
      .catch((err) => {
        return {
          file: link.file,
          href: link.href,
          status: "fail",
          statusText: "fail",
          text: link.text,
        };
      });
  });
  
  return Promise.all(statusLinksFiles);
};

const unique = (info) => {
  
  let result;
  let array = info.map((Element) => Element.href);
  const dataArray = new Set(array);
  total = info.length;
  result = [...dataArray];
  return result;
};

const broken = (filesReader) =>{
  validate(filesReader).then((hola) => {
    let failPaths = hola.filter(
      (element) => element.statusText == "fail"
    )
    return failPaths
})}


function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    
    console.log(options)
    if(path){
    let pathConverted = convertPath(path);
    console.log(itExist(pathConverted))
 
    if (itExist(pathConverted)) {
      let FilesFinded = findePaths(pathConverted);
  
      if (FilesFinded) {
        let filesReader = findLinks(FilesFinded);
        
        if(filesReader){

          if (options.stats || options.validate) {
      
            if (options.stats) {
              if(options.validate){
                resolve(validate(filesReader).then((res) =>{
                  let brokenLinks = res.filter(element => element.statusText == "fail")
                  let casa = unique(filesReader) 
                  let aa = [casa.length, filesReader.length, brokenLinks.length]
                  return [aa]   
                })
                .catch((err) => (err)))
              }
              else{
               
                let casa = unique(filesReader);
               
                let array= [[casa.length, filesReader.length]]
              resolve(array);
              }
            }
            else{            
              resolve(validate(filesReader).then((res) => res.map(element => [paths.relative(path, element.file),element.href, element.text,element.status,element.statusText]))
                .catch((err) => (err)))
            } 
          }
          else{                   
          let array = filesReader.map(element => [paths.relative(path, element.file),element.href, element.text]) 
              resolve(array)
          }
        }
        
    } 
    else {
      reject("Not files");
      }
  }else {
    reject("Path doesnt exist");
  }
  }
  else {
    reject("enter a path");
  }
});
}

module.exports = {
  validate,
  mdLinks,
  unique
};

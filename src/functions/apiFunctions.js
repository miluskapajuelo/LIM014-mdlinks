const { readdirSync, readFileSync, statSync, existsSync } = require("fs");
const { isAbsolute, resolve, extname, normalize } = require("path");

//Regular Expressions
const regexLinkText = /\[([\w\s\d.|À-ÿ()]+)\]/gim;
const regexLinkLink =/\(((?:\/|https?:\/\/)[\w\d\s./?=#&_%~,\-.:]+)\)/gim;
const regexLinkFull = /\[([\w\s\d.|()À-ÿ]+)\]\([?:\/|https?:?\/\/]+[\w\d\s./?=#-&_%~,\-.:]+\)/gim;


//Short functions
const itExist = (path) => existsSync(path);
const PathDirectory = (path) => statSync(path).isDirectory();
const PathFile = (path) => statSync(path).isFile();
const readDir = (path) => readdirSync(path);
const readFile = (path) => readFileSync(path, "utf8");

//function 1
//Convert path and normalize
const convertPath = (path) => isAbsolute(path) ? path : resolve(path)  //normalize

function findePaths(path) {
    let filesFinded = [];
    /* let ruta = convertPath(path); */
    if (PathFile(path)) {
        if (extname(path) == ".md") filesFinded.push(path)
        return filesFinded;
    }
      const routes = readDir(path);  
      if (routes.length != 0) {
        routes.forEach((file) => {
          let files = findePaths(path + `/${file}`);
          filesFinded = filesFinded.concat(files);          
        });
      }
    
    return filesFinded;
    }

function findLinks(paths) {
  let objetsB;
  let objetsA;
  let propertiesLink = [];

  paths.forEach((path) => {
    let linkPlusTag = readFile(path).match(regexLinkFull);

    if (linkPlusTag !== null) {
      
      let count = linkPlusTag.length;
      
      if (count == 1) {
        linkPlusTag = linkPlusTag.toString();
        let href = linkPlusTag.match(regexLinkLink).join().slice(1, -1); 
        
        let text = linkPlusTag.match(regexLinkText).join().slice(1, -1)

        objetsA = {
          'href': href,
          'text': text,
          'file': path,
        };
        propertiesLink.push(objetsA);
      }
      if (count > 1) {
        linkPlusTag.forEach((link) => {
          
          let href = link.match(regexLinkLink).join().slice(1, -1);

          let text = link.match(regexLinkText).join().slice(1, -1);
 
          objetsB = {
            'href': href,
            'text': text,
            'file': path,
          };
          propertiesLink.push(objetsB);
        });
      }
    }
  });
  return propertiesLink;
}

function readLinks (b){
  console.log(b)
}

function itExisti (a, callback) {
  let b = a + 40;
  callback(b)
}

itExisti(3, readLinks)

//Export functions
module.exports = {
  convertPath,
  findePaths,
  readDir,
  PathDirectory,
  readFile,
  itExist,
  findLinks
};

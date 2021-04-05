const { readdirSync, readFileSync, statSync, existsSync } = require("fs");
const { isAbsolute, resolve, extname, normalize } = require("path");

//Regular Expressions
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gm;
const regexLinkFull = /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#-&_%~,.:]+)\)/gm;

//Short functions
const itExist = (path) => existsSync(path);
const PathDirectory = (path) => statSync(path).isDirectory();
const PathFile = (path) => statSync(path).isFile();
const readDir = (path) => readdirSync(path);
const readFile = (path) => readFileSync(path, "utf8");

//function 1
//Convert path and normalize
const convertPath = (path) => {
  if (!isAbsolute(normalize(path))) {
    return resolve(path);
  } else {
    return path;
  }
};


function findePaths(path) {
    let filesFinded = [];
    let ruta = convertPath(path);
    if (PathFile(ruta)) {
        if (extname(ruta) == ".md") filesFinded.push(ruta)
        return filesFinded;
    }
      const routes = readDir(ruta);
  
      if (routes.length !== 0) {
        routes.forEach((file) => {
          let files = findePaths(ruta + `/${file}`);
          filesFinded = filesFinded.concat(files);          
        });
      }
      
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

        let d = linkPlusTag.match(regexLink);

        objetsA = {
          href: d[1],
          text: d[0],
          file: path,
        };
        propertiesLink.push(objetsA);
      }
      if (count > 1) {
        linkPlusTag.forEach((link) => {
          let d = link.match(regexLink);
          objetsB = {
            href: d[1],
            text: d[0],
            file: path,
          };
          propertiesLink.push(objetsB);
        });
      }
    }
  });
  return propertiesLink;
}

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

const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./apiFunctions.js");
const fetch = require("node-fetch");

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

//como hago el test de est, es posible, lo saque por el statsvalidate
const validateLink = (filesReader) =>
  validate(filesReader)
    .then((res) => res)
    .catch((error) => error);

const statsValidate = (info) => {  
  validateLink(info)
    .then((hola) => { 
    let failPaths = hola.filter(element => element.statusText == 'fail');
    let array = {
      sizeLink: info.length,
      brokeLink: failPaths.length,
    };
    console.log(array)
    return array
    })  
    return {
      'sizeLink' : 200,
      'brokeLink': 200
    }
};


const stats = (info) => {
  let result;
  let array = info.map((Element) => Element.href);
  const dataArray = new Set(array);
  total = info.length;
  result = [...dataArray];

  return {
    sizeLink: info.length,
    uniqueLink: result.length,
  };
};

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    let pathConverted = convertPath(path);

    if (itExist(pathConverted)) {
      let FilesFinded = findePaths(pathConverted);

      if (FilesFinded) {
        let filesReader = findLinks(FilesFinded);

        if (options == "") {
          resolve(filesReader);
        } else {
          if (options.validate) {
            resolve(validateLink(filesReader));
          } else if (options.stats) {
            resolve(stats(filesReader));
          } else if (options.statsValidate) {
            resolve(statsValidate(filesReader));
          } else {
            resolve(filesReader);
          }
        }
      } else {
        reject("Not files");
      }
    } else {
      reject("Path doesnt exist");
    }
  });
}

module.exports = {
  validate,
  mdLinks,
};

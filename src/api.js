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

const stats = (info) => {
  let result;
  let array = info.map((Element) => Element.href);
  const dataArray = new Set(array);
  total = info.length;
  result = [...dataArray];
  return result;
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
            resolve(
              validate(filesReader)
                .then((res) => res)
                .catch((err) => err)
            );
          } else if (options.stats) {
            let casa = stats(filesReader);
            let holi = {
              sizeLink: filesReader.length,
              uniqueLink: casa.length,
            };
            resolve(holi);
          } else if (options.statsValidate) {
            validate(filesReader).then((hola) => {
              let failPaths = hola.filter(
                (element) => element.statusText == "fail"
              );
              let casa = stats(filesReader);
              let array = {
                sizeLink: hola.length,
                brokeLink: failPaths.length,
                unique: casa.length,
              };
              resolve(array);
            });
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

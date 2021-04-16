const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./functions/apiFunctions.js");

const { validate } = require("./functions/fetch");

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    if (path) {
      let pathConverted = convertPath(path);
      if (itExist(pathConverted)) {
        let FilesFinded = findePaths(pathConverted);
        if (FilesFinded.length != 0) {
          let filesReader = findLinks(FilesFinded);
          if (filesReader.length != []) {
            if (options.validate) {
              resolve(
                validate(filesReader)
                  .then((res) => res)
                  .catch((err) => err)
              );
            } else {
              resolve(filesReader);
            }
          } else {
            reject("This path hasnt links, write again mdLinks");
          }
        } else {
          reject("This path hasnt files or directories, write again mdLinks");
        }
      } else {
        reject("Path doesnt exist, write again mdLinks");
      }
    } else {
      reject("Enter a path please, write again mdLinks");
    }
  });
}


/* mdLinks("../test", {validate:true}).then(res=>(console.log(res))).catch(err => console.error(err)) */

module.exports = {
  mdLinks,
};

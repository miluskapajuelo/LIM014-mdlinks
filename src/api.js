const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./apiFunctions.js");
const { validate} = require("./apiCli.js");
const paths = require("path");

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    let pathConverted = convertPath(path);

    if (itExist(pathConverted)) {
      let FilesFinded = findePaths(pathConverted);

      if (FilesFinded) {
        let filesReader = findLinks(FilesFinded);
        if (filesReader) {
              if (options.validate) {
              resolve(
                validate(filesReader)
                  .then((res) => res)
                  .catch((err) => err)
              );
            }
           else {
              resolve(filesReader);
            };
          
        } else {
          reject("This path hasnt files .md, write again mdLinks");
        }
      } else {
        reject("Path doesnt exist, write again mdLinks");
      }
    } else {
      reject("Enter a path please, write again mdLinks");
    }
  });
}
mdLinks('../test', { validate: false})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
module.exports = {
  mdLinks,
};

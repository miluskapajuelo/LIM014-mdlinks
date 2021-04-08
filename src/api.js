const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./apiFunctions.js");
const { validate, unique } = require("./apiCli.js");
const paths = require("path");

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    let pathConverted = convertPath(path);

    if (itExist(pathConverted)) {
      let FilesFinded = findePaths(pathConverted);

      if (FilesFinded) {
        let filesReader = findLinks(FilesFinded);
        if (filesReader) {
          if (options.stats || options.validate) {
            if (options.stats) {
              if (options.validate) {
                resolve(
                  validate(filesReader)
                    .then((res) => {
                      let brokenLinks = res.filter(
                        (element) => element.statusText == "fail"
                      );
                      let uniqueValue = unique(filesReader);
                      let array = {
                        "Total: ": filesReader.length,
                        "Unique: ": uniqueValue.length,
                        "Broken: ": brokenLinks.length,
                      };
                      return array;
                    })
                    .catch((err) => err)
                );
              } else {
                let uniqueValue = unique(filesReader);

                let array = `Total: ${filesReader.length}\n Unique: ${uniqueValue.length}`;
                resolve(array);
              }
            } else {
              resolve(
                validate(filesReader)
                  .then((res) => res)
                  .catch((err) => err)
              );
            }
          } else {
            filesReader.forEach((element) => {
              let array = {
                "file: ": paths.relative(path, element.file),
                "href: ": element.href,
                "total: ": element.text,
              };
              resolve(array);
            });
          }
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
mdLinks("", { validate: true, stats: false })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
module.exports = {
  mdLinks,
};

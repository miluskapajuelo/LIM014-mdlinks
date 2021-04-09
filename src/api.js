const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./functions/apiFunctions.js");
const paths = require("path");
const fetch = require("node-fetch");

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

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    if(path){
    let pathConverted = convertPath(path);

    if (itExist(pathConverted)) {
      let FilesFinded = findePaths(pathConverted);

      if (FilesFinded.length != 0) {
        let filesReader = findLinks(FilesFinded);
        if (filesReader) {
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
  }
  else {
    reject("Enter a path please, write again mdLinks");
  }});
}
/* mdLinks('../test', { validate: false})
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */
module.exports = {
  mdLinks,
  validate,
};

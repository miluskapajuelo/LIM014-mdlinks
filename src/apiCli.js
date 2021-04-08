const {
  findePaths,
  itExist,
  convertPath,
  findLinks,
} = require("./apiFunctions.js");
const fetch = require("node-fetch");
const paths = require("path");

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

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    if (path) {
      let pathConverted = convertPath(path);
      if (itExist(pathConverted)) {
        let FilesFinded = findePaths(pathConverted);
        if (FilesFinded.length != 0) {
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
                        let array = [
                          'Total: '+ filesReader.length,
                          'Unique: '+ uniqueValue.length,
                          'Broken: '+  brokenLinks.length,
                        ];
                        return [array];
                      })
                      .catch((err) => err)
                  );
                } else {
                  let uniqueValue = unique(filesReader);

                  let array = [['Total: '+  filesReader.length, 'Unique: '+ uniqueValue.length]];
                  resolve(array);
                }
              } else {
                resolve(
                  validate(filesReader)
                    .then((res) =>
                      res.map((element) => [
                        'file: '+paths.relative(path, element.file),
                        'href: '+ element.href,
                        'statusText: '+ element.statusText,
                        'status: '+ element.status,
                        'text: '+ element.text,
                        
                      ])
                    )
                    .catch((err) => err)
                );
              }
            } else {
              let array = filesReader.map((element) => [
                'file: '+ paths.relative(path, element.file),
                'href: '+ element.href,
                'total: '+ element.text,
              ]);
              resolve(array);
            }
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

module.exports = {
  validate,
  mdLinks,
  unique,
};

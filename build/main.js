"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mdLinks;
exports.validate = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _util = require("./util.mjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */

/* const cwd = pathToFileURL(`${process.cwd()}/`).href */
// dirnameFunction + '/archivo.md'
var statusLinksFiles;
var status;

var validate = function validate(info) {
  statusLinksFiles = info.map(function (link) {
    return (0, _nodeFetch["default"])(link.href).then(function (res) {
      status = res.status;

      if (
      /* res.ok */
      status < 400 && status >= 200) {
        var statusLink = {
          file: link.file,
          href: link.href,
          status: status,
          statusText: 'OK',
          text: link.text
        };
        return statusLink;
      } else {
        var _statusLink = {
          file: link.file,
          href: link.href,
          status: status,
          statusText: 'fail',
          text: link.text
        };
        return _statusLink;
      }
    })["catch"](function (err) {
      return {
        file: link.file,
        href: link.href,
        status: 'fail',
        statusText: 'not exist',
        text: link.text
      };
    });
  });
  return Promise.all(statusLinksFiles);
};

exports.validate = validate;

function mdLinks(path, options) {
  return new Promise(function (resolve, reject) {
    var pathConverted = (0, _util.convertPath)(path);

    if ((0, _util.itExist)(pathConverted)) {
      var FilesFinded = (0, _util.findePaths)(pathConverted);

      if (FilesFinded) {
        var filesReader = (0, _util.findLinks)(FilesFinded);

        if (options == '') {
          resolve(filesReader);
        } else {
          if (options.validate) {
            resolve(validate(filesReader).then(function (res) {
              return res;
            }))["catch"](function (error) {
              return error;
            });
          } else {
            resolve(filesReader);
          }
        }
      } else {
        reject('Not files');
      }
    } else {
      reject('Path doesnt exist');
    }
  });
}
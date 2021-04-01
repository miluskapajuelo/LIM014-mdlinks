"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mdLinks;

var _assert = require("assert");

var _path = require("path");

var _url = require("url");

var _util = require("./util.mjs");

var _fs = require("fs");

var _express = require("express");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* ESM script example */

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */

/* const cwd = pathToFileURL(`${process.cwd()}/`).href */
// dirnameFunction + '/archivo.md'
var statusLinksFiles;
var status;

var validate = function validate(info) {
  var array = [];
  return new Promise(function (resolve, reject) {
    statusLinksFiles = info.map(function (link) {
      return (0, _nodeFetch["default"])(link.href).then(function (res) {
        status = res.status;

        if (res.ok) {
          var statusLink = {
            'file': link.file,
            'href': link.href,
            'status': status,
            'statusText': 'OK',
            'text': link.text
          };
          resolve(statusLink);
        } else {
          var _statusLink = {
            'file': link.file,
            'href': link.href,
            'status': status,
            'statusText': 'fail',
            'text': link.text
          };
          reject(_statusLink);
        }
      })["catch"](function (err) {
        console.error({
          'file': link.file,
          'href': link.href,
          'status': 'fail',
          'statusText': 'not exist',
          'text': link.text
        });
      });
    });
  });
};

Promise.all(statusLinksFiles).then(function (res) {
  return res;
})["catch"](function (error) {
  return error;
});

function mdLinks(path, options) {
  //como colocar un valor por defecto
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
            resolve(validate(filesReader));
          } else {
            resolve(filesReader);
          }
        }
      } else {
        reject('Not files');
      }
    } else {
      reject(red('Path doesnt exist'));
    }
  });
}

module.exports = exports.default;
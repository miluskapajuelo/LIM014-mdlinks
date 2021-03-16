"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = exports.readDir = void 0;

/* ESM script example */

/* import * as fs from 'fs'; */
var fs = require('fs'); // reading folder


var readDir = function readDir(path) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (err, data) {
      resolve(data);
    });
  });
};

exports.readDir = readDir;

var readFile = function readFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      /* if(err) throw err;
      console.error("already") */
      resolve(data);
    });
  });
};

exports.readFile = readFile;
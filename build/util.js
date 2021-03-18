"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = exports.readDir = void 0;

var fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ESM script example */

/* const fs = require('fs'); */
// reading folder
const readDir = path => {
  return new Promise((resolve, reject) => {
    fs.readdirSync(path, (err, data) => {
      resolve(data);
    });
  });
};

exports.readDir = readDir;

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFileSync(path, (err, data) => {
      /* if(err) throw err;
      console.error("already") */
      resolve(data);
    });
  });
};

exports.readFile = readFile;
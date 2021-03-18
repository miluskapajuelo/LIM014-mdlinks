"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = exports.readDir = void 0;

var _console = require("console");

var _fs = require("fs");

/* ESM script example */
const readDir = path => {
  return (0, _fs.readdirSync)(path);
};

exports.readDir = readDir;

const readFile = path => {
  return (0, _fs.readFileSync)(path).toString('utf8');
};

exports.readFile = readFile;
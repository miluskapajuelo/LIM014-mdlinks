"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPath = exports.PathDirectory = exports.itExtist = exports.readFile = exports.readDir = void 0;

var _console = require("console");

var _fs = require("fs");

var _path = require("path");

/* ESM script example */
var convertPath = function convertPath(path) {
  if ((0, _path.isAbsolute)(path)) {
    return path;
  } else {
    return (0, _path.resolve)(path);
  }
};

exports.convertPath = convertPath;

var itExtist = function itExtist(path) {
  return (0, _fs.existsSync)(path);
};

exports.itExtist = itExtist;

var PathDirectory = function PathDirectory(path) {
  return (0, _fs.lstatSync)(path).isDirectory();
};

exports.PathDirectory = PathDirectory;

var readDir = function readDir(path) {
  return (0, _fs.readdirSync)(path);
};

exports.readDir = readDir;

var readFile = function readFile(path) {
  return (0, _fs.readFileSync)(path).toString('utf8');
};

exports.readFile = readFile;
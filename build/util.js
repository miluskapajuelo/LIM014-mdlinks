"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Finder = Finder;
exports.getText = exports.readFile = exports.PathDirectory = exports.readDir = exports.reader = exports.convertPath = void 0;

var _console = require("console");

var _express = require("express");

var _fs = require("fs");

var _path = require("path");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Regular Expressions
var regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim;
var regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim; //Short functions

/* const itExist = (path) => existsSync(path) */

var PathDirectory = function PathDirectory(path) {
  return (0, _fs.statSync)(path).isDirectory();
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

var getText = function getText(text) {
  return text.match(regexLink);
}; //function 1
//Convert path and normalize


exports.getText = getText;

var convertPath = function convertPath(path) {
  var normalizePath = (0, _path.normalize)(path);
  var result;

  if (!(0, _path.isAbsolute)(normalizePath)) {
    return (0, _path.resolve)(normalizePath);
  }

  result = path;
  return result;
}; //Read path


exports.convertPath = convertPath;

var reader = function reader(path) {
  var array = [];

  if ((0, _path.extname)(path) == '.md') {
    var _text = regexLinkFull.exec(readFile(path));

    if (_text !== null) {
      var href = getText.apply(void 0, _toConsumableArray(_text));
      var Data = {
        'href': href[1],
        'text': href[0].substring(0, 50),
        'file': path
      };
      array.push(Data);
    }
  }

  return array;
}; //Find .md files


exports.reader = reader;

function Finder(path) {
  var array2 = [];
  var ruta = convertPath(path);

  if (PathDirectory(ruta)) {
    var routes = readDir(ruta);

    if (routes.length == 0) {
      return 'no hay información aquí';
    }

    routes.forEach(function (file) {
      var route = Finder(ruta + "/".concat(file));
      array2 = array2.concat(ruta + "/".concat(file));
    });
  }

  return array2;
} //Export functions
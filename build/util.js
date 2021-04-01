"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findePaths = findePaths;
exports.findLinks = findLinks;
exports.itExist = exports.readFile = exports.PathDirectory = exports.readDir = exports.convertPath = void 0;

var _console = require("console");

var _express = require("express");

var _fs = require("fs");

var _path = require("path");

/* ESM script example */
//Import modules
//Regular Expressions
var regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim;
var pathReg = /\.\.\\[a-zA-Z0-9.-/]+/gim;
var regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim; //Short functions

var itExist = function itExist(path) {
  return (0, _fs.existsSync)(path);
};

exports.itExist = itExist;

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
}; //function 1
//Convert path and normalize


exports.readFile = readFile;

var convertPath = function convertPath(path) {
  if (!(0, _path.isAbsolute)((0, _path.normalize)(path))) {
    return (0, _path.resolve)(path);
  } else {
    return path;
  }
};

exports.convertPath = convertPath;
var array2 = []; //Find .md files

function findePaths(path) {
  var ruta = convertPath(path);

  if (PathDirectory(ruta)) {
    var routes = readDir(ruta);

    if (routes.length !== 0) {
      routes.forEach(function (file) {
        findePaths(ruta + "/".concat(file));
        if ((0, _path.extname)(file) == '.md') array2.push(ruta + "/".concat(file));
      });
    }
  }

  return array2;
}

function findLinks(path) {
  var objets;
  var objetsA;
  var a = [];
  path.forEach(function (Element) {
    var c = readFile(Element).match(regexLinkFull);
    var count = c.length;

    if (c !== null) {
      if (count == 1) {
        c = c.toString();
        var d = c.match(regexLink);
        objets = {
          'href': d[1],
          'text': d[0],
          'file': Element
        };
        a.push(objets);
      }

      if (count > 1) {
        c.forEach(function (Element2) {
          var d = Element2.match(regexLink);
          objetsA = {
            'href': d[1],
            'text': d[0],
            'file': Element
          };
          a.push(objetsA);
        });
      }
    }
  });
  return a;
} //Export functions
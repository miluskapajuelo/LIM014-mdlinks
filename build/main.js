"use strict";

var _assert = require("assert");

var _path = require("path");

var _url = require("url");

var _util = require("./util");

var _fs = require("fs");

/* ESM script example */

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
var cwd = (0, _url.pathToFileURL)("".concat(process.cwd(), "/")).href;
var ruta = '../practica'; // dirnameFunction + '/archivo.md'

var regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim;
var regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim;
var array = [];

var rutas = function rutas(path) {
  if ((0, _util.PathDirectory)(path)) {
    (0, _fs.readdir)(path, function (err, files) {
      /* console.log(files) */
      if (files.length == 0) {
        return 'no hay información aquí';
      } //no funciona
      else {
          files.forEach(function (file) {
            rutas(path + "/".concat(file));
          });
        }
    });
  }

  if ((0, _path.extname)(path) == '.md') {
    console.log(path);
    array.push(path);
    return array;
    /* let text = readFile(path).match(regexLinkFull)
    if (text) {
      console.log(text)
        for (let link of text) {
            let href = link.match(regexLink)
            array.push({
                href: href[1],
                text: href[0],
                file: path,
            })
        }
        return array
    } */
  }
};

var mdLinks = function mdLinks(ruta) {
  var path = (0, _util.convertPath)(ruta);
  (0, _fs.stat)(path, function (err, stat) {
    if (err == null) {
      console.log(rutas(path));
      /* if (PathDirectory(path)) {
          readdir(path, (err, files) => {
                if (files.length == 0) {
                  console.log('no hay información aquí')
              }
              else {
                  files.forEach((file) => {
                      mdLinks(path + `/${file}`)
                  })
              }
          })
      } else if (extname(ruta) == '.md') {
          let text = readFile(ruta).match(regexLinkFull)
          if (text) {
              for (let link of text) {
                  let href = link.match(regexLink)
                  array.push({
                      href: href[1],
                      text: href[0],
                      file: path,
                  })
              }
               console.log(array)
          }
      } */
    } else if (err.code === 'ENOENT') {
      // file does not exist
      console.log('La ruta no existe');
    }
    /*  else {
      return ('Some other error: ', err.code);
    } */

  });
};

mdLinks(ruta);
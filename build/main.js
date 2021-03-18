"use strict";

var fs = _interopRequireDefault(require("fs"));

var _path = require("path");

var _url = require("url");

var _util = require("./util");

var _markdownIt = _interopRequireDefault(require("markdown-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ESM script example */

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
//funcion recibe path
const ruta =
/* dirnameFunction + '/archivo.md' */

/* '../practica' */
'../src';

function readPath(ruta) {
  const AbsolutePath = (0, _path.isAbsolute)(ruta) ? ruta : (0, _path.resolve)(ruta); // convertir a absoluta

  let statsPath = (0, fs.lstatSync)(AbsolutePath); //

  if (statsPath.isDirectory()) {
    (0, _util.readDir)(ruta).then(data => {
      for (const type of data) {
        readPath(AbsolutePath + `/${type}`);
      }
    });
  } else if ((0, _path.parse)(ruta).ext == '.md') {
    (0, _util.readFile)(ruta).then(hola =>
    /* if(MarkdownIt.areThereL(hola)){
        const fileLink = MarkdownIt
    }  */
    console.log(hola.toString('utf8')));
  }
}

readPath(ruta);
/*  */
"use strict";

var fs = _interopRequireDefault(require("fs"));

var _path = require("path");

var _url = require("url");

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ESM script example */

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
const ruta =
/* dirnameFunction + '/archivo.md' */

/* '../practica' */
'../practica';

function readPath(ruta) {
  const AbsolutePath = (0, _path.isAbsolute)(ruta) ? ruta : (0, _path.resolve)(ruta); // convertir a absoluta

  let statsPath = (0, fs.lstatSync)(AbsolutePath); //

  if (statsPath.isDirectory()) {
    let data = (0, _util.readDir)(AbsolutePath);

    for (const type of data) {
      readPath(AbsolutePath + `/${type}`);
    }
  } else if ((0, _path.parse)(AbsolutePath).ext == '.md') {
    //modulos
    console.log((0, _util.readFile)(AbsolutePath));
  }
}

readPath(ruta);
/*  */
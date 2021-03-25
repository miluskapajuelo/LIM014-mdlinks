"use strict";

var _assert = require("assert");

var _path = require("path");

var _url = require("url");

var _util = require("./util.mjs");

var _fs = require("fs");

/* ESM script example */

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
var cwd = (0, _url.pathToFileURL)("".concat(process.cwd(), "/")).href; // dirnameFunction + '/archivo.md'

var ruta = '../practica';
console.log((0, _util.Finder)(ruta));
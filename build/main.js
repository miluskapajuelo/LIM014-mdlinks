"use strict";

var _assert = require("assert");

var _fs = require("fs");

var _path = require("path");

var _url = require("url");

var _util = require("./util.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
var cwd = (0, _url.pathToFileURL)("".concat(process.cwd(), "/")).href;
var ruta = '../src'; // dirnameFunction + '/archivo.md'

function mdLinks(ruta) {
  /* return new Promise((resolve, reject)=>{ */
  var path = (0, _util.convertPath)(ruta);

  if ((0, _util.itExtist)(path)) {
    if ((0, _util.PathDirectory)(path)) {
      var data = (0, _util.readDir)(path);

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var type = _step.value;
          mdLinks(path + "/".concat(type));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if ((0, _path.extname)(ruta) == '.md') //parse(AbsolutePath).ext
      {
        console.log((0, _util.readFile)(path));
      }
  } else {
    "no existe la ruta";
  }
}

mdLinks(ruta);
/*  mdLinks(ruta).then(links => {console.log(mdLinks(links))}).catch(error =>{console.log(error)}) */

/*  */
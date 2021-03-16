"use strict";

var _fs = require("fs");

var _path = require("path");

var _url = require("url");

var _util = require("./util.mjs");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dirnameFunction = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url)); //funcion recibe path

console.log(dirnameFunction);
var ruta =
/* dirnameFunction + '/archivo.md' */

/* '../practica' */
'../src';

function readPath(ruta) {
  var isRelative = (0, _path.isAbsolute)(ruta) ? (0, _path.resolve)(ruta) : ruta; //isabsolute ask if not..is relative so is false

  if ((0, _path.isAbsolute)(ruta) == false) {
    if ((0, _path.parse)(ruta).ext == '') {
      (0, _util.readDir)(isRelative).then(function (data) {
        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _type = _step.value;

            if ((0, _path.parse)(_type).ext == ".md") {
              console.log((0, _path.resolve)(ruta) + "/".concat(_type)), (0, _util.readFile)(isRelative + "/".concat(_type)).then(function (hola) {
                return console.log(hola.toString('utf8'));
              });
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    } else if ((0, _path.parse)(type).ext == ".md") {
      console.log((0, _path.resolve)(ruta) + "/".concat(type)), (0, _util.readFile)(isRelative + "/".concat(type)).then(function (hola) {
        return console.log(hola.toString('utf8'));
      });
    } else {
      console.log("no hay nada en esta ruta");
    }
  } else {
    if ((0, _path.parse)(ruta).ext == '') {
      readPath(ruta).then(function (data) {
        var _iterator2 = _createForOfIteratorHelper(data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _type2 = _step2.value;

            if ((0, _path.parse)(_type2).ext == ".md") {
              console.log(ruta + "/".concat(_type2)), (0, _util.readFile)(isRelative + "/".concat(_type2)).then(function (hola) {
                return console.log(hola.toString('utf8'));
              });
            } else {
              console.log("no encuentro archivos .md");
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    } else if ((0, _path.parse)(ruta).ext == ".md") {
      console.log(ruta), (0, _util.readFile)(ruta).then(function (hola) {
        return console.log(hola.toString('utf8'));
      });
    } else {
      console.log("no hay nada en esta ruta");
    }
  }
}

;
readPath(ruta);
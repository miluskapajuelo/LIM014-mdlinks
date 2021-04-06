#!/usr/bin/env node
const colors = require("colors");
const paths = require("path");
/* const chalk = require('chalk') */
const args = process.argv;
let path = args[2];
let things = args[3];
let options = {
  validate: false,
  stats: false,
  statsValidate: false,
};

if (args.length === 5) {
  if (args.includes("--stats" && "--validate")) {
    options.statsValidate = true;
  }
}
if (args.length === 4) {
  if (things === "--validate" || things === "validate") {
    options.validate = true;
  }
  if (things === "--stats" || things === "stats") {
    options.stats = true;
  }
}

/* process.cwd() */

const { mdLinks } = require("./api.js");
const chalk = require("chalk");

if (!path) {
  console.log(colors.red("Ingrese la ruta de un directorio o archivo"));
} else {
  mdLinks(path, options)
    .then((array) => {
      if (!options.stats && !options.validate && !options.statsValidate) {
        array.forEach((element) => {
          const file = paths.relative(path, element.file);
          console.log(`${file}\t ${element.href}\t ${element.text}`);
        });
      } else if (options.validate) {
        array.forEach((element) => {
          const file = paths.relative(path, element.file);
          console.log(`${file}\t ${element.href}\t ${element.text}\t ${element.status}\t ${element.statusText}`
          );
        });
      } else if (options.stats) {
        console.log(`Total: ${array.sizeLink}\t Unique: ${array.uniqueLink}`);
      } else if (options.statsValidate) {
        console.log(`Total: ${array.sizeLink}\t broken: ${array.brokeLink} \t unique: ${array.unique} `);
      }
    })
    .catch((err) => console.log(err));
}


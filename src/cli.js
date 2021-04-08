#!/usr/bin/env node
const colors = require("colors");
const { table } = require("table");
const { mdLinks } = require("./api.js");
const chalk = require("chalk");

const config = {
  singleLine: true,
};

var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type:'input',
      message: "Enter a path",
      name: "path",
    },
    {
      type: "list",
      message: "Pick up the options to see stadistics information",
      name: "option",
      choices: ["--basic", "--validate", "--stats", "--validate & --stats", 'Help, need instructions :)'],
    },
  ])
  .then((answers) => { 
    let paths = answers.path;
    let options = answers.option;
    if (options == "--basic") {
      mdLinks(paths, "")
        .then((res) => console.log(table(res, config)))
        .catch((err) => console.log(err));
    } else if (options == "Help, need instructions :)") {
      let res = [
        ["files", "Show you basic information about your files"],
        ["validate", "Show you status information about links finded in files"],
        ["stats", "Show you statistical data. Total links, Unique links"],    
        ["stats & validate", "Show you statistical data. Total links, Unique links, Broke links"]
      ]
      console.log(table(res, config))
    } else if (options == "--validate") {
      mdLinks(paths, { validate: true })
        .then((res) => console.log(table(res, config)))
        .catch((err) => console.log(err));
    } else if (options == "--stats") {
      mdLinks(paths, {stats:true})
        .then((res) => console.log(table(res, config))) 
        .catch((err) => console.error("err"));
    } else {
      mdLinks(paths, { validate: true, stats: true })
        .then((res) => console.log(table(res, config)))
        .catch((err) => console.log(err));
    }
  })
 /*  .catch((error) => {
    if (error.isTtyError) {
      console.log(error + "2");
    } else {
      console.log(chalk.magenta(error + "1"));
    }
  }); */


  /* if (option.includes("--validate")) {
  options.validate = true;
}
if (option.includes("--stats")) {
  options.stats = true;
} */

/* const args = process.argv;
let path = args[2];
let option = args;

 */

/* if (!path) {
  console.log(colors.red("Please enter a path"));
} else {
  mdLinks(path, options)
    .then(res => console.log(table(res, config)))
    .catch((err) => console.log(err))
}
 */

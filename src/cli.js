#!/usr/bin/env node
const colors = require("colors");
const { table } = require("table");
const { mdLinks } = require("./api.js");
const { resumeInfo } = require("./functions/cliFunctions");
const chalk = require("chalk");
const { choose } = require("../src/functions/options.js");
const paths = require("path");

const config = {
  singleLine: true,
};

var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter a path",
      name: "path",
    },
    {
      type: "list",
      message: "Pick up the options to see stadistics information",
      name: "option",
      choices: [
        "--basic",
        "--validate",
        "--stats",
        "--validate & --stats",
        "Help, need instructions :)",
      ],
    },
  ])
  .then((answers) => {
    let option = answers.option;
    let route = answers.path;
    if (option == "Help, need instructions :)") {
      console.log(table(help(option), config));
    } //console.log(table(optionChoosen, config)
    else if (option) {
      if (option == "--validate & --stats") {
        let optionChoosen = { validate: true, stats: true };
        mdLinks(route, optionChoosen)
          .then((res) => {
            let finalArray = resumeInfo(res, 3);
            console.log(table(finalArray, config));
          }) //table(res, config))
          .catch((err) => console.log(chalk.inverse(err)));
      } else if (option == "--validate") {
        let optionChoosen = { validate: true, stats: false };
        mdLinks(route, optionChoosen)
          .then((res) => {
            let finalArray = res.map((element) => [
              "File: " + paths.relative(route, element.file),
              "Href: " + element.href,
              "Status: " + element.status,
              "StatusText: " + element.statusText,
              "Text: " + element.text,
            ]);
            console.log(table(finalArray, config));
          })
          .catch((err) => console.log(chalk.inverse(err)));
      } else if (option == "--stats") {
        let optionChoosen = { validate: false, stats: true };
        mdLinks(route, optionChoosen)
          .then((res) => {
            let finalArray = resumeInfo(res, 2);
            console.log(table(finalArray, config));
          })
          .catch((err) => console.log(chalk.inverse(err)));
      }
      else{
        let optionChoosen = { validate: false, stats: false };
      mdLinks(route, optionChoosen)
        .then((res) => {
          let finalArray = res.map((element) => [
            "File: " + paths.relative(route, element.file),
            "Href: " + element.href,
            "Text: " + element.text,
          ]);
          console.log(table(finalArray, config));
        })
      }
    }
  }).catch(err => console.log(chalk.inverse("Try again")));

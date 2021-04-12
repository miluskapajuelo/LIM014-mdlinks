#!/usr/bin/env node
const { table } = require("table");
const { mdLinks } = require("./api.js");
const { resumeInfo } = require("./functions/cliFunctions");
const chalk = require("chalk");
const paths = require("path");

const config = {
  /* singleLine: true, */
  columns: {
    0: {
      width: 20
    },
    1: {
      width: 42
    },
    4: {
      width: 24
    }
}}

const messageHelp= [
  ["files", "Show you basic information about your files"],
  ["validate", "Show you status information about links finded in files"],
  ["stats", "Show you statistical data. Total links, Unique links"],
  [
    "stats & validate",
    "Show you statistical data. Total links, Unique links, Broke links",
  ],
]

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
      console.log(table(messageHelp, config));
    } 
    else if (option) {
      if (option == "--validate & --stats") {
        let optionChoosen = { validate: true, stats: true };
        mdLinks(route, optionChoosen)
          .then((res) => {
            let finalArray = resumeInfo(res, 3);
            console.log(table(finalArray, config));
          }) 
          .catch((err) => console.log(chalk.inverse(err)));
      } else if (option == "--validate") {
        let optionChoosen = { validate: true, stats: false };
        mdLinks(route, optionChoosen)
          .then((res) => {
            const finalTble=[];
             res.map((element) => {
              const rout = paths.relative(__dirname,element.file);
              const text = element.text.length > 50 ?  element.text.slice(0,50):element.text
              const statusLink = element.status === 200 ? chalk.green(element.statusText) : chalk.red(element.statusText);
              finalTble= [
              "File: " +  rout,
              "Href: " + element.href,
              "Status: " + statusLink,
              "StatusText: " + text,
              "Text: " + element.text,
            ]});
            console.log(table([['holi']], config));  //finalTble
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
      } else {
        let optionChoosen = { validate: false, stats: false };
        mdLinks(route, optionChoosen).then((res) => {
          let finalArray = res.map((element) => [
            "File: " + paths.relative(route, element.file),
            "Href: " + element.href,
            "Text: " + element.text,
          ]);
          console.log(table(finalArray, config));
        });
      }
    }
  })

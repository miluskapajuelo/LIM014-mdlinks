#!/usr/bin/env node
const { table } = require("table");
const { mdLinks } = require("./api.js");
const { resumeInfo } = require("./functions/cliFunctions");
const chalk = require("chalk");
const path = require("path")

const config = {
  /* singleLine: true, */
  columns: {
    0: {
      width: 33,

    },
    1: {
      width: 31
    },
    2: {
      width: 30
    },
    3: {
      width: 20
    },
    4: {
      width: 28
    }
}
  }

const messageHelp= [
  ["files", "Show you basic information about your files"],
  ["validate", "Show you status information about links finded in files"],
  ["stats", "Show you statistical data. Total links, Unique links"],
  [
    "stats & validate",
    "Show you statistical data. Total links, Unique links, Broken links",
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
            const finalTble= res.map((element) => {
              const text= element.text
              const statusT = element.statusText == 'FAIL' ? chalk.red(element.statusText) : chalk.green(element.statusText)
              const textLink = text.length > 50 ?  text.slice(0,50):text
              return  [
              "File: " +  path.relative(__dirname,element.file),
              "Href: " + element.href,
              "Status: " + element.status,
              "StatusText: " + statusT,
              "Text: " + textLink,
            ]});
            console.log(table(finalTble, config)); //([['Total: '+ finalTble.length + ' links','','','','']].concat(finalTble), config)
          })
          .catch((err) => console.log(chalk.inverse(err)));
      }  else if (option == "--stats") {
        let optionChoosen = { validate: false, stats: true };
        mdLinks(route, optionChoosen)
          .then((res) => {
            let finalArray = resumeInfo(res, 2);
            
            console.log(table(finalArray, config));
          })
          .catch((err) => console.log(chalk.inverse(err)));
      }  else {
        let optionChoosen = { validate: false, stats: false };
        mdLinks(route, optionChoosen).then((res) => {
          let finalArray = res.map((element) => {
            const text= element.text
            const textLink = text.length > 50 ?  text.slice(0,50):text
            return [
            "File: " + path.relative(__dirname,element.file),
            "Href: " + element.href,
            "Text: " + textLink,
          ]});
          console.log(table(finalArray, config));
        });
      }
    }
  })

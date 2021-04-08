#!/usr/bin/env node
const colors = require("colors");
const { table } = require("table");
const { mdLinks } = require("./apiCli.js");
const chalk = require("chalk");
const {choose} = require("./options.js")

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
    let option= answers.option;
    let paths= answers.path;
    let optionChoosen = choose(option)
    if(option == "Help, need instructions :)"){
      console.log(table(optionChoosen, config))}
    else if(optionChoosen){
      mdLinks(paths,optionChoosen)
        .then((res) => console.log(table(res, config)))
        .catch((err) => console.log(chalk.inverse(err)));
      }
  })


  



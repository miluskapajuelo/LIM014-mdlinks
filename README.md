<a name="table"></a>
# Markdown Links
[![GitHub followers](https://img.shields.io/github/followers/miluskapajuelo?style=social)](https://github.com/miluskapajuelo)
[![Twitter Follow](https://img.shields.io/twitter/follow/miluskapajuelo?style=social)](https://twitter.com/miluskapajuelo)

A way to find status and stadistical information of all links in a markdown file. 

## Table of Contents
* [Goals and Philosofy](#Goals-and-Philosofy)
* [Documentation](#Documentation)
    * [Intallation](#Installation)
    * [Usage](#Usage)
    * [Options](#Options)
    * [Flowchart](#Flowchart)
    * [Technical documentation of the library.](#Technical-documentation-of-the-library.)
    * [Test](#Test)
    


***

## Goals and Philosofy

[Markdown](https://es.wikipedia.org/wiki/Markdown) is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber and Aaron Swartz created Markdown in 2004 as a markup language that is appealing to human readers in its source code form. Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files (`README.md`).

However .md files have a detail, some of these redirect you to pages that no longer exist or simply no longer redirect you anywhere. And that is where mdLinks comes in to solve this problem.

## mdLinks

It is a library that allows you to identify the links of a Markdown file

**`mdLinks`** should ease the process of:

- providing basic information about links in .md files
- providing stadistical information about links in .md files
- validating links 
- parsing input

## Documentation

### Installation

You can install directly from GitHub with the command:

```shell
npm i miluskapajuelo/LIM014-mdlinks
```

If you want to implement globally. It can be installed via:

```shell
npm install -g miluskapajuelo/LIM014-mdlinks
```

This module includes executable and an interface that we can import with require to use it programmatically.


> **Note:** **`mdLinks`** works if you already have nodejs installed and therefore npm as well, which is installed together with node.

### Usage

#### API

The module must be able to import into other Node.js scripts and must offer the following interface:


###### Function
~~~
function mdLinks
  Enter a path: src/abc.md
  Choose an option:  Options
~~~

###### Arguments
~~~
  path: Absolute or relative path to the file or directory.
  options: An object with only the following property:
  validate: Boolean that determines if you want to validate the links found.
~~~

###### Return value
~~~
The function must return a (Promise) that resolves to an (Array) of (Objects), where each object represents a link and contains the following properties:

href: URL found.
text: Text that appeared within the link (<a>).
file: Path of the file where the link was found.
~~~

#### CLI (Command Line Interface)

1. First of all write on shell **mdLinks**
2. Enter your absolute/relative path
3. Choose the option of your preference 


![Validate](./img/helping.gif)


> if you need more information select the last option **Help, need instructions :)**



### Options

#### Basic

The default behavior should not validate if the URLs respond ok or not, it should only identify the markdown file (from the path it receives as an argument), analyze the Markdown file and print the links it finds, along with the path of the file where it appears and the text inside the link (truncated to 50 characters).

```shell
file: href: ./some/example.md http://algo.com/2/3/ Link a algo
href: ./some/example.md https://otra-cosa.net/algun-doc.html algún doc
href: ./some/example.md http://google.com/ Google
```

![Basic](./img/basic.gif)


#### Validate

If we pass the --validate option, the module must make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds ok, then we will treat the link as ok.


```shell
href: ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
href: ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
href: ./some/example.md http://google.com/ ok 301 Google
```

![Validate](./img/validate.gif)

#### Stats

If we pass the --stats option, the output will be a text with basic statistics about the links.

Total: 3
Unique: 3


![Stats](./img/stats.gif)

#### Validate & Stats


We can also combine --stats and --validate to get statistics that need from the validation results.

Total: 3
Unique: 3
Broken: 1


![ValidateStats](./img/validateStats.gif)


### Flowchart

#### Flowchart API

<a href="https://ibb.co/fM8wvdW"><img src="https://i.ibb.co/y0hjSFC/MDLINKS-API.png" alt="MDLINKS-API" border="0"></a>

#### Flowchart CLI

<a href="https://ibb.co/M1Vgy3v"><img src="https://i.ibb.co/5j81Xf0/MDLINKS-CLI.png" alt="MDLINKS-CLI" border="0"></a>


### Technical documentation of the library

| Lenguaje   | Ejecución  | Dependencias y modulos NPM  | Testing    | Otros        |
|------------|------------|-----------------------------|------------|--------------|
| JavaScript | Node.js    |  Inquirer,node-fetch, Table | Jest, mock | RegEX, CLI   |


### Test

| File      | % Stmts   |  % Branch  | % Funcs  | % Lines  |    
|-----------|-----------|------------|----------|----------|
| All files |     100   |       100  |     100  |     100  |     


# Author
[[Jhoselyn Miluska Pajuelo Villanueva](https://https://github.com/miluskapajuelo/)]


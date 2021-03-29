/* ESM script example */
//Import modules
import { count } from 'console'
import { text } from 'express'
import { readdirSync, readFileSync, statSync, existsSync } from 'fs'
import { isAbsolute, resolve, extname, normalize } from 'path'

//Regular Expressions
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
const regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim

//Short functions
const itExist = (path) => existsSync(path)
const PathDirectory = (path) => statSync(path).isDirectory()
const readDir = (path) => readdirSync(path)
const readFile = (path) => readFileSync(path).toString('utf8')
const getText = (text) => text.match(regexLink)

//function 1
//Convert path and normalize
const convertPath = (path) => {
    let result
    if (!isAbsolute(normalize(path))) {
        return resolve(normalize(path))
    }
    result = path

    return result
}

let array2 = []
//Find .md files
function findePaths(path) {
    let ruta = convertPath(path)
    if (PathDirectory(ruta)) {
        const routes = readDir(ruta)

        if (routes.length !== 0) {
            routes.forEach((file) => {
                findePaths(ruta + `/${file}`)
                if (extname(file) == '.md') array2.push(ruta + `/${file}`)
            })
        }
    }

    return array2
}

//Read path

const findLinks = (arrayPaths) =>
    arrayPaths.reduce((accumulator, user) => {
        const fullName = readFile(user).match(regexLinkFull)
        if (fullName) {
            accumulator = accumulator + fullName
        }

        return accumulator.split(',')
    }, [])

/* const findLinks = (arrayPaths) => arrayPaths.map((element) => readFile(element).match(regexLinkFull)) */

const propertiesLink = (arrayLinks) =>
    arrayLinks.map((text) => {
      console.log(text)
        let eachLink = getText(text)

        let objets = {
            href: eachLink[1],
            text: eachLink[0].substring(0, 50),
            file: text,
        }
        return objets
    })

//Export functions
export {
    convertPath,
    findePaths,
    readDir,
    PathDirectory,
    readFile,
    getText,
    itExist,
    findLinks,
    propertiesLink,
}

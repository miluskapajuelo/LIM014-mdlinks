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
function Finder(path) {
    let ruta = convertPath(path)
    if (PathDirectory(ruta)) {
        const routes = readDir(ruta)

        if (routes.length !== 0) {
            routes.forEach((file) => {
                Finder(ruta + `/${file}`)
                if (extname(file) == '.md')
                array2.push(ruta + `/${file}`)
            })
        }
    }
    return array2
}

//Read path
const reader = (arrayPaths) => arrayPaths.map((element) => {
         {  let text = regexLinkFull.exec(readFile(element))
            if (text !== null) {

                let href = getText(...text)

                return {
                    href: href[1],
                    text: href[0].substring(0, 50),
                    file: element,
                }
            }
        }
    })

//Export functions
export {
    convertPath,
    reader,
    Finder,
    readDir,
    PathDirectory,
    readFile,
    getText,
    itExist,
}

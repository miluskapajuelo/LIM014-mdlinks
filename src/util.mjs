/* ESM script example */
//Import modules
import { count } from 'console'
import { readdirSync, readFileSync, statSync, existsSync } from 'fs'
import { isAbsolute, resolve, extname, normalize } from 'path'


//Regular Expressions
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
const pathReg = /\.\.\\[a-zA-Z0-9.-/]+/gim
const regexLinkFull = /\[[a-zA-Z0-9-.]+\](www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim

//Short functions
const itExist = (path) => existsSync(path)
const PathDirectory = (path) => statSync(path).isDirectory()
const readDir = (path) => readdirSync(path)
const readFile = (path) => readFileSync(path).toString('utf8')

//function 1
//Convert path and normalize
const convertPath = (path) => {
    if (!isAbsolute(normalize(path))) {
        return resolve(path)
    } else {
        return path
    }
}

let filesFinded = []
//Find .md files
function findePaths(path) {
    let ruta = convertPath(path)
    if (PathDirectory(ruta)) {
        const routes = readDir(ruta)

        if (routes.length !== 0) {
            routes.forEach((file) => {
                findePaths(ruta + `/${file}`)
                if (extname(file) == '.md') filesFinded.push(ruta + `/${file}`)
            })
        }
    }

    return filesFinded
}

function findLinks(paths) {
    let objetsB
    let objetsA
    let propertiesLink = []
    paths.forEach((path) => {
        let linkPlusTag = readFile(path).match(regexLinkFull)

        if (linkPlusTag !== null) {
          let count = linkPlusTag.length
            if (count == 1) {
                linkPlusTag = linkPlusTag.toString()
                let d = linkPlusTag.match(regexLink)
                objetsA = {
                    href: d[1],
                    text: d[0],
                    file: path,
                }
                propertiesLink.push(objetsA)
            }
            if (count > 1) {
                linkPlusTag.forEach((link) => {
                    let d = link.match(regexLink)
                    objetsB = {
                        href: d[1],
                        text: d[0],
                        file: path,
                    }
                    propertiesLink.push(objetsB)
                })
            }
        }
    })
    return propertiesLink
}

//Export functions
export {
    convertPath,
    findePaths,
    readDir,
    PathDirectory,
    readFile,
    itExist,
    findLinks,
}

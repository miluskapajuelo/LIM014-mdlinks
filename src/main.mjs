/* ESM script example */
import { findePaths, itExist, convertPath, findLinks } from './util.js'
import fetch from 'node-fetch'

/* const dirnameFunction = dirname(fileURLToPath(import.meta.url)) */
/* const cwd = pathToFileURL(`${process.cwd()}/`).href */
// dirnameFunction + '/archivo.md'
let statusLinksFiles
let status
export const validate = (info) => {
    statusLinksFiles = info.map((link) => {
        return fetch(link.href)
            .then((res) => {
                status = res.status
                if (/* res.ok */ status < 400 && status >= 200) {
                    let statusLink = {
                        file: link.file,
                        href: link.href,
                        status: status,
                        statusText: 'OK',
                        text: link.text,
                    }
                    return statusLink
                } else {
                    let statusLink = {
                        file: link.file,
                        href: link.href,
                        status: status,
                        statusText: 'fail',
                        text: link.text,
                    }
                    return statusLink
                }
            })
            .catch((err) => {
                return {
                    file: link.file,
                    href: link.href,
                    status: 'fail',
                    statusText: 'not exist',
                    text: link.text,
                }
            })
    })
    return Promise.all(statusLinksFiles)
}

export default function mdLinks(path, options) {
    return new Promise((resolve, reject) => {
        let pathConverted = convertPath(path)

        if (itExist(pathConverted)) {
            let FilesFinded = findePaths(pathConverted)

            if (FilesFinded) {
                let filesReader = findLinks(FilesFinded)

                if (options == '') {
                    resolve(filesReader)
                } else {
                    if (options.validate) {
                        resolve(validate(filesReader).then((res) => res)).catch(
                            (error) => error
                        )
                    } else {
                        resolve(filesReader)
                    }
                }
            } else {
                reject('Not files')
            }
        } else {
            reject('Path doesnt exist')
        }
    })
}

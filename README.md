# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-Resumen-del-proyecto)
* [3. Descripción del módulo](#3-descripción-del-módulo)
* [4. Instrucciones de instalación/uso](#4-Instrucciones-de-instalación/uso)
* [5. Documentación técnica](#5-documentación-técnica)


***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

Se creó un programa que se ejecuta usando Node.js, donde se evaluan rutas, archivos, extensiones(solo de .md), obtención de links, manejo de errores y por último las opciones para obtención de datos como el total de links, links rotos, links únicos.

Esto se ejecutará con una herramienta de línea de comando (CLI) y librería (o biblioteca - library) en JavaScript.


## 3. Descripción del módulo

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [ ] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [ ] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [ ] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [ ] [Creación de Promesas.](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

### Node

* [ ] Uso de sistema de archivos. ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
* [ ] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
* [ ] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
* [ ] Uso de Mocks manuales.
* [ ] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

* [ ] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [ ] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))
* [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [ ] Verbos HTTP ([http.get](https://nodejs.org/api/http.html#http_http_get_options_callback))

### Fundamentos de programación

* [ ] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)

***

## 4. Instrucciones de instalación/uso

#### Instalación
* Con el comando `npm i miluskapajuelov/md-links` podemos instalar directamente.

#### Uso

En el archivo de Javascript:

```mjs

import md-links from 'mdlinks'
```
---
**Cómo llamar a libreria desde la terminal:**
- Para path-to-file

```
md-links <"path-to-directory"> [options]
```
---

**CLI (Command Line Interface)**
La libreria hace las seguientes entregas, dependiendo de los que ingrese el usuario.

**1.**  No ingresa ninguna OPTION, por lo tanto solo se muestran los links obtenidos en un array de objetos con las propidades HREF, TEXT, FILE.

**2.**  elIge la opción --validate, entonces nos devuleve el status del link en la red, con la siguiente estructura ( HREF, FILE, STATUS, TEXT ESTATUS, TEXT)

**3.**  elIge la opción --stats, entonces se mostrarán datos estadísticos como (TOTAL, UNIQUE)
**4.** elige la opción --validate && --stats, entonces se mostraran datos estadísticos similares pero se le agregan los links rotos, la estructura es (TOTAL, UNIQUE, BROKEN)

**PATH**
- Leer archivos con extensión .md `md-links <file.md>`

<!-- imagen -->
- Leer un directorio  `md-links <"path-to-directory">`

<!-- imagen -->

En ambos casos, se obtiene como resultado:

- `file`: archivo o ruta donde fue encontrado el link.
- `text`: descripción del link.
- `href`: link encontrado.



## 5. Documentación técnica
Para la realización del API utilicé ECMA script module, comparto dependencias instaladas.

#### 5.1. Dependencias Instaladas:

* "@babel/cli": "^7.13.10",
* "@babel/core": "^7.13.10",
* "@babel/node": "^7.13.10",
* "@babel/plugin-transform-modules-commonjs": "^7.13.8",
* "@babel/preset-env": "^7.13.10",
* "@babel/runtime": "^7.13.10",
* "babel-core": "^7.0.0-bridge.0",
* "babel-jest": "^26.6.3",
* "babel-plugin-add-module-exports": "^1.0.4",
* "eslint": "^7.22.0",
* "eslint-config-airbnb-base": "^14.2.1",
* "eslint-config-prettier": "^8.1.0",
* "eslint-plugin-import": "^2.22.1",
* "eslint-plugin-prettier": "^3.3.1",
* "jest": "^26.6.3",
* "microbundle": "^0.13.0",
* "prettier": "^2.2.1",

#### 5.2. Planificación:
`5.2.1. Diagrama de flujo API`

<a href="https://ibb.co/fM8wvdW"><img src="https://i.ibb.co/PxTHQGy/MDLINKS-API.png" alt="MDLINKS-API" border="0"></a>

`5.2.2. Diagrama de flujo CLI`

<a href="https://ibb.co/M1Vgy3v"><img src="https://i.ibb.co/dp2fszT/MDLINKS-CLI.png" alt="MDLINKS-CLI" border="0"></a>

`5.2.3. Github projects`
El tablero se muestra en el siguiente link: [aquí](https://github.com/miluskapajuelo/LIM014-mdlinks/projects/1)
Para un correcto seguimento del proyecto se crearon MILESTONES (por sprints) donde se visualizan los avances e ISSUES (tareas) distribuidas por HU(historias de usuario) en TAGS(etiquetas).

<a href="https://ibb.co/ykrcK56"><img src="https://i.ibb.co/hdSJrHB/github.png" alt="github" border="0"></a>

`5.2.4. Este proyecto consta de **dos partes** listadas aquí`

### 1) JavaScript API

El módulo debe poder **importarse** en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
* `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.




## Autora
[Jhoselyn Miluska Pajuelo Villanueva](https://github.com/miluskapajuelo/)
Software Developer




import {convertPath, getText, readDir, readFile ,PathDirectory, Finder, reader} from '../build/util.js';

const RelativePath = '../prueba'
const AbsolutePrueb =  "C:\\Users\\milus\\Desktop\\Repositorios\\prueba"
const AbsolutePath = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba'
const pathPruebaFolder = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba'//path.join(process.cwd() 'practica')
const pathPruebaFile = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md'
const pathPruebaErr = 'C:\\Users\\milus\\Desk'
const ArrayFiles = ["holi.js", "link.md", "prueba2"]
const returnFile = "[google]www.google.com.pe"
const regexLink = /(www\.|https?:\/\/)?[a-zA-Z0-9-.]+[/a-zA-Z0-9-.]+/gim
const result = [ 'google', 'www.google.com.pe' ]
const filesArray = [
  "C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba/holi.js",
  "C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba/link.md",
  "C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba/prueba2"
]
const PropertiesFileMd =[
  {
    href: 'www.google.com.pe',
    text: 'google',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md'
  }
]

//function 1 convertPath
//convertPath is a function
describe('convert to absolute rute', () => {

  it('is a function', () => {
    expect(typeof convertPath).toBe('function');;
  });
//convertPath convert from relative to absolute path
  it('It should return from relative path to absolute path', () => {//preguntar
    expect(convertPath(RelativePath)).toBe(AbsolutePrueb);
  });
//convertPath return the same path if its absolute
  it('It should return from absolute path to the same path', () => {
    expect(convertPath(AbsolutePath)).toBe(pathPruebaFolder);
  });
});

//function 2 readDir
//readDir is a function
describe('Read directory', () => {

  it('is a function', () => {
    expect(typeof readDir).toBe('function');
  });
//read the directory the function and return an array
  it('It should return files folder that are inside the folder', () => {
    expect(readDir(pathPruebaFolder)).toEqual(ArrayFiles);
  });
});
// function 3 PathDirectory
//PathDirectory is a function
describe('this element is an directory', () => {

  it('is a function', () => {
    expect(typeof PathDirectory).toBe('function');
  });
//file is into directory returns true
  it('It should return  true if files are inside the folder', () => {
    expect(PathDirectory(pathPruebaFolder)).toBeTruthy();
  });
//file isnt into directory returns false
  it('It should return false if files arent inside the folder', () => {
    expect(PathDirectory(pathPruebaFile)).toBeFalsy();
  });
});
// function 4 readFile
/*
describe('read file', () => {

  it('is a function', () => {
    expect(typeof readFile).toBe('function');
  });

  it('Return array of files', () => {
    expect(readFile(pathPruebaFile)).toBe(returnFile);
});
 */// function 5 getText
//readFile is a function
describe('find frase in string from regexpr', () => {

  it('is a function', () => {
    expect(typeof getText).toBe('function');
  });
//readFile returns files into it
  it('Return array of digitos matched', () => {
    expect(getText(returnFile)).toEqual(result); //no sale hay espacios
  });
});
// function 5 Finder
//readFile is a function
describe('read files to return array of objects', () => {

  it('is a function', () => {
    expect(typeof Finder).toBe('function');
  });
//readFile returns files into it
  it('Return array of files', () => {
    expect(Finder(pathPruebaFolder)).toEqual(filesArray);
  });
});
// function  reader
//readFile is a function
describe('read files to return array of properties', () => {

  it('is a function', () => {
    expect(typeof reader).toBe('function');
  });
//readFile returns files into it
  it('Return array of files', () => {
    expect(reader(pathPruebaFile)).toEqual(PropertiesFileMd);
  });
});




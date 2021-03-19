import {convertPath, itExtist, readDir, readFile ,PathDirectory} from '../build/util.js';

const RelativePath = '../prueba'
const AbsolutePrueb =  "C:\\Users\\milus\\Desktop\\Repositorios\\prueba"
const AbsolutePath = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba'
const pathPruebaFolder = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba'//path.join(process.cwd() 'practica')
const pathPruebaFile = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\linkBreak.md'
const pathPruebaErr = 'C:\\Users\\milus\\Desk'
const ArrayFiles = ["holi.js", "link.md", "prueba2"]

describe('convert to absolute rute', () => {

  it('is a function', () => {
    expect(typeof convertPath).toBe('function');;
  });

  it('It should return from relative path to absolute path', () => {//preguntar
    expect(convertPath(RelativePath)).toBe(AbsolutePrueb);
  });
  it('It should return from absolute path to the same path', () => {
    expect(convertPath(AbsolutePath)).toBe(pathPruebaFolder);
  });
});

describe('exist this path', () => {

  it('is a function', () => {
    expect(typeof itExtist).toBe('function');
  });

  it('It should return true if path exists', () => {
    expect(itExtist(pathPruebaFolder)).toBe(true);
  });
  it('It should return false if path doesnt exist', () => {
    expect(itExtist(pathPruebaErr)).toBe(false);
  });
});

describe('Read directory', () => {

  it('is a function', () => {
    expect(typeof readDir).toBe('function');
  });

  it('It should return files folder that are inside the folder', () => {
    expect(readDir(pathPruebaFolder)).toEqual(ArrayFiles);
  });
});

describe('this element is an directory', () => {

  it('is a function', () => {
    expect(typeof PathDirectory).toBe('function');
  });

  it('It should return files folder that are inside the folder', () => {
    expect(PathDirectory(pathPruebaFolder)).toBe(true);
  });
  it('It should return files folder that are inside the folder', () => {
    expect(PathDirectory(pathPruebaFile)).toBe(false);
  });
});

/* describe('Read files', () => {

  it('is a function', () => {
    expect(typeof readFile).toBe('function');
  });

  it('It should return files folder that are inside the folder', () => {
    expect(readFile(pathPruebaFile)).toBe('www.google.');
  });
}); */


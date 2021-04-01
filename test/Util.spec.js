import {convertPath, readDir ,PathDirectory, itExist, readFile, findePaths, findLinks} from '../build/util.js'

const RelativePath = '../prueba'
const AbsolutePrueb =  "C:\\Users\\milus\\Desktop\\Repositorios\\prueba"
const AbsolutePath = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba'
const pathPruebaFolder = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba'//path.join(process.cwd() 'practica')
const pathPruebaFile = 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md'
const pathPruebaFileArray = ['C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md']
const pathPruebaFileArray2 = ['C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\link2.md']
const pathPruebaFileArray3 = ['C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md','C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\link2.md']
const pathPruebaErr = 'C:\\Users\\milus\\Desk'
const ArrayFiles = ["holi.js", "link.md", "prueba2"]
const filesArray = [
  "C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba/link.md",
  "C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba/prueba2/link2.md",
  "C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba/prueba2/linkBreak.md"
]
const PropertiesFileMd =[
  {
    href: 'www.google.com.pe',
    text: 'google',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md'
  }
]
const PropertiesFileMd2 =[

  {
    href: 'www.otraPrueba.com',
    text: 'Otraprueba',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\link2.md'
  },
  {
    href: 'www.google.com.pe',
    text: 'Otraprueba2',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\link2.md'
  }
]

const PropertiesFileMd3 =[
  {
    href: 'www.google.com.pe',
    text: 'google',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\link.md'
  },
  {
    href: 'www.otraPrueba.com',
    text: 'Otraprueba',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\link2.md'
  },
  {
    href: 'www.google.com.pe',
    text: 'Otraprueba2',
    file: 'C:\\Users\\milus\\Desktop\\Repositorios\\LIM014-mdlinks\\test\\prueba\\prueba2\\link2.md'
  }
]
const text = '[google]www.google.com.pe'

//util.js
//function 1 convertPath
//convertPath is a function
describe('convert to absolute rute', () => {

  it('is a function', () => {
    expect(typeof convertPath).toBe('function');;
  });
//convertPath convert from relative to absolute path
  it('It should return from relative path to absolute path', () => {
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


// function 4 itExist
//itExist is a function
describe('this link exists?', () => {

  it('is a function', () => {
    expect(typeof itExist).toBe('function');
  });
//path exists? returns true
  it('It should return  true if files are inside the folder', () => {
    expect(itExist(pathPruebaFolder)).toBeTruthy();
  });
//path doesnt exist? returns false
  it('It should return false if files arent inside the folder', () => {
    expect(itExist(pathPruebaErr)).toBeFalsy();
  });
});

// function 5 readFile
//readFile is a function
describe('this link exists?', () => {

  it('is a function', () => {
    expect(typeof readFile).toBe('function');
  });
//return just tag + link (1 link)
  it('It should return  true if files are inside the folder', () => {
    expect(readFile(pathPruebaFile)).toContain(text);
  });

}); //preguntar al coach

// function 6 findePaths
//findePaths is a function
describe('Find files .md', () => {

  it('is a function', () => {
    expect(typeof findePaths).toBe('function');
  });
//path exists? returns true
  it('It should return  true if files are inside the folder', () => {
    expect(findePaths(pathPruebaFolder)).toEqual(filesArray);
  });

});

// function 7 findLinks
//findLinks is a function
describe('Find files .md', () => {

  it('is a function', () => {
    expect(typeof findLinks).toBe('function');
  });
//return array of objects with properties of one link
  it('It should return  true if files are inside the folder', () => {
    expect(findLinks(pathPruebaFileArray)).toEqual(PropertiesFileMd);
  });
  //return array of objects with properties of one link
  it('It should return  true if files are inside the folder', () => {
    expect(findLinks(pathPruebaFileArray2)).toEqual(PropertiesFileMd2);
  });
  //return array of objects with properties of one link
  it('It should return  true if files are inside the folder', () => {
    expect(findLinks(pathPruebaFileArray3)).toEqual(PropertiesFileMd3);
  });

});


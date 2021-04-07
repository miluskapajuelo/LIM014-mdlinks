const {
  convertPath,
  readDir,
  PathDirectory,
  itExist,
  readFile,
  findePaths,
  findLinks,
} = require("../src/apiFunctions");
const { validate, unique, mdLinks } = require("../src/api");

const linkAbsolute = __dirname;
const linkRelative = "./test";
const linkDirectory = __dirname + "/prueba";
const linkDirectoryInfo = __dirname + "/prueba/prueba2";
const linkFile = __dirname + "/prueba/link.md";
const linkErr = __dirname + "../prueba/link.md";
const linkEmpty = __dirname + "/prueba/empty";
const linkLyrics = __dirname + "/prueba/prueba2/lyrics.md";
const ArrayFiles = ["empty", "holi.js", "link.md", "prueba2", "somePaths.md"];
const text = "PruebaReader";
const noExist = "Path doesnt exist"
const noFile = "Not files"
const onePath = [__dirname + "/prueba/prueba2/onePath.md"];
const somePath = [__dirname + "/prueba/somePaths.md"];
const filesArray = [
  __dirname + "/prueba/link.md",
  __dirname + "/prueba/prueba2/linkBreak.md",
  __dirname + "/prueba/prueba2/lyrics.md",
  __dirname + "/prueba/prueba2/onePath.md",
  __dirname + "/prueba/somePaths.md",
];
const propertiesOneLink = [
  {
    href: "https://www.google.com.pe",
    text: "google",
    file: __dirname + "/prueba/prueba2/onePath.md",
  },
];
const propertiesSomeLink = [
  {
    href: "https://nodejs.org/e/",
    text: "node",
    file: __dirname + "/prueba/somePaths.md",
  },
  {
    href: "https://facebook.com.pe",
    text: "facebook",
    file: __dirname + "/prueba/somePaths.md",
  },
  {
    href: "https://www.google.com.pe",
    text: "google",
    file: __dirname + "/prueba/somePaths.md",
  },
  {
    href: "https://www.google.com.pe",
    text: "google",
    file: __dirname + "/prueba/somePaths.md",
  },
];

const validateLinks = [
  {
    file: __dirname + "/prueba/somePaths.md",
    href: "https://nodejs.org/e/",
    status: 404,
    statusText: "fail",
    text: "node",
  },
  {
    file: __dirname + "/prueba/somePaths.md",
    href: "https://facebook.com.pe",
    status: "fail",
    statusText: "fail",
    text: "facebook",
  },
  {
    file: __dirname + "/prueba/somePaths.md",
    href: "https://www.google.com.pe",
    status: 200,
    statusText: "OK",
    text: "google",
  },
  {
    file: __dirname + "/prueba/somePaths.md",
    href: "https://www.google.com.pe",
    status: 200,
    statusText: "OK",
    text: "google",
  },
];
const uniqueLinks = [
  "https://nodejs.org/e/",
  "https://facebook.com.pe",
  "https://www.google.com.pe",
];

const validateInfo = [{"file": "C:\\Users\\milus\\Desktop\\Repositorios\\Prueba\\LIM014-mdlinks\\test/prueba/prueba2/linkBreak.md", "href": "https://nodejs.org/e/", 
"text": "node"}, {"file": "C:\\Users\\milus\\Desktop\\Repositorios\\Prueba\\LIM014-mdlinks\\test/prueba/prueba2/linkBreak.md", "href": "https://facebook.com.pe", "text": "facebook"}, {"file": "C:\\Users\\milus\\Desktop\\Repositorios\\Prueba\\LIM014-mdlinks\\test/prueba/prueba2/onePath.md", "href": "https://www.google.com.pe", "text": "google"}]
const statsInfo = {"sizeLink": 3, "uniqueLink": 3}
const statsValidateInfo = {"brokeLink": 2, "sizeLink": 3, "unique": 3}
const justInfo = [{"file": "C:\\Users\\milus\\Desktop\\Repositorios\\Prueba\\LIM014-mdlinks\\test/prueba/prueba2/linkBreak.md", "href": "https://nodejs.org/e/", 
"text": "node"}, {"file": "C:\\Users\\milus\\Desktop\\Repositorios\\Prueba\\LIM014-mdlinks\\test/prueba/prueba2/linkBreak.md", "href": "https://facebook.com.pe", "text": "facebook"}, {"file": "C:\\Users\\milus\\Desktop\\Repositorios\\Prueba\\LIM014-mdlinks\\test/prueba/prueba2/onePath.md", "href": "https://www.google.com.pe", "text": "google"}]

//function 1 convertPath
//convertPath is a function
describe("convert to absolute rute", () => {
  it("is a function", () => {
    expect(typeof convertPath).toBe("function");
  });
  //convertPath convert from relative to absolute path
  it("It should return from relative path to absolute path", () => {
    expect(convertPath(linkRelative)).toBe(linkAbsolute);
  });
  //convertPath return the same path if its absolute
  it("It should return from absolute path to the same path", () => {
    expect(convertPath(linkAbsolute)).toBe(linkAbsolute);
  });
});

//function 2 readDir
//readDir is a function
describe("Read directory", () => {
  it("is a function", () => {
    expect(typeof readDir).toBe("function");
  });
  //read the directory the function and return an array
  it("It should return files folder that are inside the folder", () => {
    expect(readDir(linkDirectory)).toEqual(ArrayFiles);
  });
});

// function 3 PathDirectory
//PathDirectory is a function
describe("this element is an directory", () => {
  it("is a function", () => {
    expect(typeof PathDirectory).toBe("function");
  });
  //file is into directory returns true
  it("It should return  true if files are inside the folder", () => {
    expect(PathDirectory(linkDirectory)).toBeTruthy();
  });
  //file isnt into directory returns false
  it("It should return false if files arent inside the folder", () => {
    expect(PathDirectory(linkFile)).toBeFalsy();
  });
});

// function 4 itExist
//itExist is a function
describe("this link exists?", () => {
  it("is a function", () => {
    expect(typeof itExist).toBe("function");
  });
  //path exists? returns true
  it("It should return  true if files are inside the folder", () => {
    expect(itExist(linkDirectory)).toBeTruthy();
  });
  //path doesnt exist? returns false
  it("It should return false if files arent inside the folder", () => {
    expect(itExist(linkErr)).toBeFalsy();
  });
});

// function 5 readFile
//readFile is a function
describe("this link exists?", () => {
  it("is a function", () => {
    expect(typeof readFile).toBe("function");
  });
  //return just tag + link (1 link)
  it("It should return  true if files are inside the folder", () => {
    expect(readFile(linkLyrics)).toContain(text);
  });
});

// function 6 findePaths
//findePaths is a function
describe("Find files .md", () => {
  it("is a function", () => {
    expect(typeof findePaths).toBe("function");
  });
  //path exists? returns true
  it("It should return  true if files are inside the folder", () => {
    expect(findePaths(linkDirectory)).toEqual(filesArray);
  });
});

// function 7 findLinks
//findLinks is a function
describe("Find files .md", () => {
  it("is a function", () => {
    expect(typeof findLinks).toBe("function");
  });
  //one link in a file
  it("It should return  true if files are inside the folder", () => {
    expect(findLinks(onePath)).toEqual(propertiesOneLink);
  });
  //some links in a file
  it("It should return  true if files are inside the folder", () => {
    expect(findLinks(somePath)).toEqual(propertiesSomeLink);
  });
});

//api.js
//function 1 validate
describe("should validate link", () => {
  it("It should return if validate (ok, fail) and status", () => {
    return validate(propertiesSomeLink).then((res) => {
      expect(res).toEqual(validateLinks);
    });
  });
});

//function 2 unique values
//unique is a function
describe("Unique links", () => {
  it("is a function", () => {
    expect(typeof unique).toBe("function");
  });
  //read the directory the function and return an array
  it("It should return files folder that are inside the folder", () => {
    expect(unique(propertiesSomeLink)).toEqual(uniqueLinks);
  });
});

//function 3 mdlinks
describe("mdLinks", () => {
  it("Promise test case VALIDATE", () => {
    return mdLinks(linkDirectoryInfo, {option:true}).then((result) => {
      expect(result).toEqual(validateInfo);
    });
  });
  it("Promise test case STATS", () => {
    return mdLinks(linkDirectoryInfo, {stats:true}).then((result) => {
      expect(result).toEqual(statsInfo);
    });
  });
  it("Promise test case STATSVALIDATE", () => {
    return mdLinks(linkDirectoryInfo, {statsValidate:true}).then((result) => {
      expect(result).toEqual(statsValidateInfo);
    });
  });
  it("Promise test case NOOPTIONS", () => {
    return mdLinks(linkDirectoryInfo, '').then((result) => {
      expect(result).toEqual(justInfo);
    });
  });
  it("Promise test case PATH DOESNT EXIST", () => {
    return mdLinks(linkErr, '').catch((result) => {
      expect(result).toEqual(noExist);
    });
  });
  it("Promise test case NO FILES", () => {
    return mdLinks(linkEmpty, '').catch((result) => {
      expect(result).toEqual(noFile);
    });
  });
});

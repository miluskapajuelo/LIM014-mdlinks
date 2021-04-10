const {
  convertPath,
  readDir,
  PathDirectory,
  itExist,
  readFile,
  findePaths,
  findLinks,
} = require("../src/functions/apiFunctions.js");

const {
  linkDirectoryRelative,linkDirectoryAbsolute, ArrayFiles,linkFile,linkErr,text,filesArray,somePath,propertiesOneLink,propertiesSomeLink
} = require("./pathsResults.js");

//function 1 convertPath
//convertPath is a function
describe("convert to absolute rute", () => {
  it("is a function", () => {
    expect(typeof convertPath).toBe("function");
  });
  //convertPath convert from relative to absolute path
  it("It should return from relative path to absolute path", () => {
    expect(convertPath(linkDirectoryRelative)).toBe(linkDirectoryAbsolute);
  });
  //convertPath return the same path if its absolute
  it("It should return from absolute path to the same path", () => {
    expect(convertPath(linkDirectoryAbsolute)).toBe(linkDirectoryAbsolute);
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
    expect(readDir(linkDirectoryAbsolute)).toEqual(ArrayFiles);
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
    expect(PathDirectory(linkDirectoryAbsolute)).toBeTruthy();
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
    expect(itExist(linkDirectoryAbsolute)).toBeTruthy();
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
    expect(readFile(linkFile)).toContain(text);
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
    expect(findePaths(linkDirectoryAbsolute)).toEqual(filesArray);
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
    expect(findLinks([linkFile])).toEqual(propertiesOneLink);
  }); 
  //some links in a file
   it("It should return  true if files are inside the folder", () => {
    expect(findLinks([somePath])).toEqual(propertiesSomeLink);
  });
});



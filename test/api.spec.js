const {
    mdLinks
  } = require("../src/index.js");
  
  const {
    linkErr,somePath,propertiesSomeLink,validateLinks,linkEmpty,noLinks
  } = require("./pathsResults.js");
  
//function 3 mdlinks
test('comprueba si mdlinks retorna un promesa que se resuelve con  un array de objetos ', () => {
  return expect(mdLinks('./test', '')).toBeInstanceOf(Promise);
});

 describe("mdLinks", () => {
  it("Promise test case VALIDATE", () => {
    return expect(mdLinks(somePath, {validate:true})).resolves.toEqual(validateLinks);
    });
  it("Promise test case NO VALIDATE", () => {
    return expect(mdLinks(somePath, {validate:false})).resolves.toEqual(propertiesSomeLink);
    });
  it("Promise test case NOOPTIONS", () => {
    return expect(mdLinks(somePath, '')).resolves.toEqual(propertiesSomeLink);
    });
  it("Promise test case NOT WRITE A PATH", () => {
    return expect(mdLinks('', '')).rejects.toMatch('Enter a path please, write again mdLinks');
    });
  it("Promise test case PATH DOESNT EXIST", () => {
    return expect(mdLinks(linkErr, '')).rejects.toMatch('Path doesnt exist, write again mdLinks');
    });
  it("Promise test case NO FILES", () => {
    return mdLinks(linkEmpty, '').catch((err) => {
      expect(err).toEqual('This path hasnt files or directories, write again mdLinks')
    });})
  it("Promise test case NO LINKS", () => {
    return mdLinks(noLinks, '').catch((err) => {
      expect(err).toEqual('This path hasnt links, write again mdLinks')
    });
});
  });

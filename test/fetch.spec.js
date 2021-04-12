jest.mock('node-fetch');
const fetch = require('node-fetch');
const { validate } = require("../src/functions/fetch.js");

const pathOK = [
  {
    href: "https://www.google.com.pe",
    text: "google",
    file: __dirname + "/prueba/prueba2/onePath.md",
  },
];
const  pathFAIL= [
    {
        href: "https://nodejs.org/e/",
        text: "node",
        file: __dirname + "/prueba/somePaths.md",
      },
  ];
const pathNOTFOUND = [
    {
        href: "https://facebook.com.pe",
        text: "facebook",
        file: __dirname + "/prueba/somePaths.md",
      },
  ];
  

const validateLinksOK = [
  {
    file: __dirname + "/prueba/prueba2/onePath.md",
    href: "https://www.google.com.pe",
    status: 200,
    statusText: "OK",
    text: "google",
  },
];
const validateLinksFAIL = [{
    file: __dirname + "/prueba/somePaths.md",
    href: "https://nodejs.org/e/",
    status: 404,
    statusText: "FAIL",
    text: "node",
}];
  const validateLinksNOTFOUND = [
    {
        file: __dirname + "/prueba/somePaths.md",
        href: "https://facebook.com.pe",
        status: "no found",
        statusText: "FAIL",
        text: "facebook",
      },
  ];
//function 3 mdlinks
describe("validate OK", () => {
  test("Promise test case VALIDATE OK 200" , () => {
    fetch.mockImplementation(()=>Promise.resolve({
      status: 200,
      statusText:'OK'
    }))
    return expect(validate(pathOK)).resolves.toEqual(validateLinksOK);
  });
  test("Promise test case VALIDATE FAIL 404" , () => {
    fetch.mockImplementation(()=>Promise.resolve({
      status : 404,
      statusText:'FAIL'
    }))
    return expect(validate(pathFAIL)).resolves.toEqual(validateLinksFAIL);
  });
  test("Promise test case VALIDATE FAIL NO LINK" , () => {
    fetch.mockImplementation(()=>Promise.resolve({
    }))
    return validate(pathNOTFOUND).catch((err) => {
      expect(err).toEqual(validateLinksNOTFOUND)
;
});
  })})

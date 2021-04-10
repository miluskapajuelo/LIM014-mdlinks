const linkDirectoryRelative = "./test/prueba/prueba2";
const linkDirectoryAbsolute = __dirname + "\\prueba\\prueba2";
const ArrayFiles = ["linkBreak.md", "onePath.md", "prueba.js", "prueba3"];
const linkFile = __dirname + "/prueba/prueba2/onePath.md";
const linkErr = __dirname + "../prueba/link.md";
const noLinks = __dirname + "/prueba/link.md";
const text = "1[google](https://www.google.com.pe)";
const filesArray = [
  __dirname + "\\prueba\\prueba2/linkBreak.md",
  __dirname + "\\prueba\\prueba2/onePath.md",
  __dirname + "\\prueba\\prueba2/prueba3/lyrics.md",
];
const somePath = __dirname + "/prueba/somePaths.md";
const linkEmpty = __dirname + "/prueba/empty";

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

const failLinks = [
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
    }
  ];

const uniqueLinks = [
    'https://nodejs.org/e/','https://facebook.com.pe','https://www.google.com.pe'];

const stadisticalInformationStats = [["Total paths: 4", "Unique paths: 3"]]

const stadisticalInformationStatsValidate =[["Total paths: 4", "Unique paths: 3", "Broken paths: 2"]];

module.exports = {
  linkDirectoryRelative,
  linkDirectoryAbsolute,
  ArrayFiles,
  linkFile,
  linkErr,
  text,
  filesArray,
  somePath,
  propertiesOneLink,
  propertiesSomeLink,
  validateLinks,
  linkEmpty,
  noLinks,
  uniqueLinks,
  failLinks,
  stadisticalInformationStats,
  stadisticalInformationStatsValidate
};

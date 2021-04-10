const {
  unique,
  broke,
  resumeInfo,
} = require("../src/functions/cliFunctions.js");

const {
  uniqueLinks,
  propertiesSomeLink,
  validateLinks,
  failLinks,
  stadisticalInformationStats,
  stadisticalInformationStatsValidate
} = require("./pathsResults.js");

//function 1 Unique
//convertPath is a function
describe("find unique links", () => {
    it("is a function", () => {
      expect(typeof unique).toBe("function");
    });
    //convertPath convert from relative to absolute path
    it("It should return an array of unique links", () => {
      expect(unique(propertiesSomeLink)).toEqual(uniqueLinks);
    });
  });
  
//function 2 Broken path
//broke is a function
describe("find unique links", () => {
    it("is a function", () => {
      expect(typeof broke).toBe("function");
    });
    //Show an array of objects "status: fail"
    it("It should return an array of unique links", () => {
      expect(broke(validateLinks)).toEqual(failLinks);
    });
  });

  //function 3 Resume path
//resumeInfo is a function
describe("shows an array with stadistical information", () => {
    it("is a function", () => {
      expect(typeof resumeInfo).toBe("function");
    });
    //Just TOTAL & UNIQUE links
    it("It should return an array of unique links", () => {
      expect(resumeInfo(propertiesSomeLink,2)).toEqual(stadisticalInformationStats);
    });
    //TOTAL & UNIQUE & BROKEN links
    it("It should return an array of unique links", () => {
        expect(resumeInfo(validateLinks,3)).toEqual(stadisticalInformationStatsValidate);
      });
  });

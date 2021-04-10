const unique = (info) => {
  let result;
  let array = info.map((Element) => Element.href);
  const dataArray = new Set(array);
  total = info.length;
  result = [...dataArray];
  return result;
};


const broke = (info) => info.filter((element) => element.statusText == "fail");

const resumeInfo = (info, number) => {
  let total = info.length;
  let uniqueLinks = unique(info).length;
  let brokenLinks = broke(info).length;
  if (number == 2) {
    return [["Total paths: " + total, "Unique paths: " + uniqueLinks]];
  } else {
    return [
      ["Total paths: " + total, "Unique paths: " + uniqueLinks, "Broken paths: " + brokenLinks],
    ];
  }
};


module.exports = {
  unique,
  broke,
  resumeInfo,
};

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
    return [["Total: " + total, "Unique: " + uniqueLinks]];
  } else {
    return [
      ["Total: " + total, "Unique: " + uniqueLinks, "Broken: " + brokenLinks],
    ];
  }
};

const help = (info) => {if (option == "Help, need instructions :)") {
    return [
      ["files", "Show you basic information about your files"],
      ["validate", "Show you status information about links finded in files"],
      ["stats", "Show you statistical data. Total links, Unique links"],
      [
        "stats & validate",
        "Show you statistical data. Total links, Unique links, Broke links",
      ],
    ];}}

module.exports = {
  unique,
  broke,
  resumeInfo,
  help
};

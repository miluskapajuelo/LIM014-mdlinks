const choose = (option) => {
  if (option == "--validate & --stats") {
    return { validate: true, stats: true };
  } else if (option == "--validate") {
    return { validate: true };
  } else if (option == "--stats") {
    return { stats: true };
  } else if (option == "Help, need instructions :)") {
    return [
      ["files", "Show you basic information about your files"],
      ["validate", "Show you status information about links finded in files"],
      ["stats", "Show you statistical data. Total links, Unique links"],
      [
        "stats & validate",
        "Show you statistical data. Total links, Unique links, Broke links",
      ],
    ];
  } else {
    return { validate: false, stats: false };
  }
};

module.exports = { choose };

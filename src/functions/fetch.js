const fetch = require("node-fetch");
let statusLinksFiles;
let status;
const validate = (info) => {
  statusLinksFiles = info.map((link) => {
    return fetch(link.href)
      .then((res) => {
        status = res.status;
        if (status < 400 && status >= 200) {
          let statusLink = {
            file: link.file,
            href: link.href,
            status: status,
            statusText: "OK",
            text: link.text,
          };
          return statusLink;
        } else {
          let statusLink = {
            file: link.file,
            href: link.href,
            status: status,
            statusText: "fail",
            text: link.text,
          };
          return statusLink;
        }
      })
      .catch((err) => {
        return {
          file: link.file,
          href: link.href,
          status: "fail",
          statusText: "fail",
          text: link.text,
        };
      });
  });

  return Promise.all(statusLinksFiles);
};
module.exports = {
  validate,
};
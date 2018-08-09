/** simple utility for testing execution time */

const Formatter = require("njstrace/lib/formatter");
const Response = require("node-fetch").Response;
function MyFormatter() {}
require("util").inherits(MyFormatter, Formatter);
MyFormatter.prototype.onEntry = function(args) {};
MyFormatter.prototype.onExit = function(args) {
  let fileName = args.file.split("/").pop();
  // if (args.span > 0) {
  console.error(
    `${args.name.padStart(30)} @ ${fileName.padEnd(20)}\t${args.span}ms`
  );
  // }
};

const njstrace = require("njstrace").inject({ formatter: new MyFormatter() }),
  response = require("./response");
response.getResponse(Response);

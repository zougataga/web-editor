// llx404 on git
require("./src/server/index.js");

process.on("unhandledRejection", (reason, promise) => { return console.log(reason, promise) });
process.on("uncaughtException", (err) => { return console.log(err) });
process.on('uncaughtExceptionMonitor', (err, origin) => { return console.log(err, origin); });
process.on('multipleResolves', (type, promise, reason) => { return console.log(type, promise, reason) });
module.exports = __dirname;


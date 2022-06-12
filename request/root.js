let f  = require("../film.js")
const u = (req, res) => {
    return res.sendfile("index.html",{root:"./views"});
}

const d = (req, res) => {
    return res.sendfile("error.html",{root:"./views"});
}


module.exports = {u,d}


let f = require("../film.js")
const film = (req, res) => {
    const random = req.params.random
    let a = []
    f.forEach(e=>{
        a.push(e)
    })
     if(random === "oui") rdm(a);
    return res.status(200).json({slm:a})
}
module.exports = film

function rdm(arr) {arr.sort(() => Math.random() - 0.5);}
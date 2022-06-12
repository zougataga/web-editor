let f = require("../film.js")
let domain = require("../index.js")
const u = (req, res) => {
  res.sendFile("film.html",{root:"./views/"})
}
const d = (req, res) => {
    const pp = req.params.name
  let a = ""
  f.filter(e=>e.name===pp).forEach(e=>{
      a = e  })
 if(a!="") return res.render("film.ejs",{domain: domain,s:a.star||0,n: a.name,p: a.pp,u: a.url,d: a.des,dt: a.date,b: a.bdn,})
 else return res.sendFile("index.html",{root:"./views/"})
}
module.exports = {u,d}


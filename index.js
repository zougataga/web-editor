const PORT = process.env.PORT || 8080
//process.on("unhandledRejection", (a) => {if (a.message) return undefined})
let domain = "https://moviestate.herokuapp.com"
const express = require("express")
const app = express()
const cors = require('cors')
require("colors")
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static(__dirname + '/views'));

// back end
app.get("/all/:random",(req,res)=>require("./request/all.js")(req,res))
// Front end
app.get("/",(req,res)=>require("./request/root.js").u(req,res))
app.get("/filmvf",(req,res)=>require("./request/film.js").u(req,res))
app.get("/film/:name",(req,res)=>require("./request/film.js").d(req,res))

//app.all('*', (req, res) => require("./request/root.js").d(req,res));
app.listen(PORT, () => { 
console.clear()
console.log(`
MOVIE STATE V1
--- BY ??????
`.rainbow)
console.log(`=> [${new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getUTCSeconds()+":"}] - API ON`.rainbow);
})

module.exports = domain
// LLX API :=)
const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');

const db = require("../data/index.js");
const config = require("../config/config.js");
const { log } = require('console');
const all = {
    series: require("../config/series.js"),
    film: require("../config/film.js")
};
const apiLimiter = require("express-rate-limit")({
    windowMs: 15 * 60 * 1000,
    message: ":(",
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
const methods = {
    generateHtml: require("./methods/generateHtml.js"),
    ipVerification: require("./methods/ipVerification.js"),
    randomString: require("./methods/randomString.js")
};


app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static('./src/public/assets'));
app.use(apiLimiter);
app.use(require('request-ip').mw());

const loadApp = (dir = __dirname + '\\app') => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        for (const file of commands) {
            const getFile = require(`${dir}/${dirs}/${file}`);
            if (getFile.method === "get") app.get(getFile.path, async (req, res) => { await methods.ipVerification(req, res); await getFile.go(db, methods, config, req, res); });
            if (getFile.method === "post") app.post(getFile.path, async (req, res) => { await methods.ipVerification(req, res); await getFile.go(db, methods, config, req, res); });
        };
    });
};
const setDB = async () => {
    // db.delete("all")
    // let affiche = db.all().filter(e => e.ID.startsWith("affiche_"))
    // affiche.forEach(e => {
    //     db.delete(e.ID)
    // });
    // all
    await all.film.forEach(async e => {
        const exist = Object.values(db.get("all") || []).find(a => a.info.name === e.name && a.type === "film")
        if (!exist) {
            const id = await methods.randomString(16);
            await db.push(`all`, {
                type: "film",
                info: e,
                id: id
            });
        } else {
            if (exist.info.video !== e.video) {
                const data = Object.values(db.get(`all`) || []);
                const newArray = [];
                for (let d of data) {
                    if (d.id === exist.id) continue;
                    else newArray.push(d);
                };
                await db.set(`all`, newArray);
                await db.push(`all`, {
                    type: "film",
                    info: e,
                    id: exist.id
                });
            }
            // --
        }
    });
    await all.series.forEach(async e => {
        const exist = Object.values(db.get("all") || []).find(a => a.info.name === e.name && a.type === "series")
        if (!exist) {
            const id = await methods.randomString(16);
            await db.push(`all`, {
                type: "series",
                info: e,
                id: id
            });
        } else {
            if (exist.info.saison !== e.saison) {
                const data = Object.values(db.get(`all`) || []);
                const newArray = [];
                for (let d of data) {
                    if (d.id === exist.id) continue;
                    else newArray.push(d);
                };
                await db.set(`all`, newArray);
                await db.push(`all`, {
                    type: "series",
                    info: e,
                    id: exist.id
                });
            }
            // --
        }
    });


    // affiche
    const allfilm = Object.values(db.get("all") || []).filter(e => e.type === "film");
    const random0 = allfilm[Math.floor(Math.random() * allfilm.length)];
    await db.set(`affiche_film`, {
        info: random0.info,
        id: random0.id,
        date: Date.now(),
    });
    const allseries = Object.values(db.get("all") || []).filter(e => e.type === "series");
    const random1 = allseries[Math.floor(Math.random() * allseries.length)];
    await db.set(`affiche_series`, {
        type: "series",
        info: random1.info,
        id: random1.id,
        date: Date.now(),
    });
    setInterval(() => {
        const allfilm = Object.values(db.get("all") || []).filter(e => e.type === "film");
        allfilm.forEach(async e => {
            let ee = false;
            if (648000000 - (Date.now() - e.date) > 0) ee = true;
            if (!ee) {
                const random = allfilm[Math.floor(Math.random() * allfilm.length)];
                await db.set(`affiche`, {
                    type: "film",
                    info: random.info,
                    date: Date.now(),
                    id: random.id,
                });
            }
        });
        const allseries = Object.values(db.get("all") || []).filter(e => e.type === "series");
        allseries.forEach(async e => {
            let ee = false;
            if (648000000 - (Date.now() - e.date) > 0) ee = true;
            if (!ee) {
                const random = allseries[Math.floor(Math.random() * allseries.length)];
                await db.set(`affiche`, {
                    type: "series",
                    info: random.info,
                    id: random.id,
                    date: Date.now(),
                });
            }
        })
    }, 60000);


};
loadApp();
setDB();

app.listen(config.server.PORT, () => {
    console.log(`API ON`)
});

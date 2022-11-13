module.exports = {
    path: "/browse",
    method: "get",
    go: async (db, methods, config, req, res) => {
        res.sendFile("index.html", { root: "./src/public/web" });
    }
}
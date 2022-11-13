module.exports = {
    path: "/",
    method: "get",
    go: async (db, methods, config, req, res) => {
        res.redirect("/browse")
    }
}
module.exports = {
    path: "/affiche/:type",
    method: "get",
    go: async (db, methods, config, req, res) => {
        const { type } = req.params;
        if (type === "series") {
            const affiche = await db.get("affiche_series");
            res.send(affiche);
        } else if (type === "film") {
            const affiche = await db.get("affiche_film");
            res.send(affiche);
        }
    }
}
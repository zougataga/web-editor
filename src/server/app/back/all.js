module.exports = {
    path: "/all/:type",
    method: "get",
    go: async (db, methods, config, req, res) => {
        const { type } = req.params;
        if (type === "series" || type === "film") {
            const all = Object.values(await db.get("all") || []).filter(e => e.type == type);
            return res.send(all);
        } else if (type === "all") {
            const all = Object.values(await db.get("all") || []);
            res.send(all);
        }
    }
}
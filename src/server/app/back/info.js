module.exports = {
    path: "/info/:id",
    method: "get",
    go: async (db, methods, config, req, res) => {
        const { id } = req.params;
        const info = Object.values(await db.get("all") || []).filter(e => e.id == id);
        res.send(info);
    }
}
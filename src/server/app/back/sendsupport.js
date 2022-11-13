const axios = require("axios").default;
module.exports = {
    path: "/support/send",
    method: "post",
    go: async (db, methods, config, req, res) => {
        const ip = req.clientIp;
        const cooldown = 60000 * 60;
        const last = await db.get(`ratelimit_${ip}`);
        if (last !== null && cooldown - (Date.now() - last) > '0') return res.json({ err: { error: `ERREUR: Ratelimit !` } });
        const { pseudo, mail, type, description } = req.body;
        if (!pseudo && !mail && !type && !description) return res.json({ err: { error: `ERREUR: Une erreur est survenue merci de réessayer ultérieurement !` } });

        const json = {
            // "username": "CTP CONTACT",
            // "avatar_url": "https://cdn.discordapp.com/attachments/959745586263912478/1006016663453442208/CTP_ROUGE.png",
            "content": null,
            "embeds": [
                {
                    "color": "#E50914",
                    "title": `${pseudo}`,
                    "description": `**${mail}**\`\n\`\`\`${description}\`\`\``,
                    "color": null,
                    "author": {
                        "name": "New Message 👀"
                    }
                }
            ],
            "attachments": []
        };
        await axios.post(config.webhook.contact, json);
        db.set(`ratelimit_${ip}`, Date.now());
        const html = "<script>alert(`Message envoyé avec succès !`);window.location.href = '/'</script>";
        await res.send(html);
    }
}
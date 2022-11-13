const Database = require("better-sqlite3");

let db;
if (!db) db = new Database("./src/data/data.sqlite");

const methods = {
    fetch: require("./methods/fetch.js"),
    set: require("./methods/set.js"),
    add: require("./methods/add.js"),
    subtract: require("./methods/subtract.js"),
    push: require("./methods/push.js"),
    delete: require("./methods/delete.js"),
    has: require("./methods/has.js"),
    all: require("./methods/all.js"),
    type: require("./methods/type"),
};

const data = {

    fetch: function (key, ops) {
        if (!key) throw new Error("No key specified");
        return arbitrate("fetch", { id: key, ops: ops || {} });
    },
    get: function (key, ops) {
        if (!key) throw new Error("No key specified");
        return arbitrate("fetch", { id: key, ops: ops || {} });
    },

    set: function (key, value, ops) {
        if (!key) throw new Error("No key specified");
        if (!value) throw new Error("No value specified");
        return arbitrate("set", {
            stringify: true,
            id: key,
            data: value,
            ops: ops || {},
        });
    },

    add: function (key, value, ops) {
        if (!key) throw new Error("No key specified");
        if (isNaN(value)) throw new Error("Must specify value to add");
        return arbitrate("add", { id: key, data: value, ops: ops || {} });
    },

    subtract: function (key, value, ops) {
        if (!key) throw new Error("No key specified");
        if (isNaN(value)) throw new Error("Must specify value to subtract");
        return arbitrate("subtract", { id: key, data: value, ops: ops || {} });
    },

    push: function (key, value, ops) {
        if (!key) throw new Error("No key specified");
        if (!value && value != 0) throw new Error("Must specify value to push");
        return arbitrate("push", {
            stringify: true,
            id: key,
            data: value,
            ops: ops || {},
        });
    },

    delete: function (key, ops) {
        if (!key) throw new Error("No key specified");
        return arbitrate("delete", { id: key, ops: ops || {} });
    },

    has: function (key, ops) {
        if (!key) throw new Error("No key specified");
        return arbitrate("has", { id: key, ops: ops || {} });
    },

    includes: function (key, ops) {
        if (!key) throw new Error("No key specified");
        return arbitrate("has", { id: key, ops: ops || {} });
    },

    all: function (ops) {
        return arbitrate("all", { ops: ops || {} });
    },

    fetchAll: function (ops) {
        return arbitrate("all", { ops: ops || {} });
    },

    type: function (key, ops) {
        if (!key) throw new Error("No key specified");
        return arbitrate("type", { id: key, ops: ops || {} });
    },

};
module.exports = data;

function arbitrate(method, params, tableName) {
    const options = {
        table: tableName || params.ops.table || "json",
    };
    db.prepare(`CREATE TABLE IF NOT EXISTS ${options.table} (ID TEXT, json TEXT)`).run();
    if (params.ops.target && params.ops.target[0] === ".")
        params.ops.target = params.ops.target.slice(1);
    if (params.data && params.data === Infinity)
        throw new Error(`You cannot set Infinity into the database @ ID: ${params.id}`);
    if (params.stringify) {
        try {
            params.data = JSON.stringify(params.data);
        } catch (e) {
            throw new Error(`Please supply a valid input @ ID: ${params.id}\nError: ${e.message}`);
        }
    };
    if (params.id && params.id.includes(".")) {
        let unparsed = params.id.split(".");
        params.id = unparsed.shift();
        params.ops.target = unparsed.join(".");
    };
    return methods[method](db, params, options);
}

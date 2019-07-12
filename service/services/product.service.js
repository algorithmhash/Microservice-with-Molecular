"use strict";

const DbService = require("moleculer-db");
const MongoAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
    name: "products",
    mixins: [DbService],
    adapter: new MongoAdapter("mongodb://localhost/service"),
    collection: "products"
};
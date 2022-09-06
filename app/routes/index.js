"use strict";

const botlyRouter = require("./botly.router");

module.exports = function(_app) {
    _app.use(botlyRouter);
};
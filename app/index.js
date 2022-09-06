"use strict";

const Express = require("express");
const UserAgent = require("express-useragent");
const Cors = require("cors");

const Routes = require("./routes");
const App = Express();
const morgan = require("morgan");

App.use(morgan("tiny"));
App.use(Cors());
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json({ limit: "10mb" }));
App.use(UserAgent.express());

// Validar SERVIDOR ACTIVO
App.get("/", async(_req, _res) => {
    return _res.status(200).send(`its Works!.`);
});

// Seteamos rutas Rutas
Routes(App);

// Exportar module
module.exports = App;
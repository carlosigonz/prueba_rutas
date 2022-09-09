"use strict";

const Router = require("express").Router();

/** Controller */

const {
    BotlyTestController,
    BotlyHelloController,
    createUserController,
    getUsersController,
} = require("../controllers/botly_test.controller");

/**
 * @version             :1.0.0
 * @description         :Servicio para hacer una prueba en postman
 * @method              :get
 * @type                :body
 */
Router.get("/v1/postman_test", BotlyTestController);

/**
 * @version             :1.0.0
 * @description         :Servicio para saludar
 * @method              :get
 * @type                :body
 * @param {String} username - usuario de botly
 * @param {String} password - contrasena del usuario de botly
 */
Router.get("/v1/postman_hello", BotlyHelloController);

/**
 * @version             :1.0.0
 * @description         :Servicio para insetar un usuario en la base de datos
 * @method              :post
 * @type                :body
 */
Router.post("/v1/create_user", createUserController);

/**
 * @version             :1.0.0
 * @description         :Servicio para saludar
 * @method              :get
 * @type                :body
 */
Router.get("/v1/users", getUsersController);

module.exports = Router;
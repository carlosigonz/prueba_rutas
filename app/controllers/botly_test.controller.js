"use strict";

const {
    createNewUserDBService,
    getAllUserService,
} = require("../services/botly.services");

module.exports = {
    /**
     *
     * @version         :1.0.0
     * @description     :Controlador para hacer prueba de postman
     * @param {Object} _req - Objeto request de express
     * @param {Object} _res - Objeto response de express
     * @return {HttpResponse}
     *
     */
    BotlyTestController: async(_req, _res) => {
        _res.json("Se logro la prueba");
    },

    /**
     *
     * @version         :1.0.0
     * @description     :Controlador para hacer prueba de postman
     * @param {Object} _req - Objeto request de express
     * @param {Object} _res - Objeto response de express
     * @return {HttpResponse}
     *
     */
    BotlyHelloController: async(_req, _res) => {
        _res.json("Hola desde el servidor");
    },

    /**
     *
     * @version         :1.0.0
     * @description     :Controlador para hacer crear un usuario en la bd
     * @param {Object} _req - Objeto request de express
     * @param {Object} _res - Objeto response de express
     * @return {HttpResponse}
     *
     */
    createUserController: async(_req, _res) => {
        try {
            // la variable que tiene los campos que vienen de la peticion
            const { name, lastname } = _req.body;
            // llamo al service que va a hacer el create en bd con los parametros que llegan
            const service = await createNewUserDBService(name, lastname).catch(
                _error => {
                    console.log(_error);
                }
            );
            // respondemos
            return _res.json(
                "Usuario creado exitosamente --> " + JSON.stringify(service.dataValues)
            );
        } catch (_error) {
            console.log("error trycatch controller --> " + _error);
        }
    },

    /**
     *
     * @version         :1.0.0
     * @description     :Controlador para hacer listar los usuarios de la bd
     * @param {Object} _req - Objeto request de express
     * @param {Object} _res - Objeto response de express
     * @return {HttpResponse}
     *
     */
    getUsersController: async(_req, _res) => {
        try {
            // llamo al service que va a hacer listado en bd
            const DB_USERS = await getAllUserService().catch(_error => {
                console.log(_error);
            });

            // Respondemos
            _res.json(DB_USERS);
        } catch (_error) {
            console.log("error trycatch controller --> " + _error);
        }
    },
};
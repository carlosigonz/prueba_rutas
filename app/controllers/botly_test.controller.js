"use strict";

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
};
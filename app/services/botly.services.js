"use strict";

/** Models */

const usersModel = require("../../common/models/users.model");

module.exports = {
    /**
     * @type            :Service
     * @version         :1.0.0
     * @description     :Servicio para crear un nuevo usuario en la base de datos
     * @param {String}  _name   -Nombre del usuario a crear
     * @param {String}  _lastname   -Apellido del usuario a crear
     * @returns
     */
    async createNewUserDBService(_name, _lastname) {
        try {
            const SAVE_USER = {
                name: _name,
                lastname: _lastname,
            };
            // query para insertar un nuevo row en la tabla users_serial
            return await usersModel.create(SAVE_USER).catch(_error => {
                console.log("Entre al error: " + _error);
            });
        } catch (error) {
            console.log("error al crear el bicho en bd");
        }
    },

    /**
     * @type            :Service
     * @version         :1.0.0
     * @description     :Servicio para listar usuarios de la base de datos
     * @returns
     */
    async getAllUserService() {
        try {
            return await usersModel
                .findAll({
                    attributes: [
                        ["id_user", "idUser"],
                        ["name", "name"],
                        ["lastname", "lastname"],
                    ],
                    raw: true,
                    subQuery: false,
                })
                .catch(_error => {
                    console.log("Entre al error: " + _error);
                });
        } catch (error) {
            console.log("error al listar");
        }
    },
};
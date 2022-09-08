"use strict";

const Sequelize = require("sequelize");
const { BT_CMM_SERVER } = require("../configs");
const BT_SEQUELIZE = BT_CMM_SERVER.DatabasePg;

/**
 * Modelo tabla users_serial
 */
const Model = BT_SEQUELIZE.define(
    "users_serial", {
        name: { type: Sequelize.STRING },
        lastname: { type: Sequelize.STRING },
        id_user: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    }, { tableName: "users_serial", schema: "public", timestamps: false }
);

module.exports = Model;
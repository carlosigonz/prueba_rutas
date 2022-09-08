"use strict";

const Sequelize = require("sequelize");

module.exports = {
    /**
     * Conexion al motor de base de datos postgresql
     */
    DatabasePg: new Sequelize({
        dialect: "postgres",
        host: "ec2-54-208-104-27.compute-1.amazonaws.com",
        port: 5432,
        database: "d45uis4euhf5ut",
        username: "yrneaunylhohcp",
        password: "7d8c51321d2d9845683b53f6e96483e075333c2e3e49e5ce3b3993e1c91ef8c2",
        dialectOptions: {
            ssl: {
                require: true, // This will help you. But you will see nwe error
                rejectUnauthorized: false, // This line will fix new error
            },
        },
    }),
};
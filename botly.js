"use strict";

try {
    // Iniciamos nuestra APP
    const App = require("./app");

    const { PORT } = require("./app/config/index");

    App.listen(PORT, () => {
        console.log("Corriendoooo");
    });
} catch (_error) {
    console.error("Error trycatch index\n\n", _error);
}
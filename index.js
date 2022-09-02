const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes, BotsRoutes, ProfileRoutes } = require("./routes");
const { NotFoundMiddleware } = require("./middlewares");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes);
server.use("/", BotsRoutes);
server.use("/", ProfileRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Application running on PORT ${PORT}`);
});
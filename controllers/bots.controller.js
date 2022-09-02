const path = require("path");

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class BotsController {
    async bots(req, res) {
        return render("bots", res);
    }
}

module.exports = new BotsController();
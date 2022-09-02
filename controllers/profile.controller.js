const path = require("path");

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class ProfileController {
    async profile(req, res) {
        return render("profile", res);
    }
}

module.exports = new ProfileController();
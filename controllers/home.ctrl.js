class HomeCtrl {
    get(req, res) {
        res.status(200);
        res.send("Express Seed");
    }

    health(req, res) {
        res.status(200);
        res.json({ status: 'Up' });
    }
}

module.exports = new HomeCtrl();
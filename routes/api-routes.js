var db = require("../models");

module.exports = function(app) {
	//GET ALL ROUTE
	app.get("/", function(req, res) {
		db.Item.findAll({}).then(function(dbItem) {
			res.json(dbItem);
		});
	});

	//CREATE ONE ROUTE
	app.post("/create", function(req, res) {
		db.Item.create({
			title: req.body.title,
			urgency: req.body.urgency,
			category: req.body.category
		}).then(function(dbItem) {
			res.json(dbItem);
		});
	});

	//UPDATE ONE ROUTE
	app.put("/update/:id?", function(req, res) {
		db.Item.update(req.body, {
			where: {
				id: req.params.id
			}
		}).then(function(dbItem) {
			res.json(dbItem);
		});
	});

	//DELETE ONE ROUTE
	app.delete("/delete/:id?", function(req, res) {
		db.Item.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbItem) {
			res.json(dbItem);
		});
	});
};

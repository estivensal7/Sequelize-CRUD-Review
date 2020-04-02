var express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log(`Server listening on PORT: ${3000}`);
	});
});

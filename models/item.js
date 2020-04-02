module.exports = function(sequelize, DataTypes) {
	var Item = sequelize.define("Item", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		urgency: {
			type: DataTypes.STRING,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			defaultValue: "Work"
		}
	});

	return Item;
};

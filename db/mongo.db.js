const mongoose = require("mongoose");
exports.databaseConnection = async () => {
  await mongoose.connect(appConfigs.DB_URL);
};
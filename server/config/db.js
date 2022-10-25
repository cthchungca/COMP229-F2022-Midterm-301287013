var prefix = "mongodb+srv://";
var dbUrl = "cluster0.jvedyi3.mongodb.net/";
var postfix = "?retryWrites=true&w=majority";

var dbName = "car_store";
var username = "compuser";
var password = "qNV4uYWrBdTELFdg";
var fullUrl =
  "mongodb+srv://<username>:<password>@cluster0.jvedyi3.mongodb.net/<dbname>?retryWrites=true&w=majority";
//var connString = prefix+username+':'+password+'@'+dbUrl+dbName+postfix;
fullUrl = fullUrl
  .replace("<username>", username)
  .replace("<password>", password)
  .replace("<dbname>", dbName);


module.exports = {
  //local MongoDB deployment ->
  //URI: "mongodb://127.0.0.1/car_store",
  URI: fullUrl,
};

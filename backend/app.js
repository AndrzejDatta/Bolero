const Quote = require("inspirational-quotes");
const express = require("express");
const editJsonFile = require("edit-json-file");

console.log(Quote.getQuote());

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("/", function (req, res) {
//   res.send(Quote.getQuote());
// });

let file = editJsonFile(`${__dirname}/marks.json`);
// file.append("elements", { Taste: "peach", Ania: "3", Andrzej: "4" });

// file.save();

// file = editJsonFile(`${__dirname}/filename.json`, {
//   autosave: true,
// });

app.get("/", function (req, res) {
  res.send(file);
});

console.log(file.data.elements);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, function () {
  //function connects and listen to any activity on defined port
  console.log("Server started successfully");
});

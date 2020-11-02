var express = require("express");
var cors = require("cors");
var axios = require("axios");

var app = express();
app.use(cors());

app.get("/", function (req, res) {
  const url = req.query.url;
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      }
    })
    .catch((err) => {
      console.log("Error making request");
      res.send(err);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

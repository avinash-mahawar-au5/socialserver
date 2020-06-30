const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const methodOverride = require("method-override");
const mongoosedb = require("./db/mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
const ApiRouter = require("./routes/Api");

mongoosedb();
app.use(compression());
app.use(cors());
app.use(methodOverride());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api", ApiRouter);

app.use(express.static("../client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

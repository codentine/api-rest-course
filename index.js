const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const { notFound, errorHandler } = require('./lib/middlewares/error.middleware')
const app = express();

const port = process.env.PORT || 3030
require("./lib/mongoose");
// json
app.use(bodyParser.json())

// www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

require("./routes")(app);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log("Escuchando el puerto: " + port));


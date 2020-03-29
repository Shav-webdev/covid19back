const express = require("express");
const morgan = require("morgan");
const userRouter = require("./api/routes/user.routes");
const { db } = require("./db/db");
const cors = require("cors");


const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/server/api"));
app.use(userRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});
db(server);

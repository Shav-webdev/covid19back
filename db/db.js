const mongoose = require("mongoose");
const uri =
    "mongodb+srv://user_1:OVcW6ZOCI9JBTxbR@cluster0-ecojk.mongodb.net/covid19?retryWrites=true&w=majority";

module.exports.db = server => {
    mongoose
        .connect(
            uri,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
            },
            () => server
        )
        .then(() => console.log("Mongo db started ..."))
        .catch(e => console.log(e));
};

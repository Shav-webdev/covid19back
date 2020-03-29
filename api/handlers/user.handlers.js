const url = require("url");
const querystring = require("querystring");
const User = require("../models/user.model");
const {messages} = require("../../utils/constants");
const {types, query} = messages;
const {geoModel, validationError} = types;
const {defaultErr, noUser, dataCreated} = query;

module.exports.createUser = (req, res) => {
    const userData = req.body;
    const user = new User({
        ...userData,
        birthday: userData.year,
        location: { coordinates: [userData.longitude, userData.latitude] },
    });
    user.save(err => {
        if (err) {
            if (err.name === validationError) {
                return res.status(400).send({ message: err.message });
            }
            return res.status(404).send({
                message: defaultErr,
            });
        }
        res.status(201).send({ message: dataCreated });
    });
};

module.exports.getUsers = async (req, res) => {
    let parsedUrl = url.parse(req.url);
    let parsedQs = querystring.parse(parsedUrl.query);
    const userLocation = [parsedQs.longitude, parsedQs.latitude];

    try {
        User.find({
            location: {
                $near: {
                    $geometry: {
                        type: geoModel,
                        coordinates: userLocation,
                    },
                    $minDistance: 10,
                    $maxDistance: 50000,
                },
            },
        })
            .then(users => {
                res.status(200).send(users);
            })
            .catch(e => {
                res.status(404).send({
                    message: noUser,
                });
            });
    } catch (e) {
        console.log(e);
    }
};

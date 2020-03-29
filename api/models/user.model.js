const { Schema, model } = require("mongoose");
const { messages } = require("../../utils/constants");
const { validation } = messages;
const {
  nameMaxLength,
  nameMinLength,
  nameRegexp,
  nameRequired,
  lastNameMaxLength,
  lastNameMinLength,
  lastNameRegexp,
  lastNameRequired,
  birthdayMax,
  birthdayMin,
  birthdayRequired,
  coordinatesRequired,
  temperatureMax,
  temperatureMin,
  temperatureRegexp,
  temperatureRequired,
} = validation;

const usersSchema = new Schema({
  firstName: {
    type: String,
    minlength: [2, nameMinLength],
    maxlength: [20, nameMaxLength],
    validate: {
      validator: function (v) {
        const re = new RegExp(/^([a-zA-Z]{2,20})$/);
        return re.test(v);
      },
      message: nameRegexp,
    },
    required: [true, nameRequired],
  },
  lastName: {
    type: String,
    minlength: [2, lastNameMinLength],
    maxlength: [20, lastNameMaxLength],
    validate: {
      validator: function (v) {
        const re = new RegExp(/^([a-zA-Z]{2,20})$/);
        return re.test(v);
      },
      message: lastNameRegexp,
    },
    required: [true, lastNameRequired],
  },
  temperature: {
    type: Number,
    min: [30, temperatureMin],
    max: [50, temperatureMax],
    validate: {
      validator: function (v) {
        const isNumeric = v => /^-{0,1}\d*\.{0,1}\d+$/.test(v);
        return isNumeric(v) && v >= 30 && v <= 50;
      },
      message: temperatureRegexp,
    },
    required: [true, temperatureRequired],
  },
  birthday: {
    type: Date,
    min: ["1920-01-01", birthdayMin],
    max: [new Date(), birthdayMax],
    required: [true, birthdayRequired],
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: [true, coordinatesRequired],
    },
  },
  createdTime: {
    type: Number,
    default: () => Number(Date.now()),
  },
});

usersSchema.index({ location: "2dsphere" });
module.exports = model("User", usersSchema);

module.exports.messages = {
    validation: {
        nameMinLength: "Name must be at least 2 characters.",
        nameMaxLength: "Name must be less than 20 characters.",
        nameRequired: "Name field is required!",
        nameRegexp: "Name field is not a valid!",
        lastNameMinLength: "Last name must be at least 2 characters.",
        lastNameMaxLength: "Last name must be less than 20 characters.",
        lastNameRequired: "Last name field is required!",
        lastNameRegexp: "Last name field is not a valid!",
        temperatureMin: "Temperature field min is 36 degree",
        temperatureMax: "Your temperature is too high please call 911",
        temperatureRequired: "Temperature field is required!",
        temperatureRegexp: "Temperature field is not a valid!",
        birthdayMin: "Last date is not valid!",
        birthdayMax: "Future date is not valid!",
        birthdayRequired: "Birthday field is required!",
        coordinatesRequired: "Coordinates is required!",
    },
    types: {
        geoModel: "Point",
        validationError: "ValidationError",
    },
    query: {
            defaultErr: "Something went wrong",
            noUser: "No user founded",
            dataCreated: "Data successfully created!"
    }
};

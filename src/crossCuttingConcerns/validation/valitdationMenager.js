import DataError from "../../models/dataError.js";

export default class ValidationMenager {
    constructor() {
        this.errors = []
    }
    isRequired(entity, ...filters) {
        let hasErrors = false
        for (let field of filters) {
            if (!entity[field] || entity[field] == "") {
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem. ${field} is required`, entity));
            }
        }
        return hasErrors;
    }

    isNumeric(entity, ...filters) {
        let hasErrors = false;
        for (let field of filters) {
            if (Number.isNaN(Number.parseInt(entity[field])) || typeof (entity[field]) === "undefined") {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${entity[field]} is not a number`, entity))
            }
        }

        return hasErrors;
    }

    getErorrResults() {
        return this.errors;
    }
}
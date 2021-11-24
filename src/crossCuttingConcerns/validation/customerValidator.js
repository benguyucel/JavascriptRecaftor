import ValidationMenager from "./valitdationMenager.js";

export default class CustomerValidator {
    constructor() {
        this.validatorMenager = new ValidationMenager
        this.errors = []
        this.validateArr = [];
    }
    validate(user) {
        let hasError = false
        this.validateArr.push(
            this.validatorMenager.isRequired(user, "id", "firstName", "lastName"),
            this.validatorMenager.isNumeric(user, "age")
        )
        this.validateArr.forEach(isTrue => {
            if (isTrue) {
                console.log(this.validatorMenager.getErorrResults())
                hasError = true;               
            }
        });
        return hasError;
    }
  
   

}
import CustomerValidator from "../crossCuttingConcerns/validation/customerValidator.js";
import {
    users
} from "../data/users.js";

export default class CustomerService {
    constructor(){
        this.customers = users.filter(user => user.type === "customer");
    }
    list() {
        return this.customers;
    }
    
    add(entity){
        let customerValidator = new CustomerValidator;
        if (!customerValidator.validate(entity)) {
            this.customers.push(entity)
            console.log(customerValidator.getResult())
            
        }
    }

    getById(id) {
        let getDataById = this.customers.filter(cus => cus.id == id);
        return getDataById;
    }
}
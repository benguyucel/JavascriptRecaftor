import EmployeeValidator from "../crossCuttingConcerns/validation/employeeValidator.js";
import {
    users
} from "../data/users.js";
export default class EmployeeService {
    constructor() {

        this.employee = users.filter(user => user.type === "employee");
        this.errors = [];
    }

    list() {
        return this.employee;
    }

    add(entity) {
        let employeeValidator = new EmployeeValidator;
        if (!employeeValidator.validate(entity)) {
            this.employee.push(entity)           
        }
    }
    getById(id) {
        let getDataById = this.employee.filter(emp => emp.id == id);
        return getDataById;
    }
}

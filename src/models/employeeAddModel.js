import User from "./user.js";

export default class EmployeeAddModel extends User {
    constructor(id, firstName, lastName, city,age){
        super(id, firstName, lastName, city,age);
        this.type="employee"
    }
}
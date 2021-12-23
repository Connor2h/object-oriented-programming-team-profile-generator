const Employee = require("./Employee");

//manager class that extends employee
class Manager extends Employee {
    constructor(name = '', id, email, officeNumber) {
        //call to parent constructor
        super(name, id, email, officeNumber);

        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;
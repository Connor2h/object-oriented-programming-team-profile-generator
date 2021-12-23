const Employee = require("./Employee");

//manager class that extends employee
class Intern extends Employee {
    constructor(name = '', id, email, school) {
        //call to parent constructor
        super(name, id, email, school);

        this.school = school;
    }

    gitSchool(){
        return this.school ;
    }

    getRole(){
        return 'Intern';
    }

}

module.exports = Intern;
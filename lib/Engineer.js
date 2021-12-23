const Employee = require("./Employee");

//manager class that extends employee
class Engineer extends Employee {
    constructor(name = '', id, email, github) {
        //call to parent constructor
        super(name, id, email, github);

        this.github = github;
    }

    gitGithub(){
        return this.github ;
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;
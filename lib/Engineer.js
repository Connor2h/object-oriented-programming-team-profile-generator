const Employee = require("./Employee");

//manager class that extends employee
class Engineer extends Employee {
    constructor(name = '', id, email, gitHubUserName) {
        //call to parent constructor
        super(name, id, email, gitHubUserName);

        this.gitHubUserName = gitHubUserName;
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;
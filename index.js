const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const employeeDatabase = [];


const promptUser = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter your team Manager's name. (Required)",
            validate: managerName => {
                if(managerName){
                    return true
                }else{
                    console.log("Please enter your team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter your team Manager's employee ID. (Required)",
            validate: managerID => {
                if(managerID){
                    return true
                }else{
                    console.log("Please enter your team Manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter your team Manager's email. (Required)",
            validate: managerEmail => {
                if(managerEmail){
                    return true
                }else{
                    console.log("Please enter your team Manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "Please enter your team Manager's office number. (Required)",
            validate: managerOfficeNum => {
                if(managerOfficeNum){
                    return true
                }else{
                    console.log("Please enter your team Manager's office number!");
                    return false;
                }
            }
        }
    ]).then(managerAnswers => {

        let manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.managerOfficeNum);
        employeeDatabase.push(manager);

    })

}

const promptTeam = () =>{
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'options',
            message: 'What would you like to do next? (Check only one)',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        },
    ])
}

promptUser()
    .then(promptTeam)
    .then(optionSelect =>{
        //check which option they choose
        if(optionSelect.options[0] === "Add an Engineer"){
            console.log("Engineer added");
        }
        else if(optionSelect.options[0] === "Add an Intern"){
            console.log("Intern added");
        }
        else{
            console.log("finish building my team");
        }
    })
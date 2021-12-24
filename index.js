const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/writeFile');

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
        //console.log(employeeDatabase);

    })

}

const promptTeam = () =>{
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'options',
            message: 'What would you like to do next? (Check only one)',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        }
    ]).then(optionSelect =>{
        //check which option they choose
        if(optionSelect.options[0] === "Add an Engineer"){
            makeEngineer();
        }
        else if(optionSelect.options[0] === "Add an Intern"){
            makeIntern();
        }
        else{
            let htmlPage = generatePage(employeeDatabase)
            let passFile = writeFile(htmlPage);
            return copyFile(passFile);
        }
    })
}

//creates engineer
function makeEngineer(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter your Engineer's name. (Required)",
                validate: engineerName => {
                    if(engineerName){
                        return true
                    }else{
                        console.log("Please enter your Engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "Please enter your Engineer's ID. (Required)",
                validate: engineerID => {
                    if(engineerID){
                        return true
                    }else{
                        console.log("Please enter your Engineer's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter your Engineer's email. (Required)",
                validate: engineerEmail => {
                    if(engineerEmail){
                        return true
                    }else{
                        console.log("Please enter your Engineer's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter your Engineer's Github. (Required)",
                validate: engineerGithub => {
                    if(engineerGithub){
                        return true
                    }else{
                        console.log("Please enter your Engineer's Github!");
                        return false;
                    }
                }
            }
        ]).then((engineerAnswers)=>{
            //create/store new Engineer object
            let engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerID, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub,);
            employeeDatabase.push(engineer);

            promptTeam();

        });
}

//creates engineer
function makeIntern(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter your Intern's name. (Required)",
                validate: internName => {
                    if(internName){
                        return true
                    }else{
                        console.log("Please enter your Intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "Please enter your Intern's ID. (Required)",
                validate: internID => {
                    if(internID){
                        return true
                    }else{
                        console.log("Please enter your Intern's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter your Intern's email. (Required)",
                validate: internEmail => {
                    if(internEmail){
                        return true
                    }else{
                        console.log("Please enter your Intern's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter your Intern's school. (Required)",
                validate: internSchool => {
                    if(internSchool){
                        return true
                    }else{
                        console.log("Please enter your Intern's school!");
                        return false;
                    }
                }
            }
        ]).then((internAnswers)=>{
            //create/store new Intern object
            let intern = new Intern(internAnswers.internName, internAnswers.internID, internAnswers.internEmail, internAnswers.internSchool,);
            employeeDatabase.push(intern);

            //recursion to promptTeam again
            promptTeam();

        });
}

promptUser()
    .then(promptTeam)
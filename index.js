const inquirer = require('inquirer');


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
        }
    ]).then(managerAnswers => {
        console.log(managerAnswers);
    })

}

promptUser();
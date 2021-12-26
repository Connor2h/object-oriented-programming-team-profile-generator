
//create manager card
function generateManagerHTML(manager){
    return `
    <div class="card" style="width: 18rem;"> 
    <div class="card-body bg-primary text-white">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text oi oi-briefcase"> ${manager.getRole()}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `
}

//create engineer cards
function generateEngineerHTML(engineer){

    return `
    <div class="card" style="width: 18rem;"> 
    <div class="card-body bg-primary text-white">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text oi oi-headphones"> ${engineer.getRole()}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
    </div>
    `
}

//create intern cards
function generateInternHTML(intern){

    return `
    <div class="card" style="width: 18rem;"> 
    <div class="card-body bg-primary text-white">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text oi oi-person"> ${intern.getRole()}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    `
}

//create the page template
module.exports = templateData => {

    //create array to hold all of the cards
    let bodyContent = [];
    //break down templateData array by manager, engineer, & interns
    //use manager data to create manager card
    //add manager card to bodyContent
    //use eng data to create eng card
    //add eng card to bodyContent
    //use int data to create intern card
    //add int card to bodyContent
    //add bodyContent to the main tag
    bodyContent.push(templateData.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHTML(manager)).join(''));
    bodyContent.push(templateData.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineerHTML(engineer)).join(''));
    bodyContent.push(templateData.filter(intern => intern.getRole() === "Intern").map(intern => generateInternHTML(intern)).join(''));

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css">
        <title>My Team Generator</title>
    </head>
    <body>
        <div class="jumbotron bg-danger text-white text-center">
            <h1 class="display-4 ">My Team</h1>
        </div>

        <div class="container">
            <div class="row text-center justify-content-center">
                ${bodyContent}
            </div>
        </div>

    </body>
    </html>
    `;
};
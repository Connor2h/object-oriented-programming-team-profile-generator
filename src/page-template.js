const Manager = require("../lib/Manager");


//create the page template
module.exports = templateData => {
    console.log(templateData);
    let bodyContent = [];
    //break down templateData array by manager, engineer, & interns
    //use manager data to create manager card
    //add manager card to bodyContent
    //use eng data to create manager card
    //add eng card to bodyContent
    //use int data to create manager card
    //add int card to bodyContent
    //add bodyContent to the main tag
    //.filter(({ feature }) => feature)
    //bodyContent.push(templateData.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHTML(manager)));
    bodyContent.push(templateData.filter(employee => employee.getRole() === "Engineer"));
    console.log(bodyContent);

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
            <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
            </nav>
        </div>
        </header>
        <main class="container my-5">
            
        </main>
        <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
        </footer>
    </body>
    </html>
    `;
};
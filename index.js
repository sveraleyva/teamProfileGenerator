// packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");
const team = [];

// Generate HTML
const generateHTML = (team) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Builder</title>
</head>
<body>
<div>${team} </div>
</body>
</html>`;

//
const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "integer",
    message: "What is the team manager's employee ID?",
    name: "managerID",
  },
  {
    type: "input",
    message: "What is the team manager's email address?",
    name: "managerEmail",
  },
  {
    type: "integer",
    message: "What is the team manager's office number?",
    name: "managerON",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "employeeName",
  },
  {
    type: "integer",
    message: "What is the engineer's employee ID?",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is the engineer's email address?",
    name: "employeeEmail",
  },
  {
    type: "input",
    message: "What's the engineer's github?",
    name: "engineerGithub",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "employeeName",
  },
  {
    type: "integer",
    message: "What is the intern's employee ID?",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "employeeEmail",
  },
  {
    type: "input",
    message: "What's the inters's school?",
    name: "internSchool",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    let manager = response;
    team.push(manager);
    createTeam();
  });
}

function createTeam() {
  inquirer
    .prompt({
      type: "list",
      message: "Do you want to add an Engineer or an intern?",
      name: "main",
      choices: ["Intern", "Engineer", "Finish"],
    })
    .then((response) => {
      let type = response.main;
      if (type === "Engineer") {
        createEmployee("engineer");
      } else if (type === "Intern") {
        createEmployee("intern");
      } else {
        console.log("final team", team);
        const parseHTML = generateHTML(response);
        fs.writeFile("team.html", parseHTML, (err) =>
          err ? console.error(err) : console.log("Success!")
        );
      }
    });
}

// create employee function can only be used for intern or engineer
function createEmployee(employeeType) {
  if (employeeType === "intern") {
    inquirer.prompt(internQuestions).then((response) => {
      let intern = response;
      team.push(intern);
      createTeam();
    });
  } else {
    inquirer.prompt(engineerQuestions).then((response) => {
      let engineer = response;
      team.push(engineer);
      createTeam();
    });
  }
}

init();

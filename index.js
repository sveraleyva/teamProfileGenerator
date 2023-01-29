// packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");
const team = [];

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

const employeeQuestions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "employeeName",
  },
  {
    type: "integer",
    message: "What is the employee's employee ID?",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "employeeEmail",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What's the engineer's github?",
    name: "engineerGithub",
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
    message: "What's the inters's school?",
    name: "internSchool",
  },
];

// function to create manager
function createManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    console.log(response);
    // push manager onto team array
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
      console.log(response);
      if (response === "Engineer") {
        createEngineer();
      } else if (response === "Intern") {
        createIntern();
      } else {
        const parseHTML = generateHTML(response);
        fs.writeFile("team.html", parseHTML, (err) =>
          err ? console.error(err) : console.log("Success!")
        );
      }
    });
}

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
<div>${managerName} </div>
<div>${managerID} </div>
<div>${managerEmail} </div>
<div>${managerNumber} </div>
</body>
</html>`;

// Ask Questions to Populate HTML
// function to write team roster file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  return fs.writeFileSync(fileName, markdown);
}

function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    console.log(response);
  });
}

// function to initialize app
// function init() {
//   inquire.prompt(managerQuestions).then((response) => {
//     console.log(response);
//     if (managerQuestions.main = "Intern") {
//       inquire.prompt(employeeQuestions).then((response) => {
//         console.log(response);
//       inquire.prompt(internQuestions).then((response) => {
//         console.log(response);
//     }
//     writeToFile("roster.html", response);
//   });
// }

init();

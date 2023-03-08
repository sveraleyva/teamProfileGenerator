// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const team = [];
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// questions
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

// Generate HTML
// next step -> parse object and make separate html objects for each member
const generateHTML = (team) => {
  let engineerTemplate = "";
  let internTemplate = "";

  // manager section
  const managerTemplate = `<div class="max-w-sm p-6 bg-white border border-[#7c3238] rounded-lg shadow-[#7c3238]">
  <div>${team[0].getName()}</div>
  <div class="text-sm text-gray-500">Manager</div>
  <div>ID: ${team[0].getID()}</div>
  <div>Email: ${team[0].getEmail()}</div>
  <div>School: ${team[0].getOfficeNumber()}</div>
  </div>`;

  // get all engineers/interns in different arrays
  const engineers = team.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  const interns = team.filter((employee) => employee.getRole() === "Intern");

  // loop through the arrays to make separate engineer/intern cards on HTML, unless there are none in the team
  if (engineers.length > 0) {
    engineers.forEach((engineer) => {
      engineerTemplate += `<div class="max-w-sm m-2 p-6 bg-white border border-[#b7245c] rounded-lg shadow-[#b7245c]"> 
      <div class="mb-1 text-xl font-medium text-gray-900">${engineer.getName()}</div>
      <div class="text-sm text-gray-500">Engineer</div>
      <div>ID: ${engineer.getID()}</div>
      <div>Email: ${engineer.getEmail()}</div>
      <a href="https://github.com/${engineer.getGithub()}">Github: ${engineer.getGithub()}
      </div>`;
    });
  }

  if (interns.length > 0) {
    interns.forEach((intern) => {
      internTemplate += `<div class="max-w-sm m-2 p-6 bg-white border border-[#002500] rounded-lg shadow-[#002500]"> 
      <div>${intern.getName()}</div>
      <div class="text-sm text-gray-500">Intern</div>
      <div>ID: ${intern.getID()}</div>
      <div>Email: ${intern.getEmail()}</div>
      <div>School: ${intern.getSchool()}</div>
      </div>`;
    });
  }

  const document = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Team Profile Builder</title>
  </head>
  <body class="font-serif text-base">
    <nav class="p-3 border-white rounded bg-green-50">
    <div class="container flex flex-wrap items-center justify-center mx-auto">
      <h1 class="text-left mb-2 text-xl font-extrabold md:text-2xl lg:text-3xl">
      <a class="uppercase text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-[#002500] via-[#929982] to-[#002500]" href="/">YOUR TEAM</a>
      </h1>
    </div>
    </nav>
    <div class="flex flex-col flex-wrap justify-center mx-auto mt-3">
      <div class="flex flex-row flex-wrap justify-center m-3">${managerTemplate}</div>
      <div class="flex flex-row flex-wrap justify-center m-3">${engineerTemplate}</div>
      <div class="flex flex-row flex-wrap justify-center m-3">${internTemplate}</div>
    </div>
  </body>
  </html>`;

  return document;
};

function createManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerON
    );
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
        // make HTML file
        const parseHTML = generateHTML(team);
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
      const intern = new Intern(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.internSchool
      );
      team.push(intern);
      createTeam();
    });
  } else {
    inquirer.prompt(engineerQuestions).then((response) => {
      const engineer = new Engineer(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.engineerGithub
      );
      team.push(engineer);
      createTeam();
    });
  }
}

function init() {
  createManager();
}

init();

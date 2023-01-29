// packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");
const team = [];

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

// function to create manager
function createManager() {
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
      console.log(response);
      // push manager onto team array
      createTeam()
    })
  }
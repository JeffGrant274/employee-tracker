const inquirer = require ('inquirer');
const mysql = require ('mysql2');
const cTable = require('console.table')

inquirer
  .prompt([
    {
      type: "input",
      message: "Please Enter a managers name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "Please enter their employee ID",
      name: "managerId",
    },
    {
      type: "input",
      message: "Please enter their email address",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Please enteir their office number",
      name: "managerOffNum",
    },
    {
      type: "list",
      message: "Would you like to add a team member?  Select the role below.",
      choices: ["Engineer", "Intern", "Exit"],
      name: "moreStaff",
    },
  ])
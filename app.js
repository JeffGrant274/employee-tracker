// declaring dependencies 
const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const chalk = require("chalk");
const figlet = require("figlet");
const log = console.log;

//server connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Alexander7996",
  database: "joseDB",
});

connection.connect(function (err) {
  if (err) throw err;
  questions();
});

//start title graphic
 log(
    chalk.red(figlet.textSync("Employee Tracker", { horizontalLayout: "full" }))
  );

//initial menu prompt function
function questions() {
 
  inquirer
    .prompt({
      message: "Please select an option",
      type: "list",
      name: "selection",
      choices: [
        "View all employees",
        "View all departments",
        "Add an employee",
        "Add a department",
        "Add a role",
        "Update an Employee Role",
        "Exit",
      ],
    })
    .then((answers) => {
      console.log(answers.selection);
      switch (answers.selection) {
        case "View all employees":
          viewEmployees();
          break;

        case "View all departments":
          viewDept();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Add a department":
          addDept();
          break;

        case "Add a role":
          addRole();
          break;

        case "Update an Employee Role":
          updateRole();
          break;

        default:
          connection.end();
          break;
      }
    });
}

//function to view all employees 
function viewEmployees() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    questions();
  });
}

//function to view all departments
function viewDept() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    questions();
  });
 
}

//function to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "laName",
        message: "What is the employee's last name?",
      },
      {
        type: "number",
        name: "roleId",
        message: "What is the employee's role Id",
      },
      {
        type: "number",
        name: "manId",
        message: "What is the employee's manager's Id?",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [res.firName, res.laName, res.roleId, res.manId],
        function (err, res) {
          if (err) throw err;
          console.table(res, "Added");
          questions();
        }
      );
    });
}

//function to add a department
function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "dept",
        message: "Please enter the new department",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [res.dept],
        function (err, res) {
          if (err) throw err;
          console.table(res, "Added");
          questions();
        }
      );
    });
}

//function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        message: "Enter the title:",
        type: "input",
        name: "title",
      },
      {
        message: "Enter the salary:",
        type: "number",
        name: "salary",
      },
      {
        message: "Enter the department Id:",
        type: "number",
        name: "dept_id",
      },
    ])
    .then(function (response) {
      connection.query(
        "INSERT INTO roles (title, salary, department_id) values (?, ?, ?)",
        [response.title, response.salary, response.dept_id],
        function (err, res) {
          console.table(res);
        }
      );
      questions();
    });
}

//function to update an employee's role
function updateRole() {
  inquirer
    .prompt([
      {
        message:
          "Using the first name, which employee would you like to update?",
        type: "input",
        name: "name",
      },
      {
        message: "enter their new role Id:",
        type: "number",
        name: "role_id",
      },
    ])
    .then(function (response) {
      connection.query(
        "UPDATE employee SET role_id = ? WHERE first_name = ?",
        [response.role_id, response.name],
        function (err, res) {
          console.table(res);
        }
      );
      questions();
    });
}

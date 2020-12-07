var inquirer = require("inquirer");
var m = require("./members")

let member;

const role = () => {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "role",
        message: "Enter team member's role:",
        choices: [
          "engineer",
          "intern",
        ],
      }
    ])
    .then(res => {
      member.role = res.role;
      switch (res.role) {
        case "engineer":
          github();
          break;
        default:
          school();
          break;
      }
    });
}

const school = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Enter the name of the last school attended by the team member:",
      }
    ])
    .then(res => {
      member.school = res.school;
      github();
    });
}

const github = () => {
  let message;
  if (member.role == "manager") {
    message = "Enter your github username:";
  } else {
    message = "Enter team member's github username:";
  }
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: message,
      }
    ])
    .then(res => {
      member.github = res.github;
      fname();
    });
}



const fname = () => {
  let message;
  if (member.role == "manager") {
    message = "Enter your first name:";
  } else {
    message = "Enter team member's first name:";
  }
  inquirer
    .prompt([
      {
        type: "input",
        name: "fname",
        message: message,
      }
    ])
    .then(res => {
      member.fname = res.fname;
      lname();
    });
}

const lname = () => {
  let message;
  if (member.role == "manager") {
    message = "Enter your last name:";
  } else {
    message = "Enter team member's last name:";
  }
  inquirer
    .prompt([
      {
        type: "input",
        name: "lname",
        message: message,
      }
    ])
    .then(res => {
      member.lname = res.lname;
      email();
    });
}

const email = () => {
  let message;
  if (member.role == "manager") {
    message = "Enter your email:";
  } else {
    message = "Enter team member's email:";
  }
  inquirer
    .prompt([
      {
        type: "input",
        name: "email",
        message: message,
      }
    ])
    .then(res => {
      member.email = res.email;
      id();
    });
}

const id = () => {
  let message;
  if (member.role == "manager") {
    message = "Enter your user ID:";
  } else {
    message = "Enter team member's user ID:";
  }
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: message,
      }
    ])
    .then(res => {
      member.id = res.id;
      more();
    });
}

const more = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "more",
        message: "Would you like to add another team member?",
      }
    ])
    .then(res => {
      if (res.more) {
        member = m.create();
        role();
      } else {
        m.generateHTML();
      }
    });
}

const init = (manager) => {
  member = manager;
  github();
}

module.exports = { init };
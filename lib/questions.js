var inquirer = require("inquirer");
var m = require("./members")

const role = (member) => {
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
          github(member);
          break;
        default:
          school(member);
          break;
      }
    });
}

const school = (member) => {
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
      github(member);
    });
}

const github = (member) => {
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
      fname(member);
    });
}



const fname = (member) => {
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
      lname(member);
    });
}

const lname = (member) => {
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
      email(member);
    });
}

const email = (member) => {
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
      id(member);
    });
}

const id = (member) => {
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
      more(member);
    });
}

const more = (member) => {
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
        role(m.create());
      } else {
        m.generateHTML();
      }
    });
}

const init = (manager) => {
  github(manager);
}

module.exports = { init, role };
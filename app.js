const q = require("./lib/questions")
const m = require("./lib/members")

// init is the entrypoint of the application
const init = () => {
  console.log("Welcome to Stefany's team generator!");

  // Create the manager
  manager = m.create();
  manager.role = "manager";

  // Start the questions
  q.init(manager);
}
init();
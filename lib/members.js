var fs = require('fs');

let members = [];

const generateHTML = () => {
  console.log("generating HTML...");
  let file = `<!doctype html>
<html>
<head>
    <title>Team Generator</title>
    <link rel="stylesheet" href="team.css">
</head>
<body>`;
  for (let i = 0; i < members.length; i++) {
    let m = members[i];
    file += `
    <div class="member">
        <div class="data"><span class="data-label">Role:</span><span class="data-value">` + m.role + `</span></div>
        <div class="data"><span class="data-label">ID:</span><span class="data-value">` + m.id + `</span></div>
        <div class="data"><span class="data-label">Name:</span><span class="data-value">` + m.fname + ` ` + m.lname + `</span></div>
        <div class="data"><span class="data-label">Email:</span><span class="data-value">` + m.email + `</span></div>`;
    if (m.role == "intern") {
      file += `
        <div class="data"><span class="data-label">School:</span><span class="data-value">` + m.school + `</span></div>`;
    }
    file += `
    </div>`;
  }
  file += `
<body>
</html>`;
  fs.writeFile("team.html", file, function (err) {
    console.log("HTML generated :)");
  });
}

const create = () => {
  member = {};
  members.push(member);
  return member;
}

module.exports = { create, generateHTML };
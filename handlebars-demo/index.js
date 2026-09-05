const fs = require("fs");
const Handlebars = require("handlebars");

// Read template
const source = fs.readFileSync("welcome.hbs", "utf8");

// Compile template
const template = Handlebars.compile(source);

// Dynamic data
const data = {
  name: "Saif",
  premium: true,
  verifyLink: "https://example.com/verify",
};

// Generate HTML
const html = template(data);

// Save HTML
fs.writeFileSync("./output/email.html", html);

console.log("Email Generated Successfully");

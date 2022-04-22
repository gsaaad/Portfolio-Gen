const fs = require("fs");
const generatePage = require("./src/page-template");

//important for holding user inputs in command-line as arguments
const profileDataArgs = process.argv.slice(2);

// const name = profileDataArgs[0]; //first input..
// const github = profileDataArgs[1]; //second input..
const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);
// generate function for creating a page~ using ES6 big fat arrow
// const generatePage = () => "Name: Jane, Github: JaneHub";
// console.log(generatePage());

//! using template literals, printing on same line!
// const generatePage = (userName, githubName) =>
//   `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage("Jane", "janeHUB"));

//! multi line print~ with user input
//! using node app Jane Janehub
// const generatePage = (userName, githubName) => {
//   return `
//     Name:${userName}
//     gitHub: ${githubName}
//   `;
// };
// console.log("USER INPUTS");
// console.log(name, github);
// console.log(generatePage(name, github));

// name of file/output file being created, data being written, any errors

fs.writeFile("./index.html", pageHTML, (err) => {
  if (err) throw err;

  console.log("Portfolio Complete! checkout index.html to see the output");
});

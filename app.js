//using inquirer
const inquirer = require("inquirer");
// console.log(inquirer);
// const fs = require("fs");

// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;
//   console.log("Portfolio Complete! Checkout index.hrml to see the output!");
// });

//how to ask a question and console.log the answer!

//asking about questions for another project
const promptProject = (portfolioData) => {
  // if there is not portfoliodata.projects, create a new empty array
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      // after the prompt. then, push project data to portfoliodata projects~!
      if (projectData.confirmAddProject) {
        //if user said yes to confirm add another project at the end, prompt again and pass through data with it
        //if we didn't pass through portfolio data, we would have erased the data from the past prompt (multi projects in this case)
        return promptProject(portfolioData);
      } else {
        //if user answers no to add another project, just return the data~!
        return portfolioData;
      }
    });
};
//prompt user + chaining the different functions
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github Username",
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message:
        "Would you like to enter some information about yourself for an 'About' section?",
      default: true,
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself",
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};
promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });

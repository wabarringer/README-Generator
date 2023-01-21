const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    message: "What is your project titled?",
    name: "title",
  },
  {
    type: "input",
    message: "What was your motivation?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "why",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "problem",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "learn",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message:
      "What are the instructions to use the project once it is installed?",
    name: "use",
  },
  {
    type: "input",
    message:
      "Were there any contributers, 3rd party assets or tuturials you used?",
    name: "credits",
  },
  {
    type: "checklist",
    message: "What license do you have?",
    choices: [
      "Apache",
      "Boost",
      "BSD",
      "Creative Commons",
      "Eclipse",
      "GNU",
      "IBM",
      "ISC",
      "MIT",
      "Mozilla",
      "Open Data Commons",
      "Perl",
      "SIL",
      "WTFPL",
      "Zlib",
    ],
    name: "license",
  },
]);

const htmlLiteral = `# ${response.title} 
=============================

## Description

- ${response.motivation} 
- ${response.why}
- ${response.problem}
- ${response.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- ${response.installation}

## Usage

- ${response.use}

## Credits

- ${response.credits}

## License

- ${response.license} 

## Tests

-

## Questions

-
`;

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
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
      type: "checkbox",
      message: "What license do you have?",
      name: "license",
      choices: ["Apache", "GNU", "IBM", "MIT", "Mozilla", "Unlicensed"],
    },
    {
      type: "input",
      message:
        "Did you run any tests? Please provide examples on how to run them.",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "gitHub",
    },
  ])
  .then((response) => {
    const gitHubUrl = "https://github.com/" + response.gitHub;
    if (response.license == "Apache") {
      var licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (response.license == "GNU") {
      var licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (response.license == "IBM") {
      var licenseBadge =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (response.license == "MIT") {
      var licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (response.license == "Mozilla") {
      var licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else {
      var licenseBadge = "";
    }
    const mdLiteral = `# ${response.title}

${licenseBadge}

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

- ${response.tests}

## Questions?

- You can contact me at GitHub: ${gitHubUrl}
`;
    fs.writeFile("generated-README.md", mdLiteral, (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("worked");
      }
    });
  });

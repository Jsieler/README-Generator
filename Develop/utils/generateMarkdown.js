// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    return `
  # ${response.title}
  ## Description
  * ${response.description}

  ## Table of Contents
  * [Technologies Used](#technologies-used)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Deployed Application](#deployed-application)
  * [Contact](#contact)
  * 
  ## Technologies-Used
  * ${response.languages}
  ## Installation
  * ${response.installation}
  ## Usage
  * ${response.usage}
  ## License
  * ${response.license}
  ## Contributors
  * ${response.contributors}
  ## Tests
  * ${response.test}
  ## Deployed-Application
  * ${response.link}
  ## Contact 
  Email: [${response.email}](mailto:${response.email})
  </br>
  GitHub: [${response.github}](https://github.com/${response.github})
`;
}

module.exports = generateMarkdown;

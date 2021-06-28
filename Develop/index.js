// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

console.log(`
===================================
Answer Questions to Generate README
===================================
`);

// Prompt Questions for README
const promptUser = [
    // Name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    // Github Name
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Project Name
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the Project? (Required)',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('What is the name of your Project?');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    // Technologies Used
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    // Github Link
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a project GitHub link!');
                return false;
            }
        }
    },
    // Installation 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide the steps required to install your project!');
                return false;
            }
        }
    },
    // Instructions and Examples
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions and examples for use of your project!');
                return false;
            }
        }
    },
    // Contributions 
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? (Required)',
        validate: contributorsInput => {
            if (contributorsInput) {
                return true;
            } else {
                console.log('Please enter names of contributors!');
                return false;
            }
        }
    },

    // Licenses
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a License for your Project',
        choices: ['Apace License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please select a license for your project.");
                return false;
            }
        }
    },

    // Tests
    {
        type: 'input',
        name: 'test',
        message: 'Please include test instructions. (Optional)'
    },

    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },

]


// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// Function to initialize app
function init() {
    inquirer.prompt(promptUser)
        .then((inquirerResponses) => {
            writeToFile("generatedREADME.md", generateMarkdown({ ...inquirerResponses }))
            console.log(`
==============================
Successfully Generated README!
==============================
`);
        })
}

// Function call to initialize app
init();
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return ` 
    ##Title
    ${data.projectTitle}
  ## Description
  🔍 ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  💾 ${data.installation}
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 
  ## Contributing
  👪 ${data.contributing}
  ## Tests
  ✏️ ${data.tests}
  ## Questions
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  
  `;
  }
  
  
  
  module.exports = generateMarkdown;
  
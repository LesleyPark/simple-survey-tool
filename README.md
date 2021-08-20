# Survey Tool

A simple survey tool that allows users to submit numeric rating questions

## Getting Started
First off, clone this repo
```bash
git clone https://github.com/LesleyPark/simple-survey-tool.git
```
As usual, install all relevant packages (this might take a little while)
```bash
npm install
```
Next, create your bundle
```bash
npm run-script build
```
Start that server
```bash
npm run-script start
```
And view the app at
```bash
http://localhost:9000/
```

## Completed
### Survey Creation Steps
  * Navbar
  * Begin a new survey
  * Submit questions
  * TextField validation to ensure no empty submits on both survey name + questions
  * Displays each question as it's submitted

### In Progress
  * Database setup
  * Finish survey button sends post request that sends all survey questions to db along with setting a corresponding survey ID (blocked by db setup)

## TODO
### Survey Creation Steps
  * Functionality to delete questions
  * Displays corresponding link to send to surveys to other users/view finished survey upon survey creation completion (`surveys/${id}` route)
### Survey Taking Steps
  * Lists all survey questions along with Material UI small steps slider for input
  * Post request with values for each response upon final submit
### Results Viewer
  * Displays each question and corresponding average response in Material UI accordion
  * Upon accordian expansion, lists individual responses from each user
### Tests
  * Unit tests
  * E2E tests

## Misc
### Nice to haves for V2
  * Cleaner question display (Material UI cards or something similar)
  * Generate hashed survey link for privacy
  * Ability to clone surveys
  * Ability to change survey questions after submission
  * Allow for different question types
  * Login functionality to 1) verify credentials for respondents and survey creators 2) give access to survey results only to survey creators
  * Better accessibility
  * Unified color scheme + branding + icons corresponding to actions
  * Dynamic labels on TextField (e.g. "Add a question," "More questions!", "And another!", etc.)
  * For survey response view, a graphic that shows the average response relative to the max (Harvey balls or something similar?)
### Other Concerns
  * Should number of survey questions be limited? If not, need to rethink UI choice for question display
  * 
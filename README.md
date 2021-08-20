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
### Survey Creation Steps (Front-End)
  * Start a new survey
  * Submit questions to the survey until finish button is complete

## TODO
### Survey Creation Steps
  * Displays corresponding link to send out once the survey once finalized submitted (nice to have: hashed IDs for link for privacy)
### Survey Taking Steps
  * Shows all survey questions along with Material UI small steps slider for input
  * Records responses upon final submit
### Results Viewer
  * Displays question and average response
  * Also displays response from each user
### Tests
  * Unit tests
  * E2E tests
### Survey ID hash
  * Anonymized ID hashes for each survey for privacy
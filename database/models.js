const Sequelize = require('sequelize');
const connection = require('./');

const surveys = connection.define('survey', {
  title: Sequelize.STRING,
}, {timestamps: true})

// const questions = connection.define('question', {
//   question: Sequelize.STRING,
//   surveyId: Sequelize.INTEGER,
// }, {timestamps: true})

// const responses = connection.define('response', {
//   respondent: Sequelize.STRING,
//   value: Sequelize.INTEGER,
//   questionId: Sequelize.INTEGER,
// }, {timestamps: true})

// connection.sync({force: false})
//   .then(() => console.log('***** Synced to PostgreSQL database *****'))
//   .catch(err => console.log('***** Error syncing to PostgreSQL database *****'))

// module.exports = {surveys, questions, responses}
module.exports = {surveys}
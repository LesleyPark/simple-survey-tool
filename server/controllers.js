const db = require('../database/models');

const controllers = {

  get: (req, res) => {
    res.status(200).send()
    .catch (err => console.error(err))
  },

  // createSurvey: (req, res) => {
  //   // res.status(200).send()
  //   // .catch (err => console.error(err))
  //   res.send(200)
  // }
}

module.exports = controllers;
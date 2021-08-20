const db = require('../database/models');

const controllers = {

  get: (req, res) => {
    res.status(200).send()
    .catch (err => console.error(err))
  },

  submitTitle: (req, res) => {
    const {title} = req.body;
    db.surveys.create({
      title
    })
    .then(survey => {
      res.status(201).send(survey)
    })
    .catch(err => console.error(err)) 
  },
}

module.exports = controllers;
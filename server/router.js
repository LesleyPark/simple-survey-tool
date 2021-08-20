const router = require('express').Router();
const controllers = require('./controllers');

router.route('/')
  .get(controllers.get)
  .post(controllers.submitTitle)

module.exports = router;
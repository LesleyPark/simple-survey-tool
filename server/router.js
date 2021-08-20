const router = require('express').Router();
const controllers = require('./controllers');

router.route('/')
  .get(controllers.get)

// router.route('/create')
//   .get(controllers.createSurvey)

module.exports = router;
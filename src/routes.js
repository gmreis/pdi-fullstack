const router = require('express').Router();
const NewsController = require('./controller');

router.get('/news', NewsController.getAll);

module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api/index');
console.log(apiRoutes);

router.use('./api/index', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
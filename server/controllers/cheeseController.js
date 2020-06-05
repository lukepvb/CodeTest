// bring in the database key from config/keys
const db = require('../config/keys');

const cheeseController = {};

cheeseController.getAllCheeseByZip = (req, res, next) => {
  const cheeseQuery = 'SELECT *';

  db.query(cheeseQuery)
    .then((result) => {
      res.locals.cheeses = result.rows;
      // console.log(res.locals.cheeses);
    })
    .then(next)
    .catch((err) => {
      setImmediate(() => {
        throw err;
      });
    });
};

cheeseController.get = (req, res, next) => {
  // come back to this part!!!!!!!!!!!!
  const speciesId = req.query.id;
  console.log(speciesId);

  next();
};

module.exports = cheeseController;

// bring in the database key from config/keys
const db = require('../config/keys');

const cheeseController = {};

cheeseController.getAllCheeseByZip = (req, res, next) => {
  const { zipCode } = req.body;

  const cheeses = `SELECT * FROM "cheeses" JOIN "specials" ON cheeses.id = specials.cheese_id 
  WHERE zip IN (${zipCode})
  AND out_of_stock = false`;

  db.query(cheeses)
    .then((result) => {
      res.locals.cheeses = result.rows;
      console.log(res.locals.cheeses);
    })
    .then(next)
    .catch((err) => {
      setImmediate(() => {
        throw err;
      });
    });
};

cheeseController.applyLocalDiscount = (req, res, next) => {
  // pull cheeses from res.locals
  const { cheeses } = res.locals;

  // iterate over array of cheese objects,
  for (let i = 0; i < cheeses.length; i++) {
    const price = cheeses[i].price;

    const percent_discount = cheeses[i].percent_discount;

    const discountedTotal = ((100 - percent_discount) / 100) * price;

    cheeses[i].discountedTotal = Math.round(100 * discountedTotal) / 100;

    const savings = price * (percent_discount / 100);

    cheeses[i].savings = Math.round(100 * savings) / 100;
  }
  console.log('discounted cheeses, line 40 in cheeseController', cheeses);
  return next();
};

module.exports = cheeseController;

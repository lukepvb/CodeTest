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
    // pull out the price of each cheese object
    const price = cheeses[i].price;

    // pull out the percent_discount from each cheese object
    const percent_discount = cheeses[i].percent_discount;

    // apply discount to the original price to get discountedTotal
    const discountedTotal = ((100 - percent_discount) / 100) * price;

    // set a key:value pair on each cheese object to store the discounted total, rounded to the nearest hundredth
    cheeses[i].discountedTotal = Math.round(100 * discountedTotal) / 100;

    // calculate savings for a particular cheese based on the local discount
    const savings = price * (percent_discount / 100);

    // set a key:value pair for the savings based on discount for each of the cheeses in a particular area code
    cheeses[i].savings = Math.round(100 * savings) / 100;
  }
  return next();
};

module.exports = cheeseController;

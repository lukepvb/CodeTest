const express = require('express');

const cheeseController = require('../../controllers/cheeseController');

const router = express.Router();

/* /api/cheeses/ route */

router.get(
  '/',
  cheeseController.getAllCheeseByZip,
  cheeseController.applyLocalDiscount,
  (req, res) => {
    res.status(200).json(res.locals.cheeses);
  }
);

// router.post('/create', appController.createApp, (req, res) => {
//   res.status(200).json(res.locals.newApp);
// });

// router.post('/update', appController.updateApp, userController.getUserById, (req, res) => {
//   console.log('SubDocument updated! - line 13 apps.js');
//   res.status(200).json(res.locals.userData);
// });

// router.delete('/delete', appController.deleteApp, (req, res) => {
//   console.log('App deleted!');
//   res.sendStatus(202);
// });

module.exports = router;

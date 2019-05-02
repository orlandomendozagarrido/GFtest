const express = require('express');
const Joi = require('@hapi/joi');
const db = require('../db')
const messages = db.get('messages');
const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(100).required(),
    message: Joi.string().alphanum().min(3).max(100).required(),
    latitude: Joi.number().min(-90).max(90).required();
    longitude: Joi.number().min(-180).max(180).required();

});


router.get('/', (req, res) => {
  res.json([]);
});
router.POST('/', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if(result.error === null){
    const { name, message, latitude, longitude } = req.body;
    const userMessage = {
      name,
      message,
      latitude,
      longitude,
      date: new Date()
    }
  messages
  .insert(userMessage)
  .then(insertedMessage => {
    res.json(insertedMessage);
  })

  }else{
    next(result.error);
  }

});

module.exports = router;




// password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
// access_token: [Joi.string(), Joi.number()],
// birthyear: Joi.number().integer().min(1900).max(2013),
// email: Joi.string().email({ minDomainSegments: 2 })
//
// // Return result.
// const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);
// // result.error === null -> valid
//
// // You can also pass a callback which will be called synchronously with the validation result.
// Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) { })

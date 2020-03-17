const { Router } = require('express');
const Event = require('../models/Event');

module.exports = Router()
  .post('/', (req, res) => {
    Event
      .create(req.body)
      .then(recipe => res.send(recipe));
  })

  .get('/', (req, res) => {
    Event
      .find()
      .select({ name: true })
      .then(recipes => res.send(recipes));
  })

  .get('/:id', (req, res) => {
    Event
      .findById(req.params.id)
      .then(recipe => res.send(recipe));
  })

  .patch('/:id', (req, res) => {
    Event
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(recipe => res.send(recipe));
  })

  .delete('/:id', (req, res) => {
    Event
      .findByIdAndDelete(req.params.id)
      .then(recipe => res.send(recipe));
  });

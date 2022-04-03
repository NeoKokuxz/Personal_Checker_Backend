const express = require('express');
const router = express.Router();

router
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({
      type: 'GET',
      todoId: `${req.params.id}`,
      title: `Dummy Title`,
      description: `Dummy Description`,
      scheduledTime: `${new Date()}`,
    });
  })
  .post((req, res) => {
    res.status(200).json({
      type: 'POST',
      todoId: `${Math.floor(100000 + Math.random() * 900000)}`,
      title: `Dummy Title`,
      description: `Dummy Description`,
      createdAt: `${new Date()}`,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      type: 'PUT',
      todoId: `${req.params.id}`,
      newTitle: `Dummy Title`,
      newDescription: `Dummy Description`,
      modifiedAt: `${new Date()}`,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      type: 'DELETE',
      deletedTodo: `${req.params.id}`,
      deletionTime: `${new Date()}`,
    });
  });

module.exports = router;

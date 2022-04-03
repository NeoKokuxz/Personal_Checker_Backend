const express = require('express');
const router = express.Router();

router
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({
      type: 'GET',
      user: `${req.params.id}`,
      firstName: `Dummy First Name`,
      lastName: `Dummy Last name`,
      currentTime: `${new Date()}`,
    });
  })
  .post((req, res) => {
    res.status(200).json({
      type: 'POST',
      user: `${Math.floor(100000 + Math.random() * 900000)}`,
      firstName: `Dummy First Name`,
      lastName: `Dummy Last name`,
      createdAt: `${new Date()}`,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      type: 'PUT',
      user: `${req.params.id}`,
      newFirstName: `Dummy First Name`,
      newLastName: `Dummy Last name`,
      modifiedAt: `${new Date()}`,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      type: 'DELETE',
      deletedUser: `${req.params.id}`,
      deletionTime: `${new Date()}`,
    });
  });

module.exports = router;

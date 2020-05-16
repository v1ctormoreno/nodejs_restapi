const router = require('express').Router();
const pool = require('../database');

const data = require(`../example.json`);

  // Create a new Customer
  router.post("/customers", customers.create);

  // Retrieve all Customers
  router.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  router.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  router.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  router.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  router.delete("/customers", customers.deleteAll);

module.exports = router;
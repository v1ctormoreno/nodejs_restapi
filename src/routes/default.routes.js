const router = require('express').Router();
const pool = require('../database');

router.get('/', (req, res) => {
        res.render(`pages/index`);
});

module.exports=router; 
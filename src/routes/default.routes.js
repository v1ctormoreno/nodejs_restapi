const router = require('express').Router();
const pool = require('../database');

const info = require('../info.json');

router.get('/', (req, res) => {
        res.json(info);
});

module.exports=router; 
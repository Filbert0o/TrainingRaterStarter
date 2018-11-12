const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.json({ msg: 'Hello World Works!' }));

module.exports = router;

// sequelize model:generate --name Sessions --attributes name:string,startTime:date,location:string
const express = require('express');
const router = express.Router();

const responsesController = require('../src/responsesController')

router.route('/user/create').post(responsesController.createUserControllerFn);

module.exports= router;
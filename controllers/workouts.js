const express = require ('express');
const async = require('seed/lib/seed/base/async');
const router = require('express').Router();
const { Workouts} = require('../models');
const withAuth = require('../utils/auth');


//new workout page
// redirects
router.get ('/', withAuth, async (req, res,) => {
    res.render('workouts');
});






module.exports = router;